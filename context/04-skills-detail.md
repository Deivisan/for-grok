# 04 - SKILLS DETAIL

## Skills Locais (20 detalhadas)

### 1. edge-tts (Voz ElevenLabs)
**Propósito:** Text-to-speech com voz Thalita
**Uso:** 
- Enviar mensagens de voz no Telegram
- Narrar histórias, resumos
- "Storytime" moments
**Comando:** `bun run skills/edge-tts/edge_tts_bot.ts "Texto"`
**Voz:** Thalita (pt-BR)
**Status:** ✅ Funcional

### 2. walkie-talkie-vigo (Comunicação)
**Propósito:** Comunicação voz bidirecional
**Uso:**
- Enviar/receber mensagens de voz
- Integração Telegram
**Status:** ✅ Funcional

### 3. grok-scraper (Captura Grok)
**Propósito:** Capturar conversas do Grok Share
**Stack:** Puppeteer Stealth, Bun
**Metodologias:**
- Full: Puppeteer Stealth (~20s, Cloudflare bypass)
- Light: HTTP (~3s, sem bypass)
**Outputs:** JSON, Markdown, HTML, Screenshot
**Status:** ✅ Production
**Repo:** Metodologia-Scrape (opensource)

### 4. playwright (Browser)
**Propósito:** Automação browser
**Browser:** Microsoft Edge
**Uso:**
- Screenshot
- Click, fill forms
- Navigation
**MCP:** Sim, integrado ao OpenCode
**Status:** ✅ Funcional

### 5. git-multi (Orquestração)
**Propósito:** Gerenciar múltiplos repos
**Comandos:**
- `status` - Status de todos repos
- `dirty` - Repos com mudanças
- `pull` - Pull todos (cuidado!)
**Status:** ✅ Funcional

### 6. todo (Tarefas)
**Propósito:** Gerenciamento de tasks
**Features:**
- Criar, listar, completar
- Projetos e tags
- Prioridades
**Status:** ✅ Funcional

### 7. mem0-query (Memória)
**Propósito:** Buscar na memória persistente
**Uso:**
- "O que eu fiz semana passada?"
- Recuperar contexto antigo
- Busca semântica
**Integração:** Mem0 MCP
**Status:** ✅ Funcional

### 8. deep-research (Pesquisa)
**Propósito:** Pesquisa profunda multi-fonte
**Agrega:** Tavily + Exa + Context7
**Output:** Relatório estruturado
**Status:** ✅ Funcional

### 9. tavily (Busca Web)
**Propósito:** Busca web inteligente
**API:** Configurada (tvly-dev-...)
**Uso:** Resultados otimizados para LLMs
**Status:** ✅ Funcional

### 10. tavily-web-search
**Propósito:** Busca web via script
**Diferença:** Interface CLI para Tavily
**Status:** ✅ Funcional

### 11. exa (Busca Semântica)
**Propósito:** Busca por significado
**Uso:** Encontrar recursos similares
**API:** Configurada
**Status:** ✅ Funcional

### 12. context7 (Documentação)
**Propósito:** Query docs de bibliotecas
**Uso:** "Como usar React useEffect?"
**MCP:** Remote (funciona sem key)
**Status:** ✅ Funcional

### 13. github (Git Operations)
**Propósito:** Operações GitHub
**Token:** Configurado
**Uso:** Issues, PRs, repos
**Status:** ✅ Funcional

### 14. docker-essentials
**Propósito:** Gerenciar containers
**Uso:**
- Listar containers
- Ver logs
- Inspecionar
**Nota:** Sem execução (segurança)
**Status:** ✅ Funcional

### 15. prompt-engineering-expert
**Propósito:** Otimizar prompts
**Uso:**
- Melhorar prompts
- Criar templates
**Status:** ✅ Funcional

### 16. model-usage (Tracking)
**Propósito:** Tracking de uso de modelos
**Features:**
- Quota/custo
- Performance
- Alertas de limite
**Status:** ✅ Funcional

### 17. google-agi / google-agi.ts
**Propósito:** Google AI integration
**Serviços:** Gemini, Vertex AI
**Status:** ✅ Funcional

### 18. coding-agent
**Propósito:** Assistente de código
**Uso:**
- Gerar código
- Revisar
- Refatorar
**Integração:** OpenCode
**Status:** ✅ Funcional

### 19. tmux
**Propósito:** Terminal multiplexing
**Uso:**
- Sessões persistentes
- Split windows
**Status:** ✅ Funcional

### 20. (outras)
Outras skills menores completam o arsenal.

## Skills do Sistema (54 via OpenClaw)

Integrações com serviços externos:
- **1password** - Password manager
- **apple-notes** - Notas Apple
- **bear-notes** - App Bear
- **discord** - Chat
- **imsg** - iMessage
- **local-places** - Lugares locais
- **canvas** - Rascunhos
- **mcporter** - MCP client
- **nano-banana-pro** - Utils
- **nano-pdf** - PDF processing
- E mais...

## Integrações entre Skills

### Fluxo Research → Voz
```
deep-research → edge-tts → Telegram áudio
```

### Fluxo Git → Notificação
```
git-multi status → walkie-talkie → Notificação
```

### Fluxo Browser → Research
```
playwright screenshot → tavily search → deep-research
```

## O que falta criar

❌ **telegram-sender** - Apenas recebe, não envia proativamente  
❌ **webhook-bridge** - Receber webhooks externos  
❌ **duckdb-analytics** - SQL em CSV/JSON  
❌ **semgrep-sherlock** - Análise de segurança  

## Próximo passo

Leia 05-missing-pieces.md para ver o que precisa ser explorado.

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/04-skills-detail.md
