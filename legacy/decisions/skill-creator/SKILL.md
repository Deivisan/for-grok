---
name: skill-creator
description: Meta-skill para criação e iteração de skills do DevSan AGI. Use quando precisar criar uma nova skill ou refatorar uma existente. SIGA RIGOROSAMENTE o padrão Anthropics: frontmatter YAML + Markdown conciso + progressive disclosure. Inclui template, validação, packaging e ciclo de melhoria contínua. Para qualquer skill criada, INCLUA OBRIGATORIAMENTE os blocos "## VERIFICAÇÕES OBRIGATÓRIAS" e "## Prompt para DevSan" no final de cada SKILL.md.
license: MIT
---

# Skill Creator - DevSan AGI

Meta-skill para criação de skills seguindo o padrão Anthropics.

## About Skills

Skills são pacotes modulares que estendem as capacidades do DevSan AGI com conhecimento especializado, workflows e ferramentas. Pensem neles como "guias de onboarding" para domínios específicos — transformam o DevSan de um agente generalista em um agente especializado.

### O que Skills Proporcionam

1. **Workflows especializados** - Procedimentos multi-passo para domínios específicos
2. **Integrações de ferramentas** - Instruções para trabalhar com formatos ou APIs específicas
3. **Expertise de domínio** - Conhecimento da empresa, schemas, lógica de negócio
4. **Recursos bundlados** - Scripts, referências e assets para tarefas complexas e repetitivas

## Princípios Core

### Conciso é Chave

A janela de contexto é um bem público. Skills dividem a janela com: system prompt, histórico de conversa, metadados de outras skills e a request real do usuário.

**Premissa: DevSan já é muito inteligente.** Adicione só contexto que ele não tem. Desafie cada informação: "DevSan realmente precisa dessa explicação?" e "Esse parágrafo justifica seu custo em tokens?"

Prefira exemplos concisos sobre explicações verbosas.

### Configure Graus de Liberdade Apropriados

Combine o nível de especificidade com a fragilidade e variabilidade da tarefa:

**Alta liberdade (instruções textuais)**: Use quando múltiplas abordagens são válidas, decisões dependem de contexto, ou heurísticas guiam a abordagem.

**Média liberdade (pseudocódigo ou scripts com parâmetros)**: Use quando um padrão preferido existe, alguma variação é aceitável, ou configuração afeta comportamento.

**Baixa liberdade (scripts específicos, poucos parâmetros)**: Use quando operações são frágeis e propensas a erros, consistência é crítica, ou uma sequência específica deve ser seguida.

Pense em DevSan explorando um caminho: uma ponte estreita com penhascos precisa de guardas específicos (baixa liberdade), enquanto um campo aberto permite muitas rotas (alta liberdade).

### Anatomia de uma Skill

Cada skill consiste de um arquivo SKILL.md obrigatório e recursos opcionais:

```
skill-name/
├── SKILL.md (obrigatório)
│   ├── YAML frontmatter metadata (obrigatório)
│   │   ├── name: (obrigatório)
│   │   └── description: (obrigatório)
│   └── Markdown instructions (obrigatório)
└── Bundled Resources (opcional)
    ├── scripts/          - Código executável (Python/Bash/etc.)
    ├── references/       - Documentação carregada sob demanda no contexto
    └── assets/           - Arquivos usados no output (templates, ícones, etc.)
```

#### SKILL.md (obrigatório)

Todo SKILL.md consiste de:

- **Frontmatter (YAML):** Contém campos `name` e `description`. Estes são os únicos campos que DevSan lê para determinar quando a skill é usada. Seja claro e abrangente.
- **Body (Markdown):** Instruções e guia para usar a skill. Carregado SOMENTE DEPOIS que a skill dispara.

#### Bundled Resources (opcional)

##### Scripts (`scripts/`)

Código executável para tarefas que requerem confiabilidade determinística ou são reescritas repetidamente.

- **Quando incluir:** Quando o mesmo código está sendo reescrito repetidamente ou confiabilidade determinística é necessária
- **Exemplo:** `scripts/youtube-download.sh` para download de vídeos
- **Benefícios:** Eficiente em tokens, determinístico, pode ser executado sem carregar no contexto

##### References (`references/`)

Documentação e material de referência carregado sob demanda no contexto.

