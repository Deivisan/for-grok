# 02 - CAPABILITIES

## O que o sistema faz (Overview)

## Agentes (3)

### 1. OpenClaw (Orquestração Principal)
- **Função:** AGI pessoal, orquestração total
- **Gateway:** Porta 18789 (http://127.0.0.1:18789/)
- **Canais:** WhatsApp, Telegram
- **Systemd:** openclaw-gateway.service
- **Uso:** Planejamento, decisões, orquestração

### 2. OpenCode (Programação)
- **Função:** Coding, debugging, refatoração
- **Provider:** Claude Sonnet via GitHub Copilot
- **MCPs:** 10 servidores configurados
- **Models disponíveis:**
  - Claude Sonnet (principal)
  - Kimi (long context)
  - Qwen (multilíngue)
  - MiniMax (chinês)
  - GLM (open)
  - Gemini (Google)
  - GitHub Copilot

### 3. Clawd (Multi-Agent Local)
- **Função:** Execução local de skills
- **Skills:** 20 locais + 54 do sistema
- **Wrapper:** Bun local (--local)
- **Memória:** Mem0 + arquivos

## Skills Locais (20)

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

## MCPs (Model Context Protocol) - 10 servidores

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

## Sistema (54 skills via OpenClaw)

Integrações com:
- 1password, apple-notes, bear-notes
- discord, imsg (iMessage)
- local-places, canvas
- mcporter (MCP client)
- nano-banana-pro, nano-pdf
- E mais...

## Projetos Principais

- **DevSan/** - AGI central + configs
- **Prompts/** - Banco prompts + skills
- **Metodologia-Scrape/** - Framework captura Grok
- **clawd/** - Workspace ClawdBot
- **Fabrica-de-conteudo/** - Automação conteúdo
- **FinanDEV/** - Sistema financeiro
- **FinanVox/** - Finanças por voz

## Capacidades Core

✅ Pesquisa web (Tavily, Exa, Context7)  
✅ Automação browser (Playwright, Chrome DevTools)  
✅ Voz/TTS (Edge TTS)  
✅ Multi-repo Git (git-multi)  
✅ Memória persistente (Mem0)  
✅ Docker/containers  
✅ Captura de conversas (grok-scraper)  
✅ Notificações (walkie-talkie)  
✅ Tracking de uso (model-usage)  

## Próximo passo

Leia 03-hardware.md para entender a infraestrutura.

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-capabilities.md
