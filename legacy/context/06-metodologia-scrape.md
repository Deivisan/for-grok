# 06 - METODOLOGIA SCRAPE

## O que é

Framework opensource criado por Deivison para capturar conversas do Grok Share.

**Repo:** https://github.com/Deivisan/Metodologia-Scrape  
**License:** MIT  
**Stack:** Bun, TypeScript, Puppeteer Stealth  
**Status:** Production ✅

## Propósito

**Preservar contexto.** Toda conversa com IA contém informação valiosa:
- Decisões tomadas
- Código gerado
- Ideias exploradas
- Soluções encontradas

## Como funciona

### Metodologia 1: Puppeteer Stealth (Recomendada)
```bash
# Bypass Cloudflare, ~20s por conversa
bun run packages/mcp-grok-scraper/index-full.ts \
  --url="https://grok.com/share/ABC123"
```

**Outputs:**
- `captures/grok_UUID.json` (estruturado)
- `captures/grok_UUID.md` (markdown)
- `captures/grok_UUID.html` (renderizado)
- `captures/grok_UUID.png` (screenshot)

### Metodologia 2: HTTP Light
```bash
# Rápido (~3s) mas não bypassa proteções
bun run packages/mcp-grok-scraper/index.ts \
  --url="https://grok.com/share/ABC123"
```

### MCP Server
Integrado ao OpenCode/OpenClaw:
```json
{
  "grok_scrape": {
    "command": ["bun", "run", "index-full.ts"]
  }
}
```

## Integração com DevSan AGI

### Workflow Completo
```
1. Deivison conversa com Grok
2. Gera Grok Share link
3. Sistema captura automaticamente:
   
   const { uuid } = await grokScrape({ url: shareLink });
   const context = await grokContext({ uuid });

4. Extrai insights:
   - Decisões
   - Action items
   - Código gerado

5. Salva em memória:
   await mem0Add({
     text: insights.summary,
     metadata: { type: 'grok-conversation' }
   });

6. Cria tasks:
   for (const task of insights.actionItems) {
     await todoAdd(task);
   }

7. Implementa no clawdbot
```

## Capturar esta conversa

Quando terminar de conversar com Grok:

1. **Gere Grok Share link**
   - Clique em "Share" no Grok
   - Copie o link

2. **Capture com Metodologia-Scrape**
   ```bash
   cd ~/Projetos/Metodologia-Scrape/packages/mcp-grok-scraper
   bun run index-full.ts --url="https://grok.com/share/SEU_LINK"
   ```

3. **Salve em for-grok/conversations/**
   ```bash
   cp captures/grok_*.md ~/Projetos/for-grok/conversations/
   ```

4. **Traga para DevSan implementar**
   - Abra OpenCode
   - Diga: "Implemente o que decidimos na conversa Grok"
   - Forneça o arquivo capturado

## Estrutura do Output

```json
{
  "uuid": "abc123",
  "url": "https://grok.com/share/...",
  "timestamp": "2026-01-31T15:00:00Z",
  "messageCount": 42,
  "messages": [
    {
      "role": "user",
      "content": "...",
      "timestamp": "..."
    },
    {
      "role": "assistant",
      "content": "...",
      "timestamp": "..."
    }
  ]
}
```

## Desenvolvimento

**Origin:** Android (Termux) + Arch Linux ARM  
**Portado:** Linux desktop, Windows  
**Runtime:** Bun 1.3.5

### Por que Android primeiro?
- Mobile fingerprint menos suspeito
- 24/7 disponível
- Mesmo código funciona em desktop

## Expansão futura

Além do Grok:
- ChatGPT exports
- Claude conversations
- Gemini chats
- Qualquer share link de IA

## Meta recursiva

> Esta conversa com Grok será capturada pelo próprio Metodologia-Scrape, que foi criado por Deivison, que está conversando com Grok sobre o sistema que inclui o Metodologia-Scrape.

**Inception level: 3** 🌀

---

## Resumo do Workflow

```
Conversar com Grok → Gerar Share link → 
→ Metodologia-Scrape captura → 
→ Extrai decisões → 
→ DevSan implementa → 
→ Próxima conversa
```

**Pronto para capturar? 🕷️**

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/06-metodologia-scrape.md
