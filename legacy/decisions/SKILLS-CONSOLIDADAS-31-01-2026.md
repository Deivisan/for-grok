# 🎯 SKILLS CONSOLIDADAS - Conversa Grok 31/01/2026

**Status:** Todas as skills foram discutidas e aprovadas para implementação  
**Total:** 6 skills principais + 2 suporte  
**Método:** CLI-first, Bun/TypeScript, background, zero tela  

---

## 📋 Índice de Skills

1. **youtube-inteligente** - Download, transcrição, corte e envio inteligente
2. **apk-smart-fetch** - Download de APKs (F-Droid → GitHub → APKPure)
3. **news-supremo** - Agregador de notícias IA/tech com fact-check
4. **gpu-orchestrator** - Gerenciamento inteligente Vega 8 + RX 550
5. **model-router** - Orquestração de subagentes com alocação de GPU
6. **telegram-sender** - Notificações proativas com rastreamento de cliques
7. **integrity-watch** - Verificação de integridade (hashbreach)
8. **auto-update-cli** - Atualização automática de ferramentas CLI

---

## 1. 🎬 youtube-inteligente

**Propósito:** Link YouTube → transcrição → análise → corte → envio WhatsApp/Telegram

### Funcionalidades
- Input: Link + contexto natural (ex: "debate político, cheque fatos")
- Transcrição: youtube-transcript-api (Python, free) ou Supadata.ai (fallback)
- Download: yt-dlp
- Corte inteligente: ffmpeg com VAAPI (GPU Vega 8)
- Análise LLM: Sumário, pontos chave, fact-check via Tavily/Exa
- Envio: Telegram/WhatsApp com descrições inteligentes por parte
- Limites: WhatsApp 100MB (mídia) ou 2GB (documento), Telegram 2GB

### Sub-skills incluídas
- Fact-check automático de claims
- Extração de clips chave por emoção/repetição
- Geração de descrições com minutagem
- Legendas automáticas PT-BR
- Narrativa na voz do usuário (Qwen TTS - futuro)

### Comando ffmpeg VAAPI
```bash
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 \
  -i input.mp4 -vf "hwdownload,format=nv12" \
  -c:v h264_vaapi -b:v 5M output.mp4
```

### Estrutura de saída
```
Parte 1: 0:00-7:15 - Introdução ao debate
Parte 2: 7:15-14:30 - Argumentos principais
Parte 3: 14:30-20:00 - Conclusões
```

---

## 2. 📦 apk-smart-fetch

**Propósito:** Busca inteligente de APKs em múltiplas fontes

### Funcionalidades
- Input: Nome do app ou package name
- Busca inteligente em ordem de prioridade:
  1. F-Droid (se FOSS) - via apkeep
  2. GitHub releases (se repo conhecido)
  3. APKPure (fallback geral)
- Compara versões entre fontes
- Download automático
- Verificação de hash SHA256
- Envio como documento WhatsApp/Telegram

### Ferramentas
- **apkeep** (Rust CLI) - Principal
  - `apkeep -d f-droid -a org.fdroid.fdroid`
  - `apkeep -a com.whatsapp`
- **gh CLI** - GitHub releases
  - `gh release download latest -R user/repo --pattern '*.apk'`
- **Playwright** - Scrape fallback

### Lógica de decisão
```typescript
if (isFOSS(appName)) {
  return tryFDroid(packageName);
} else if (hasGitHubRepo(appName)) {
  return tryGitHubReleases(repoName);
} else {
  return tryAPKPure(packageName);
}
```

---

## 3. 📰 news-supremo

**Propósito:** Agregador de notícias IA/tech, sem viés, com fact-check

### Funcionalidades
- Agregação de notícias personalizadas
- Foco: IA, tecnologia, economia (sem futebol, sem sensacionalismo)
- Fontes: RSS (HuggingFace, arXiv, TechCrunch), X, Reddit
- Filtro de viés e fact-check automático
- Resumos em markdown
- Podcast na voz do usuário (quando Qwen TTS funcionar)
- Atualização diária automática (cron/systemd)
- Contexto persistente dos gostos do usuário

### Rastreamento de cliques (Shlink)
- Links encurtados self-hosted
- Tracking de cliques, geolocalização, referrers
- API para verificar acessos
- Mem0 salva: "gosta de cliques em IA updates → prioriza amanhã"

### Output flexível
- Markdown limpo: sumário + links + quotes + fact-check
- Resumo conversacional no chat
- Áudio na voz (supra-sumo)

---

## 4. 🎮 gpu-orchestrator

**Propósito:** Gerenciamento inteligente das duas GPUs AMD

### Hardware
- **GPU 0:** Vega 8 (integrada) - Display principal, tarefas leves
- **GPU 1:** RX 550 (dedicada, 4GB) - Encoding, tarefas isoladas

### Funcionalidades
- Monitora sempre: `rocm-smi`, `clinfo`, `vainfo`
- Decide por task:
  - Vídeo cut → Vega 8 (leve, integrada)
  - Encoding pesado → RX 550 (4GB, isolada)
  - TTS / ONNX → Vulkan/OpenCL em paralelo
- Múltiplos agentes: agent1 usa GPU 0, agent2 GPU 1
- Fallback: se uma GPU falhar, redireciona pra CPU ou outra

### Comando por GPU
```bash
# Vega 8 (renderD128)
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 ...

# RX 550 (renderD129)
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD129 ...
```