- **Quando incluir:** Para documentação que DevSan deve referenciar enquanto trabalha
- **Exemplos:** `references/api-docs.md` para APIs, `references/schemas.md` para schemas de banco
- **Casos de uso:** Database schemas, API documentation, conhecimento de domínio, políticas, guias de workflow
- **Prática:** Se arquivos são grandes (>10k words), inclua padrões grep search no SKILL.md
- **Evite duplicação:** Informação deve viver em SKILL.md OU arquivos de referência, não ambos

##### Assets (`assets/`)

Arquivos não destinados a serem carregados no contexto, mas usados no output que DevSan produz.

- **Quando incluir:** Quando a skill precisa de arquivos que serão usados no output final
- **Exemplos:** `assets/template.html` para templates HTML, `assets/styles.css` para CSS
- **Casos de uso:** Templates, imagens, ícones, boilerplate code, fontes

### O Que NÃO Incluir em uma Skill

Uma skill deve conter só arquivos essenciais. NÃO crie documentação auxiliar:

- README.md
- INSTALLATION_GUIDE.md  
- QUICK_REFERENCE.md
- CHANGELOG.md

A skill deve conter só informação necessária para um agente de IA fazer o trabalho. Não contexto auxiliar sobre o processo de criação.

## Princípio de Progressive Disclosure

Skills usam sistema de 3 níveis para gerenciar contexto:

1. **Metadata (name + description)** - Sempre no contexto (~100 palavras)
2. **SKILL.md body** - Quando skill dispara (<5k palavras)
3. **Bundled resources** - Conforme necessário (ilimitado)

#### Padrões de Progressive Disclosure

Mantenha SKILL.md nos essentials e menos de 500 linhas. Divida conteúdo em arquivos separados ao se aproximar desse limite.

**Padrão 1: Guia alto-nível com referências**

```markdown
# Processamento de Vídeo

## Início rápido

Baixe com yt-dlp:
[exemplo de código]

## Features avançadas

- **Cortes inteligentes**: Veja [CORTES.md](CORTES.md) para guia completo
- **Fact-check**: Veja [FACTCHECK.md](FACTCHECK.md) para como verificar claims
```

**Padrão 2: Organização por domínio**

Para skills com múltiplos domínios:

```
video-processing/
├── SKILL.md (overview + navegação)
└── references/
    ├── youtube.md (padrões específicos YouTube)
    ├── local.md (padrões vídeos locais)
    └── editing.md (edição e cortes)
```

**Padrão 3: Detalhes condicionais**

Mostre conteúdo básico, link para avançado:

```markdown
# Processamento de Áudio

## Transcrição

Use youtube-transcript-api para transcrições existentes.
Veja [TRANSCRICAO.md](TRANSCRICAO.md) para detalhes.

## Análise

Para análise de sentimento: Veja [ANALISE.md](ANALISE.md)
```

## Processo de Criação de Skill

1. **Entender** a skill com exemplos concretos
2. **Planejar** conteúdo reutilizável
3. **Inicializar** usando template
4. **Editar** skill e recursos
5. **Empacotar** com validação
6. **Iterar** baseado em uso real

### Passo 1: Entendendo com Exemplos Concretos

Para criar uma skill efetiva, entenda claramente exemplos de como a skill será usada.

Quando construir uma skill de YouTube, pergunte:

- "Que funcionalidades a skill deve suportar?"
- "Pode me dar exemplos de uso?"
- "Exemplos: 'baixa esse vídeo' ou 'corta os melhores momentos'. Quais outros?"
- "O que um usuário diria pra.trigger essa skill?"

### Passo 2: Planejando Conteúdo Reutilizável

Transforme exemplos em skill efetiva analisando cada um:

1. Como executar do zero?
2. Quais scripts, referências e assets seriam úteis?

Exemplo - Skill `youtube-inteligente`:
1. Requer yt-dlp, youtube-transcript-api, ffmpeg
2. `scripts/download.sh`, `scripts/transcribe.py`, `scripts/corte.sh`

### Passo 3: Inicializando a Skill

Use o script de inicialização:

```bash
scripts/init_skill.py <skill-name> --path ~/clawd/skills/
```

O script:
- Cria diretório da skill
- Gera template SKILL.md com frontmatter e TODO
- Cria diretórios: `scripts/`, `references/`, `assets/`
- Adiciona arquivos exemplo

### Passo 4: Editando a Skill

**Guidelines de escrita:** Use sempre forma imperativa/infinito.

#### Frontmatter

