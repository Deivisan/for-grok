# 🦞🏢 for-grok v2.0 - Dual Mode

**Contexto completo para modo voz do Grok: DevSan AGI + DeiviTech**

[![Version](https://img.shields.io/badge/version-2.0-blue)](./)
[![Status](https://img.shields.io/badge/status-Ativo-success)](./)
[![Mode](https://img.shields.io/badge/mode-Dual-orange)](./)

---

## 🎯 O que é este Repo

Este repositório fornece **contexto estruturado** para o Grok (modo voz ou texto) compreender completamente:

- 🦞 **DevSan AGI** - Sistema de AGI pessoal de Deivison Santana
- 🏢 **DeiviTech** - Empresa de soluções tecnológicas
- 🔗 **Integração** - Como ambas as faces se complementam

---

## 📁 Estrutura

```
for-grok/
├── system-prompt.md          ← COPIE E COLE NO GROK
├── README.md                 ← Este arquivo
├── context/                  ← Contextos modulares
│   ├── 01-identidade-dual.md       ← As duas faces
│   ├── 02-devsan-core.md           ← Sistema AGI pessoal
│   ├── 03-deivitech-core.md        ← Empresa e serviços
│   ├── 04-stack-tecnologico.md     ← Hardware + software
│   ├── 05-capacidades-agregadas.md ← Sinergias
│   ├── 06-integracoes.md           ← Fluxos integrados
│   ├── 07-roadmap-dual.md          ← Próximos passos
│   └── 08-restricoes-e-dicas.md    ← Como conversar
├── conversations/            ← Capturas de conversas Grok
├── decisions/               ← Decisões técnicas documentadas
├── personas/                ← Perfis de agentes (futuro)
└── legacy/                  ← Versão anterior (v1.0)
    ├── context/            ← Contextos antigos
    ├── deprecated/         ← Arquivos obsoletos
    ├── decisions/          ← Decisões antigas
    ├── conversations/      ← Conversas antigas
    └── system-prompt.md    ← Prompt antigo
```

---

## 🚀 Como Usar

### Passo 1: Copiar System Prompt
1. Abra `system-prompt.md`
2. Copie TODO o conteúdo entre os backticks (```)
3. Cole no chat do Grok (grok.com)

### Passo 2: Deixar o Grok Ler
O Grok vai seguir a hierarquia e ler os arquivos em `context/` na ordem correta.

### Passo 3: Conversar
Converse normalmente. O Grok agora entende:
- Seu sistema AGI pessoal (DevSan)
- Sua empresa (DeiviTech)
- Como integrar ambos

---

## 📖 Hierarquia de Contexto

| Ordem | Arquivo | Conteúdo |
|-------|---------|----------|
| 1 | `01-identidade-dual.md` | Apresentação das duas faces |
| 2 | `02-devsan-core.md` | Sistema AGI em detalhe |
| 3 | `03-deivitech-core.md` | Empresa e serviços |
| 4 | `04-stack-tecnologico.md` | Hardware e software |
| 5 | `05-capacidades-agregadas.md` | O que fazem juntos |
| 6 | `06-integracoes.md` | Sinergias técnicas |
| 7 | `07-roadmap-dual.md` | Próximos passos |
| 8 | `08-restricoes-e-dicas.md` | Como conversar bem |

---

## 🎤 Uso no Modo Voz

O system prompt foi otimizado para:
- **Leitura fluida** pelo Grok
- **Referências claras** a arquivos externos
- **Instruções passo-a-passo**
- **Tom conversacional**

Simplesmente cole e converse naturalmente.

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

4. **Implemente no clawdbot**
   - Abra OpenCode
   - Forneça o arquivo capturado
   - Peça: "Implemente as decisões da conversa Grok"

---

## 🔄 Versões

### v2.0 (Atual) - Dual Mode
- Integração DevSan + DeiviTech
- Contexto empresarial adicionado
- Foco em monetização de skills
- Roadmap unificado

### v1.0 (Legado)
- Apenas contexto pessoal (DevSan)
- Foco em sistema AGI
- Ver pasta `legacy/`

---

## 📝 Contribuição

Este é um repositório pessoal, mas se quiser usar como template:

1. Fork o repo
2. Adapte os contextos para sua realidade
3. Mantenha a estrutura modular
4. Versione suas mudanças

---

## 🔗 Links Úteis

- **GitHub:** https://github.com/Deivisan/for-grok
- **Metodologia-Scrape:** https://github.com/Deivisan/Metodologia-Scrape
- **DeiviTech:** https://github.com/Deivisan/deivitech
- **DevSan:** (privado)

---

**🦞🏢 Dual Mode Ativo | Mantido por @deivisan**
