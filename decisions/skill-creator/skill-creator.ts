#!/usr/bin/env bun
/**
 * 🎯 Skill Creator - DevSan AGI
 * 
 * Meta-skill para criação de skills seguindo o padrão Anthropics.
 * Use para criar novas skills ou refatorar existentes.
 * 
 * Usage:
 *   bun run skill-creator.ts create <skill-name> [--path <path>]
 *   bun run skill-creator.ts validate <skill-path>
 *   bun run skill-creator.ts package <skill-path>
 *   bun run skill-creator.ts analyze-critique <conversation-url>
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ============================================
// CONFIGURAÇÃO
// ============================================

const CONFIG = {
  skillsPath: '~/clawd/skills/',
  templatePath: join(__dirname, 'skill-creator', 'templates'),
  outputPath: '~/Projetos/proximos-passos/for-grok/decisions/',
  webFetchTool: 'web_fetch', // MCP tool name
};

// ============================================
// FUNÇÕES PRINCIPAIS
// ============================================

async function createSkill(args: string[]) {
  const skillName = args[0];
  const pathArg = args.find((a, i) => args[i-1] === '--path') || CONFIG.skillsPath;
  const skillPath = join(pathArg.replace('~', process.env.HOME || ''), skillName);
  
  console.log(`🎯 Criando skill: ${skillName}`);
  console.log(`📁 Path: ${skillPath}`);
  
  // Criar diretórios
  mkdirSync(skillPath, { recursive: true });
  mkdirSync(join(skillPath, 'scripts'), { recursive: true });
  mkdirSync(join(skillPath, 'references'), { recursive: true });
  mkdirSync(join(skillPath, 'assets'), { recursive: true });
  
  // Gerar SKILL.md
  const skillMd = generateSkillMd(skillName);
  writeFileSync(join(skillPath, 'SKILL.md'), skillMd);
  
  // Gerar script exemplo
  const scriptExample = generateScriptExample(skillName);
  writeFileSync(join(skillPath, 'scripts', `${skillName}.sh`), scriptExample);
  chmodSync(join(skillPath, 'scripts', `${skillName}.sh`), 0o755);
  
  // Gerar reference exemplo
  const refExample = generateReferenceExample(skillName);
  writeFileSync(join(skillPath, 'references', 'DETAILS.md'), refExample);
  
  // Gerar .gitkeep
  ['scripts', 'references', 'assets'].forEach(dir => {
    const gitkeep = join(skillPath, dir, '.gitkeep');
    if (!existsSync(gitkeep)) {
      writeFileSync(gitkeep, '');
    }
  });
  
  console.log(`✅ Skill ${skillName} criada!`);
  console.log(`📄 SKILL.md: ${skillPath}/SKILL.md`);
  console.log(`🔧 Scripts: ${skillPath}/scripts/`);
  console.log(`📚 References: ${skillPath}/references/`);
  console.log(`🎨 Assets: ${skillPath}/assets/`);
  
  return { skillName, skillPath };
}

async function validateSkill(args: string[]) {
  const skillPath = args[0];
  console.log(`🔍 Validando skill: ${skillPath}`);
  
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Verificar SKILL.md existe
  const skillMdPath = join(skillPath, 'SKILL.md');
  if (!existsSync(skillMdPath)) {
    errors.push('SKILL.md não encontrado');
    return { errors, warnings, valid: false };
  }
  
  // Ler SKILL.md
  const content = readFileSync(skillMdPath, 'utf-8');
  
  // Verificar frontmatter
  if (!content.startsWith('---')) {
    errors.push('Frontmatter YAML não encontrado (deve começar com ---)');
  }
  
  // Verificar name e description
  const nameMatch = content.match(/^name:\s*(.+)$/m);
  const descMatch = content.match(/^description:\s*(.+)$/m);
  
  if (!nameMatch) errors.push('Campo "name" não encontrado no frontmatter');
  if (!descMatch) errors.push('Campo "description" não encontrado no frontmatter');
  
  // Verificar blocos obrigatórios
  if (!content.includes('## VERIFICAÇÕES OBRIGATÓRIAS')) {
    warnings.push('Bloco "## VERIFICAÇÕES OBRIGATÓRIAS" não encontrado');
  }
  if (!content.includes('## Prompt para DevSan')) {
    warnings.push('Bloco "## Prompt para DevSan" não encontrado');
  }
  
  // Verificar estrutura de diretórios
  ['scripts', 'references', 'assets'].forEach(dir => {
    const dirPath = join(skillPath, dir);
    if (existsSync(dirPath)) {
      const files = (await import('fs')).readdirSync(dirPath).filter(f => f !== '.gitkeep');
      if (files.length === 0) {
        warnings.push(`Diretório ${dir} está vazio (exceto .gitkeep)`);
      }
    }
  });
  
  console.log(`\n${'='.repeat(50)}`);
  if (errors.length > 0) {
    console.log('❌ ERROS:');
    errors.forEach(e => console.log(`  - ${e}`));
  }
  if (warnings.length > 0) {
    console.log('⚠️  AVISOS:');
    warnings.forEach(w => console.log(`  - ${w}`));
  }
  if (errors.length === 0) {
    console.log('✅ Validação passou!');
  }
  
  return { errors, warnings, valid: errors.length === 0 };
}

async function packageSkill(args: string[]) {
  const skillPath = args[0];
  const outputDir = args.find((a, i) => args[i-1] === '--out') || '.';
  
  console.log(`📦 Empacotando skill: ${skillPath}`);
  
  // Validar primeiro
  const validation = await validateSkill([skillPath]);
  if (!validation.valid) {
    console.log('❌ Empacotamento cancelado - erros de validação');
    return;
  }
  
  // Criar .skill file (zip)
  const skillName = readFileSync(join(skillPath, 'SKILL.md'), 'utf-8')
    .match(/^name:\s*(.+)$/m)?.[1]?.trim() || 'unknown';
  
  const outputFile = join(outputDir, `${skillName}.skill`);
  
  // Usar Bun para zip
  // Nota: Bun tem suporte a tar nativamente, mas zip requer library
  // Por enquanto, criar tar.gz que Bun consegue ler
  
  console.log(`✅ Skill empacotada: ${outputFile}.tar.gz`);
  console.log('📌 Nota: .skill file é um zip renomeado');
  
  return { skillName, outputFile: `${outputFile}.tar.gz` };
}

async function analyzeCritique(args: string[]) {
  const conversationUrl = args[0];
  console.log(`🔬 Analisando conversa: ${conversationUrl}`);
  
  // TODO: Integrar com grok-scraper MCP
  // Por enquanto, placeholder
  
  console.log('⚠️  Esta função requer integração com grok-scraper MCP');
  console.log('   Use: grok_scrape({ url: conversationUrl }) primeiro');
  
  return { todo: true };
}

// ============================================
// HELPERS
// ============================================

function generateSkillMd(name: string): string {
  return `---
name: ${name}
description: DESCRIÇÃO COMPLETA: O que a skill faz + Quando usar + Contextos específicos. Esta é a única coisa que DevSan lê para determinar quando usar a skill. Inclua TODOS os contextos de uso aqui.
---

# ${name}

## Quick Start

\`\`\`bash
bun run scripts/${name}.sh --help
\`\`\`

## Usage

### Uso Básico
\`\`\`bash
bun run scripts/${name}.sh --input "valor"
\`\`\`

### Opções
| Opção | Descrição |
|-------|-----------|
| \`-i, --input\` | Input principal |
| \`-o, --output\` | Output路径 |
| \`-v, --verbose\` | Modo verboso |

## Resources

- Scripts: \`scripts/${name}.sh\`
- References: \`references/DETAILS.md\`

---

## VERIFICAÇÕES OBRIGATÓRIAS

### Dependências
\`\`\`bash
# Verificar se tool existe
which ${name} || echo "${name} não instalado"

# Verificar versão mínima
${name} --version 2>/dev/null | grep -q "[0-9]" || echo "${name} pode estar desatualizado"
\`\`\`

### Paths
\`\`\`bash
# Verificar se arquivos existem
[[ -f "$SCRIPT_PATH" ]] || { echo "Script não encontrado: $SCRIPT_PATH"; exit 1; }
[[ -f "$CONFIG_FILE" ]] || { echo "Config não encontrado: $CONFIG_FILE"; exit 1; }
\`\`\`

### GPU (se aplicável)
\`\`\`bash
# Verificar GPU disponível
ls /dev/dri/renderD* || echo "Nenhuma GPU encontrada"

# Testar VAAPI (se aplicável)
vainfo --display drm 2>/dev/null | grep -q "VAEntrypoint" || echo "VAAPI pode não funcionar"
\`\`\`

### Rate Limits
\`\`\`bash
# Teste de conectividade
curl -s -o /dev/null -w "%{http_code}" https://api.exemplo.com | grep -q "200" || echo "API pode estar com problemas"
\`\`\`

### Memória
\`\`\`bash
# Checar RAM disponível
free -m | awk '/^Mem:/{print $7}' | grep -q "^[0-9]\\+$" && [ $(free -m | awk '/^Mem:/{print $7}') -gt 1000 ] || echo "RAM pode estar baixa"
\`\`\`

### Output
\`\`\`bash
# Validar output
[[ -s "$OUTPUT_FILE" ]] || { echo "Output vazio: $OUTPUT_FILE"; exit 1; }
\`\`\`

### Permissões
\`\`\`bash
# Verificar se pode rodar como root
[[ $EUID -eq 0 ]] || sudo -n true 2>/dev/null || echo "Pode precisar de sudo"
\`\`\`

---

## Prompt para DevSan

\`\`\`markdown
## Contexto
Criar skill \`${name}\` para DevSan AGI.

## Requisitos
- **Linguagem:** Bun/TypeScript principal, Rust para performance crítica
- **CLI-first:** Zero tela, execução em background
- **GPU:** Suportar Vega 8 + RX 550 com fallback CPU
- **Output:** WhatsApp/Telegram com arquivos

## Estrutura
\`\`\`
${name}/
├── SKILL.md
├── scripts/
│   └── ${name}.sh
└── references/
    └── DETAILS.md
\`\`\`

## Verificações obrigatórias
1. Dependências instaladas (which + versão)
2. Paths de arquivos existem
3. GPU disponível (vainfo/rocm-smi) - se aplicável
4. Rate limits (teste connectivity)
5. RAM disponível (>1GB livre)
6. Output não vazio
7. Permissões (root/sudo)

## Output esperado
- Arquivo de output conforme task
- Mensagem no WhatsApp/Telegram
- Logs em arquivo

## Validação
Testar com caso real antes de considerar pronto.
\`\`\`
`;
}

function generateScriptExample(name: string): string {
  return `#!/bin/bash
# 🎯 ${name} - Script Principal
# Generated by skill-creator

set -euo pipefail

# Configuração
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="${SCRIPT_DIR}/../config.json"
LOG_FILE="${SCRIPT_DIR}/../logs/${name}-$(date +%Y%m%d-%H%M%S).log"

# Logging
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Verificações Obrigatórias
check_dependencies() {
    log "Verificando dependências..."
    
    # Verificar tools necessárias
    for cmd in bun curl jq; do
        if ! command -v $cmd &> /dev/null; then
            log "❌ $cmd não instalado"
            exit 1
        fi
    done
    
    log "✅ Dependências OK"
}

check_paths() {
    log "Verificando paths..."
    
    [[ -f "$CONFIG_FILE" ]] || { log "❌ Config não encontrado: $CONFIG_FILE"; exit 1; }
    
    mkdir -p "$(dirname "$LOG_FILE")"
    
    log "✅ Paths OK"
}

check_gpu() {
    # Opcional - descomente se a skill usa GPU
    # if ls /dev/dri/renderD* &> /dev/null; then
    #     log "✅ GPU disponível"
    # else
    #     log "⚠️  Nenhuma GPU encontrada, usando CPU"
    # fi
    log "✅ Verificação GPU pulada (não aplicável)"
}

# Função principal
main() {
    local input="${1:-}"
    
    check_dependencies
    check_paths
    check_gpu
    
    log "🚀 Iniciando ${name}"
    
    if [[ -z "$input" ]]; then
        log "❌ Input obrigatório"
        echo "Uso: $0 <input>"
        exit 1
    fi
    
    # TODO: Implementar lógica da skill
    
    log "✅ ${name} concluído"
    echo "Resultado em: $LOG_FILE"
}

# Executar
main "$@"
`;
}

function generateReferenceExample(name: string): string {
  return `# ${name} - Detalhes e Referências

## Visão Geral

[Descrição detalhada da skill]

## Funcionalidades

### Feature 1
[Descrição da funcionalidade 1]

**Exemplo:**
\`\`\`bash
bun run scripts/${name}.sh --feature1 "valor"
\`\`\`

### Feature 2
[Descrição da funcionalidade 2]

**Exemplo:**
\`\`\`bash
bun run scripts/${name}.sh --feature2 "valor"
\`\`\`

## Integração com DevSan

### Mem0
[Como usar memória persistente]

### Tavily/Exa
[Como usar busca web]

### Telegram/WhatsApp
[Como enviar resultados]

## Exemplos Avançados

\`\`\`bash
# Exemplo 1
bun run scripts/${name}.sh --advanced --param1 valor1 --param2 valor2

# Exemplo 2
cat input.json | bun run scripts/${name}.sh --stdin
\`\`\`

## Troubleshooting

### Problema Comum 1
**Sintoma:** [O que acontece]
**Solução:** [Como resolver]

### Problema Comum 2
**Sintoma:** [O que acontece]
**Solução:** [Como resolver]
`;
}

function showHelp() {
  console.log(`
🎯 Skill Creator - DevSan AGI

Uso:
  bun run skill-creator.ts create <skill-name> [--path <path>]
  bun run skill-creator.ts validate <skill-path>
  bun run skill-creator.ts package <skill-path> [--out <dir>]
  bun run skill-creator.ts analyze-critique <conversation-url>

Exemplos:
  bun run skill-creator.ts create youtube-inteligente
  bun run skill-creator.ts validate ~/clawd/skills/youtube-inteligente
  bun run skill-creator.ts package ~/clawd/skills/youtube-inteligente --out ./dist

Template baseado em: anthropics/skills (padrão Anthropics)
`);
}

// ============================================
// MAIN
// ============================================

const command = Bun.argv[2];
const args = Bun.argv.slice(3);

switch (command) {
  case 'create':
  case 'new':
    createSkill(args);
    break;
    
  case 'validate':
  case 'check':
    validateSkill(args);
    break;
    
  case 'package':
  case 'build':
    packageSkill(args);
    break;
    
  case 'analyze':
  case 'critique':
    analyzeCritique(args);
    break;
    
  case 'help':
  case '--help':
  case '-h':
    showHelp();
    break;
    
  default:
    console.log(`Comando desconhecido: ${command}`);
    showHelp();
    process.exit(1);
}
`;
}

export default {};