```yaml
name: youtube-inteligente
description: Download, transcrição e corte inteligente de vídeos YouTube. Use quando usuário mandar link YouTube e pedir: (1) Download, (2) Transcrição, (3) Corte inteligente, (4) Envio no WhatsApp/Telegram, (5) Fact-check de claims. Inclui ffmpeg VAAPI, yt-dlp, youtube-transcript-api, Shlink para tracking de cliques.
```

#### Body

Escreva instruções concisas. Use forma imperativa.

### Passo 5: Empacotando

```bash
scripts/package_skill.py <path/to/skill-folder>
```

O script valida:
- Formato frontmatter YAML
- Convenções de nomenclatura
- Estrutura de diretórios
- Qualidade da descrição

Se validação passar, cria `.skill` file (zip com extensão .skill).

### Passo 6: Iteração

Após uso real, o usuário pode pedir melhorias. workflow:

1. Usar a skill em tarefas reais
2. Notar ineficiências
3. Identificar atualizações necessárias
4. Implementar mudanças

---

## Template Base para Novas Skills

```markdown
---
name: [skill-name]
description: [Descrição clara: O que faz + Quando usar + Contextos específicos]
---

# [Nome da Skill]

## Quick Start

[Comando ou exemplo mais comum]

## Usage

[Como usar em diferentes cenários]

## Resources

- Scripts: `scripts/[main-script].sh`
- References: `references/[detalhes].md`
- Assets: `assets/[templates]/`

---

## VERIFICAÇÕES OBRIGATÓRIAS

### Dependências
```bash
# Verificar se tool existe
which [tool] || echo "[tool] não instalado"

# Verificar versão mínima
[tool] --version | grep -q "[versão]" || echo "[tool] precisa atualização"
```

### Paths
```bash
# Verificar se arquivos existem
[[ -f "$SCRIPT_PATH" ]] || { echo "Script não encontrado: $SCRIPT_PATH"; exit 1; }
```

### GPU (se aplicável)
```bash
# Verificar GPU disponível
ls /dev/dri/renderD* || echo "Nenhuma GPU encontrada"

# Testar VAAPI
vainfo --display drm 2>/dev/null | grep -q "VAEntrypoint" || echo "VAAPI pode não funcionar"
```

### Rate Limits
```bash
# Teste de conectividade antes de uso intensivo
curl -s -o /dev/null -w "%{http_code}" [API_URL] | grep -q "200" || echo "API pode estar com problemas"
```

### Memória
```bash
# Checar RAM disponível
free -m | awk '/^Mem:/{print $7}' | grep -q "^[0-9]\+$" && [ $(free -m | awk '/^Mem:/{print $7}') -gt 1000 ] || echo "RAM pode estar baixa"
```

### Output
```bash
# Validar output
[[ -s "$OUTPUT_FILE" ]] || { echo "Output vazio: $OUTPUT_FILE"; exit 1; }
```

### Permissões
```bash
# Verificar se pode rodar como root
[[ $EUID -eq 0 ]] || sudo -n true 2>/dev/null || echo "Pode precisar de sudo"
```

---

## Prompt para DevSan

Use este prompt para implementar a skill:

```markdown
## Contexto
Criar skill `[skill-name]` para DevSan AGI.

## Requisitos
- **Linguagem:** Bun/TypeScript principal, Rust para performance crítica
- **CLI-first:** Zero tela, execução em background
- **GPU:** Suportar Vega 8 + RX 550 com fallback CPU
- **Output:** WhatsApp/Telegram com arquivos
- **Integrações:** Mem0, Tavily/Exa, yt-dlp, ffmpeg VAAPI

## Estrutura
```
[skill-name]/
├── SKILL.md
├── scripts/
│   └── [main-script].sh
└── references/
    └── [detalhes].md
```

## Verificações obrigatórias
1. Dependências instaladas (which + versão)
2. Paths de arquivos existem
3. GPU disponível (vainfo/rocm-smi)
4. Rate limits (teste connectivity)
5. RAM disponível (>1GB livre)
6. Output não vazio
7. Permissões (root/sudo)

## Output esperado
- Arquivo `.apk` ou `.mp4` ou `.md` conforme skill
- Mensagem no WhatsApp/Telegram
- Logs em arquivo

## Validação
Testar com caso real antes de considerar pronto.
```

---

## Recursos de Referência

- **Workflows multi-passo:** `references/workflows.md`
- **Padrões de output:** `references/output-patterns.md`

Estes arquivos contêm práticas estabelecidas para design efetivo de skills.
