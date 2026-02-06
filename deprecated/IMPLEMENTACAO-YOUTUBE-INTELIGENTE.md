# Implementação: youtube-inteligente Skill

**Data:** 31/01/2026  
**Status:** ✅ Implementada e pushada para GitHub  
**Repositório:** https://github.com/Deivisan/devsan-clawd

---

## 📋 Resumo

Primeira skill do ciclo de implementação baseada na conversa Grok (108 mensagens, 31/01/2026). A skill `youtube-inteligente` foi criada manualmente seguindo o padrão Anthropics após encontrar bugs no skill-creator.

---

## 🎯 O que foi implementado

### Estrutura da Skill
```
youtube-inteligente/
├── SKILL.md                    # 7.1 KB - Documentação principal
├── config.json                 # 1.3 KB - Configurações
├── scripts/
│   └── youtube-inteligente.sh  # 420 linhas - Script principal
├── references/
│   └── DETAILS.md              # 13 KB - Documentação técnica
└── logs/
    └── .gitkeep
```

### Funcionalidades

1. **Download Inteligente** (`yt-dlp`)
   - Qualidades: 480p, 720p, 1080p, best
   - Merge automático de vídeo+áudio
   - Fallback para Python libraries

2. **Transcrição** (`youtube-transcript-api`)
   - Suporte PT-BR (primário)
   - Fallback: EN, ES
   - Fallback adicional: Supadata.ai

3. **Análise Automática**
   - Detecção de segmentos (intro,论点, conclusão)
   - Extração de highlights por palavras-chave
   - Sugestões de cortes

4. **Corte Inteligente** (`ffmpeg` VAAPI)
   - GPU: Vega 8 (`/dev/dri/renderD128`)
   - Fallback: CPU
   - Partes por tempo ou por análise
   - Limite: 7min (420s) por parte

5. **Verificações Obrigatórias** (implementadas)
   - Dependências (`yt-dlp`, `ffmpeg`, `jq`, etc.)
   - GPU disponível (`vainfo`)
   - Paths de arquivos
   - Conectividade de rede
   - RAM disponível (>2GB)
   - Output não vazio
   - Permissões de execução

6. **Templates de Output**
   - WhatsApp (100MB mídia, 2GB documento)
   - Telegram (2GB)
   - Tracking via Shlink (configurado mas não implementado)

---

## 🔧 Scripts e Comandos

### Uso Basic
```bash
# Download + transcrição + corte
./scripts/youtube-inteligente.sh "URL" --full

# Apenas transcrição
./scripts/youtube-inteligente.sh "URL" --transcribe-only

# Corte inteligente (highlights)
./scripts/youtube-inteligente.sh "URL" --highlights

# Enviar para Telegram
./scripts/youtube-inteligente.sh "URL" --telegram
```

### Comandos FFmpeg VAAPI
```bash
# Decode VAAPI
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 \
  -i input.mp4 -vf "hwdownload,format=nv12" \
  -c:v h264_vaapi -b:v 5M output.mp4

# Corte
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 \
  -i input.mp4 -ss 00:07:15 -to 00:14:30 \
  -vf "hwdownload,format=nv12" \
  -c:v h264_vaapi -c:a copy output.mp4
```

---

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| Linhas de código (script) | 420 |
| Documentação (DETAILS.md) | ~500 linhas |
| SKILL.md | 260 linhas |
| Dependências verificadas | 7 tools |
| Funções implementadas | 12 |
| Verificações obrigatórias | 7 categorias |

---

## ✅ Checklist de Implementação

### Fase 1: Estrutura
- [x] Criar diretórios (scripts, references, assets, logs)
- [x] Criar SKILL.md com frontmatter YAML
- [x] Criar config.json
- [x] Criar .gitkeep files

### Fase 2: Script Principal
- [x] Implementar logging estruturado
- [x] Implementar verificações obrigatórias
- [x] Implementar download (yt-dlp)
- [x] Implementar transcrição (Python)
- [x] Implementar análise (Python)
- [x] Implementar corte (ffmpeg VAAPI)
- [x] Implementar parsing de argumentos
- [x] Implementar modos (full, transcribe-only, etc.)

### Fase 3: Documentação
- [x] Criar references/DETAILS.md
- [x] Documentar comandos yt-dlp
- [x] Documentar transcrição Python
- [x] Documentar comandos ffmpeg VAAPI
- [x] Documentar troubleshooting
- [x] Documentar variáveis de ambiente

