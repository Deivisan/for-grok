# 02 - DEVSAN CORE (Sistema AGI Pessoal)

## 🦞 DevSan AGI - Visão Completa

DevSan AGI é o sistema de Inteligência Artificial Geral pessoal de Deivison. Não é um assistente genérico - é um ecossistema integrado.

---

## 🧠 Arquitetura de Agentes (3)

### 1. OpenClaw (Orquestração Principal)
- **Função:** AGI pessoal, orquestração total
- **Gateway:** Porta 18789 (http://127.0.0.1:18789/)
- **Canais:** WhatsApp, Telegram
- **Systemd:** openclaw-gateway.service
- **Uso:** Planejamento, decisões, orquestração
- **Skills:** 58 disponíveis (16 ready + 42 bundled)

### 2. OpenCode (Programação)
- **Função:** Coding, debugging, refatoração
- **Models disponíveis:**
  - Claude Sonnet (principal)
  - Kimi (long context)
  - Qwen (multilíngue)
  - MiniMax (chinês)
  - GLM (open)
  - Gemini (Google)
  - GitHub Copilot
- **MCPs:** 10 servidores configurados

### 3. Clawd (Multi-Agent Local)
- **Função:** Execução local de skills
- **Skills:** 20 locais + 54 do sistema
- **Wrapper:** Bun local (--local)
- **Memória:** Mem0 + arquivos

---

## 🛠️ Skills Locais (20)

### Comunicação
- **edge-tts** - ElevenLabs TTS (voz Thalita)
- **walkie-talkie-vigo** - Comunicação voz bidirecional

### Research
- **deep-research** - Pesquisa profunda multi-fonte
- **tavily** / **tavily-web-search** - Busca web inteligente
- **exa** - Busca semântica AI
- **context7** - Documentação de bibliotecas

### Desenvolvimento
- **playwright** - Automação browser (Edge)
- **github** - Operações Git
- **git-multi** - Orquestração multi-repo
- **docker-essentials** - Containers
- **coding-agent** - Assistente de código

### Produtividade
- **todo** - Gerenciamento de tarefas
- **mem0-query** - Query memória persistente

### Automação
- **grok-scraper** - Captura conversas Grok
- **model-usage** - Tracking de uso de modelos

### AI & Prompts
- **prompt-engineering-expert** - Otimização de prompts
- **google-agi** / **google-agi.ts** - Google AI

### Terminal
- **tmux** - Multiplexing de terminal

---

## 🔌 MCPs (10 servidores)

1. **mem0** - Memória persistente (graph + semântica)
2. **tavily** - Busca web inteligente
3. **context7** - Documentação de libs
4. **exa** - Busca semântica AI
5. **github** - Git operations
6. **yt-dlp** - Download vídeo/áudio
7. **playwright** - Browser automation
8. **chrome-devtools** - Debug e performance
9. **docker** - Containers
10. **grok-scraper** - Scrape conversas Grok

---

## 📁 Projetos Principais

### Sistemas Core
- **DevSan/** - AGI central + configs
- **Prompts/** - Banco prompts + skills + APIs + MCPs
- **devsan-clawd/** - ClawdBot workspace (~/clawd symlink)
- **AndroidVisionClaw/** - Android fork (v0.1.2-alpha)

### Automação
- **Metodologia-Scrape/** - Framework captura Grok (opensource)
- **clawd/** - Workspace ClawdBot
- **Fabrica-de-conteudo/** - Automação conteúdo

### Pessoal
- **FinanDEV/** - Sistema financeiro pessoal
- **FinanVox/** - Finanças por voz
- **PsyConnect/** - Projeto psicológico

---

## 🏗️ Infraestrutura

### Hardware
- **CPU:** AMD Ryzen 7 5700G (8 cores, 16 threads @ 4.6GHz)
- **RAM:** 14GB DDR4 (7.3GB disponível)
- **GPU 0:** Radeon RX 550/550X (Dedicada - 2-4GB)
- **GPU 1:** Radeon Vega (Integrada - Ryzen 5700G)
- **Storage:** SSD NVMe (170GB livre)
- **Rede:** WiFi 6 (UFRB)

### Sistema
- **OS:** Arch Linux (Kernel Zen 6.18.7)
- **Desktop:** COSMIC DE (System76)
- **Shell:** Zsh 5.9 + Starship
- **Runtime:** Bun 1.3.5 (JavaScript/TypeScript)
- **Python:** 3.14.2 (IA/ML)
- **Rust:** 1.93.0 (performance)
- **Go:** 1.25.6 (APIs)

---

## 🚀 Capacidades Core

✅ Pesquisa web (Tavily, Exa, Context7)  
✅ Automação browser (Playwright, Chrome DevTools)  
✅ Voz/TTS (Edge TTS)  
✅ Multi-repo Git (git-multi)  
✅ Memória persistente (Mem0)  
✅ Docker/containers  
✅ Captura de conversas (grok-scraper)  
✅ Notificações (walkie-talkie)  
✅ Tracking de uso (model-usage)  

---

## 📊 FinanDEV (Contexto Pessoal)

**Sistema de Backup Mental Completo**

> *"Backup mental agêntico | 100% interável por IA | Nunca refazer do zero"*

### Finanças Atuais
- **Renda líquida:** R$ 1.866,53
- **Sobra mensal:** R$ 1.086,54
- **Orçamento quinzenal:** R$ 250,00
- **Gasto real:** R$ 174,40
- **Economia:** R$ 75,60

### Mini-Sistemas Ativos (7)
1. **Saúde Mental** - Tracking humor, gatilhos, sono
2. **Sleep Tracking** - Inferência sono via timestamps
3. **Preconceitos** - Registro e análise
4. **Fala com Todos** - Comunicação
5. **Impulsos Registrados** - Desde 08/12
6. **Camerologia** - Testes GCam Poco X5
7. **Face-Capture** - Pipeline vectorização rosto

---

## 🔄 Workflows Integrados

### Research → Voz
```
deep-research → edge-tts → Telegram áudio
```

### Git → Notificação
```
git-multi status → walkie-talkie → Notificação
```

### Browser → Research
```
playwright screenshot → tavily search → deep-research
```

### Grok → Implementação
```
Conversa Grok → Metodologia-Scrape → clawdbot implementa
```

---

## 📖 Próximo Passo

Leia **03-deivitech-core.md** para entender a face empresarial.

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-devsan-core.md