### Tecnologias
- VAAPI: ffmpeg decode/encode
- Vulkan: RADV (Mesa) para compute
- OpenCL: mesa-opencl-icd (legacy)
- ROCm: Experimental (override HSA_OVERRIDE_GFX_VERSION=9.0.6)

---

## 5. 🧠 model-router

**Propósito:** Orquestração de múltiplos subagentes (octopus pattern)

### Funcionalidades
- Agente principal chama subagentes em segundo plano
- Sabe quais subagentes tem (5-6 cadastrados) e especialidade de cada um
- Divide tarefas em subtarefas
- Manda pro subagente certo com GPU específica
- Continua conversando com usuário enquanto processa
- Quando sub termina, devolve pro principal
- Tudo via WhatsApp, sem janela, sem bloqueio

### Especialidades típicas
- Claude: código, reasoning
- Kimi: long context
- Grok: web search + imagens
- Qwen: multilíngue, TTS
- Local: tarefas leves

### Fluxo
```
Usuário pede algo complexo
  ↓
Principal analisa e divide
  ↓
Manda p/ SubA (GPU 0) + SubB (GPU 1)
  ↓
Continua conversando com usuário
  ↓
SubA termina → devolve resultado
SubB termina → devolve resultado
  ↓
Principal consolida e responde
```

---

## 6. 📡 telegram-sender

**Propósito:** Notificações proativas com rastreamento

### Funcionalidades
- Resumo matinal automático (8h)
- Links curtos com rastreamento (Shlink)
- Feedback de cliques: "Você clicou no link de Grok xAI às 8:15"
- Mem0 ajusta gostos baseado em cliques
- Templates: alert, deploy-notify, daily-summary

### Integrações
- News-supremo: feed diário
- YouTube-inteligente: notificação quando processamento termina
- Apk-smart-fetch: confirmação de download

### Formato de mensagem
```markdown
🌅 **Resumo Matinal - IA/Tech**

1. [Título da notícia](link-curto) - 3 min de leitura
2. [Título](link) - Fact-check: ✅ Verificado
3. [Título](link) - Disputado: ⚠️ Contradição encontrada

💡 Clique e veja o que mais te interessa.
```

---

## 7. 🔐 integrity-watch

**Propósito:** Verificação de integridade dos binários/configs

### Funcionalidades
- Monitora hashes de arquivos críticos
- Compara SHA256 esperado vs atual
- Alerta via Telegram se mismatch
- Útil para: yt-dlp, apkeep, ffmpeg, configs

### Configuração
```bash
# /etc/hashbreach.conf
/path/to/ytlp SHA256:abc123...
/path/to/apkeep SHA256:def456...
```

### Background
- Systemd service, sem tela
- Checa a cada 1h (cron)
- Logs em arquivo

---

## 8. 🔄 auto-update-cli

**Propósito:** Atualização automática de ferramentas CLI

### Funcionalidades
- Checa apkeep, gh, yt-dlp por updates
- Compara versão local vs latest release
- Atualiza se necessário
- Notifica no Telegram

### Ferramentas monitoradas
- apkeep (Rust/Cargo)
- gh CLI (GitHub)
- yt-dlp (Python/pip)
- ffmpeg (pacman)

---

## 🛠️ Stack Tecnológico

### Linguagens
- **Bun/TypeScript:** Skills principais, orquestração
- **Rust:** Hashbreach, integridade, GPU tools
- **Python:** APIs externas (youtube-transcript, whisper)
- **Go:** Serviços background (watchers)

### Ferramentas
- ffmpeg (VAAPI)
- yt-dlp
- apkeep
- gh CLI
- Shlink (self-hosted)
- Mem0
- Tavily/Exa

### Hardware
- Vega 8: Tarefas leves, display
- RX 550: Encoding, tarefas pesadas
- 14GB RAM: zram + earlyoom

---

## 📁 Repositórios Afetados

1. **clawd/skills/** - Implementação das skills
2. **proximos-passos/for-grok/** - Documentação e capturas
3. **Metodologia-Scrape/** - Auto-skill de captura

---

## ✅ Checklist de Implementação

### Fase 1: Base (Semana 1)
- [ ] youtube-inteligente - Estrutura + yt-dlp
- [ ] telegram-sender - Bot API + templates
- [ ] gpu-orchestrator - Monitoramento básico

### Fase 2: Integração (Semana 2)
- [ ] apk-smart-fetch - apkeep + fallback
- [ ] news-supremo - RSS + fact-check
- [ ] model-router - Subagentes básicos

### Fase 3: Refinamento (Semana 3)
- [ ] integrity-watch - Hash monitoring
- [ ] auto-update-cli - Update checking
- [ ] Testes em hardware real

### Fase 4: Produção (Semana 4)
- [ ] Deploy no clawdbot
- [ ] Cron jobs ativos
- [ ] Monitoramento contínuo

---

## 🦞 Notas Finais

> "Deixa o CloudBot ser teu braço, não teu cérebro. Senão vira mais um dos 40 repos."

**Críticas da conversa:**
- Construir demais pra não usar é adiamento
- Sistema 95% pronto, falta deixar rodar sozinho
- Apatia vem quando não usa o que já fez

**Próximo passo:** Implementar, testar, colocar em produção real.

---

**Data:** 31/01/2026  
**Fonte:** Conversa Grok (108 mensagens)  
**Captura:** Metodologia-Scrape v3.0