### Fase 4: Integração
- [x] Adicionar ao git
- [x] Commitar com mensagem Conventional Commits
- [x] Push para GitHub
- [x] Documentar em IMPLEMENTACAO-YOUTUBE-INTELIGENTE.md

---

## 🐛 Problemas Encontrados

### 1. Bug no skill-creator.ts
**Problema:** Template literals do shell script (`${name}`, `${1:-}`) eram interpretados como TypeScript.

**Solução:** Corrigido escapando `$` com `\${}` no script generator.

### 2. Backticks aninhados
**Problema:** Code fences `\`\`\`` dentro de template literals quebravam sintaxe.

**Solução:** Convertidos para `\\\`\\\`\\\` (escapados).

### 3. Await em forEach
**Problema:** `(await import('fs'))` dentro de `forEach` não-async.

**Solução:** Substituído por `readdirSync` síncrono.

---

## 📦 Dependências Verificadas

### Sistema (pacman)
```bash
sudo pacman -S ffmpeg yt-dlp curl wget jq awk grep sed coreutils
```

### Python (pip)
```bash
pip install yt-dlp youtube-transcript-api
```

### GPU
- **Driver:** amdgpu kernel module
- **Dispositivo:** `/dev/dri/renderD128` (Vega 8)
- **API:** VAAPI (libva-mesa-driver)

---

## 🔗 Integrações

### APIs Configuradas
- [x] yt-dlp (download)
- [x] youtube-transcript-api (transcrição)
- [x] ffmpeg VAAPI (corte)
- [ ] Tavily (fact-check) - configuração presente
- [ ] Exa (busca) - configuração presente
- [ ] Shlink (tracking) - configuração presente mas não implementado

### Plataformas de Output
- [x] Telegram (2GB) - template pronto
- [x] WhatsApp (100MB/2GB) - template pronto
- [ ] Discord - não planejado
- [ ] Email - não planejado

---

## 📈 Próximos Passos

### Imediatos
1. **Testar com vídeo real**
   ```bash
   ./scripts/youtube-inteligente.sh "https://youtube.com/watch?v=XXX" --full
   ```

2. **Implementar fact-check (Tavily/Exa)**
   - Extrair claims da transcrição
   - Buscar cada claim via API
   - Gerar relatório de verificação

3. **Implementar integração Shlink**
   - Criar links curtos para cada parte
   - Tracking de cliques
   - Feedback para Mem0

### Médio Prazo
1. **Criar próxima skill** (apk-smart-fetch ou news-supremo)
2. **Corrigir skill-creator.ts** completamente
3. **Testes em hardware real** (Vega 8 + RX 550)
4. **Benchmark de performance** (encoding vs CPU)

---

## 📚 Lições Aprendidas

1. **Template literals são traiçoeiros** - caracteres especiais do shell precisam ser escapados
2. **Anthropics pattern funciona** - progressive disclosure + bundled resources
3. **Verificações obrigatórias salvam tempo** - detectam problemas antes de executar
4. **Documentação técnica é essencial** - DETAILS.md como referência
5. **CLI-first é mais simples** - script único > múltiplos arquivos

---

## 🧪 Teste de Validação

```bash
# 1. Verificar dependências
check_dependencies

# 2. Verificar GPU
check_gpu

# 3. Testar download
./youtube-inteligente.sh "https://youtube.com/watch?v=dQw4w9WgXcQ" --download-only

# 4. Testar transcrição
./youtube-inteligente.sh "https://youtube.com/watch?v=dQw4w9WgXcQ" --transcribe-only

# 5. Teste completo
./youtube-inteligente.sh "https://youtube.com/watch?v=dQw4w9WgXcQ" --full --telegram
```

---

## 📎 Arquivos de Referência

- **SKILL.md:** https://github.com/Deivisan/devsan-clawd/blob/master/skills/youtube-inteligente/SKILL.md
- **Script:** https://github.com/Deivisan/devsan-clawd/blob/master/skills/youtube-inteligente/scripts/youtube-inteligente.sh
- **Detalhes:** https://github.com/Deivisan/devsan-clawd/blob/master/skills/youtube-inteligente/references/DETAILS.md
- **Commit:** https://github.com/Deivisan/devsan-clawd/commit/29c83c6

---

**Implementado por:** DevSan AGI  
**Baseado em:** Conversa Grok 31/01/2026 (108 mensagens)  
**Pattern:** Anthropics Skill Pattern
