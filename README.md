# 🖥️ for-grok - DeiviTech Formatação

**Contexto completo para modo voz do Grok: Negócio de Formatação de PCs**

[![Version](https://img.shields.io/badge/version-3.0-blue)](./)
[![Status](https://img.shields.io/badge/status-Ativo-success)](./)
[![Focus](https://img.shields.io/badge/focus-Formatação-orange)](./)

---

## 🎯 O que é este Repo

Este repositório fornece **contexto estruturado e profundo** para o Grok (modo voz ou texto) compreender completamente o negócio de formatação de computadores de Deivison Santana em Feira de Santana, BA.

**Foco principal:** Otimizar e escalar a DeiviTech Formatação usando automações DevSan AGI.

---

## 🏢 Sobre o Negócio

**DeiviTech Formatação**
- 📍 Feira de Santana, Bahia
- 👨‍💻 Deivison Santana - 10+ anos de experiência
- 💻 500+ PCs formatados
- 📞 WhatsApp: (75) 98123-1019
- 🌐 https://deivisan.github.io/DeiviTech-Formatacao/

**Serviços:**
- Formatação Windows 10/11 (R$ 25-100)
- Linux gratuito
- Upgrades SSD/RAM
- Análise IA gratuita
- Atendimento domiciliar

---

## 📁 Estrutura

```
for-grok/
├── system-prompt.md          ← COPIE E COLE NO GROK
├── README.md                 ← Este arquivo
├── context/                  ← Contextos do negócio
│   ├── 01-o-negocio.md            ← Modelo completo + preços
│   ├── 02-operacoes.md            ← Fluxo de atendimento
│   ├── 03-tecnico.md              ← Sistemas, hardware, processos
│   ├── 04-estrategia.md           ← Marketing e crescimento
│   ├── 05-integracao-devsan.md    ← Automações aplicáveis
│   └── 06-roadmap-negocio.md      ← Plano estratégico completo
├── conversations/            ← Capturas de conversas Grok
├── decisions/               ← Decisões de negócio
└── legacy/                  ← Versões anteriores (v1.0, v2.0)
```

---

## 🚀 Como Usar

### Passo 1: Copiar System Prompt
1. Abra `system-prompt.md`
2. Copie TODO o conteúdo entre os backticks (```)
3. Cole no chat do Grok (grok.com)

### Passo 2: Deixar o Grok Ler
O Grok vai seguir a hierarquia e ler os arquivos em `context/` na ordem correta.

### Passo 3: Conversar sobre o Negócio
Converse sobre:
- Como aumentar clientes
- Como otimizar atendimento
- Como automatizar processos
- Como escalar o negócio
- Como integrar DevSan AGI

---

## 📖 Hierarquia de Contexto

| Ordem | Arquivo | Conteúdo |
|-------|---------|----------|
| 1 | `01-o-negocio.md` | Modelo completo, preços, serviços, margens |
| 2 | `02-operacoes.md` | Fluxo de atendimento, operações diárias |
| 3 | `03-tecnico.md` | Windows, Linux, hardware, processos |
| 4 | `04-estrategia.md` | Marketing, crescimento, posicionamento |
| 5 | `05-integracao-devsan.md` | Como usar automações pessoais no negócio |
| 6 | `06-roadmap-negocio.md` | Plano de 24 meses para escalar |

---

## 🎤 Uso no Modo Voz

O system prompt foi otimizado para:
- **Leitura fluida** pelo Grok
- **Contexto profundo** do negócio real
- **Foco em resultados** (clientes, receita, escala)
- **Instruções práticas** aplicáveis imediatamente

---

## 🕷️ Capturar Conversas

Após conversar com Grok:

1. **Gere Grok Share link**
   - Clique em "Share" no Grok
   - Copie o link

2. **Capture com Metodologia-Scrape**
   ```bash
   cd ~/Projetos/Metodologia-Scrape/packages/mcp-grok-scraper
   bun run index-full.ts --url="https://grok.com/share/SEU_LINK"
   ```

3. **Salve neste repo**
   ```bash
   cp captures/grok_*.md ~/Projetos/for-grok/conversations/
   cd ~/Projetos/for-grok
   git add .
   git commit -m "🕷️ Adiciona conversa Grok - $(date +%Y-%m-%d)"
   git push
   ```

4. **Implemente as melhorias no negócio**

---

## 🔄 Versões

### v3.0 (Atual) - Focus Mode: Formatação
- Foco TOTAL no negócio de formatação de PCs
- Contextos profundos sobre operações reais
- Preços, margens, estratégias específicas
- Roadmap de 24 meses para escalar
- Integração prática DevSan → Negócio

### v2.0 (Legado) - Dual Mode
- Integração genérica DevSan + DeiviTech
- Contexto empresarial amplo
- Ver pasta `legacy/context/` (arquivos 01-08)

### v1.0 (Legado) - DevSan Only
- Apenas contexto pessoal AGI
- Ver pasta `legacy/context/` (arquivos originais)

---

## 📝 Contribuição

Este é um repositório pessoal para o negócio DeiviTech Formatação.

---

## 🔗 Links Importantes

- **Site DeiviTech:** https://deivisan.github.io/DeiviTech-Formatacao/
- **GitHub:** https://github.com/Deivisan/for-grok
- **WhatsApp:** (75) 98123-1019
- **Metodologia-Scrape:** https://github.com/Deivisan/Metodologia-Scrape

---

**🖥️ DeiviTech Formatação | Feira de Santana, BA | (75) 98123-1019**
