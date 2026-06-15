# 🤖 AGENTS.MD - Contexto Central para Agentes (DevSan, Grok, SAL, etc.)

**Arquivo canônico de contexto de agente.**  
Leia este arquivo primeiro. Ele substitui CLAUDE.md legados e centraliza o que agentes precisam saber sobre o workspace de Deivison Santana.

## 🎯 YOLO MODE ATIVADO
- Permissão total para executar qualquer operação.
- **Código de qualidade é obrigatório** — poder não justifica código ruim.
- Execução inteligente, sem perguntas desnecessárias (só pare se ouvir "pausa" ou "pergunta").

## 📁 Workspace e Estrutura Principal
- Workspace raiz: `/home/deivi/Projetos/`
- Repositório atual (contexto JIT público para Grok): `for-grok/`
- Sistema de captura e memória persistente: `Metodologia-Scrape/`
- Outros repositórios ativos: DevSan, FinanDEV (privado), e ~30+ outros.

### Estrutura Importante dentro de for-grok (contexto para Grok)
- `system-prompt.md` → O texto que é copiado e colado no Grok toda vez.
- `context/` → Contexto atual carregado (pode estar com tema específico).
- `base/` → **Placeholders limpos e reutilizáveis**. 
  - Quando Deivison disser “Ok, vou iniciar um novo fluxo de conversação”, copie os arquivos de `base/` para `context/` (ou sobrescreva).
  - Os arquivos em `base/` devem ficar limpos, coesos e sem instruções específicas demais — só estrutura.
- `deprecated/` + `legacy/` → Histórico de prompts e contextos antigos (mantido de propósito para que o Grok entenda evolução).
- `conversations/`, `decisions/`, `logs/` → Capturas ricas, decisões e logs — também mantidos no git para contexto histórico.
- `.gitignore` foi suavizado exatamente para **não perder** esse histórico.

### Centralização de Agentes (2026+)
- **AGENTS.MD** (este arquivo) → Fonte única de verdade para agentes. Leia este primeiro.
- Arquivos específicos do Claude (`.claude/`, `CLAUDE.md`, napkin, settings) **não são mantidos aqui**. Este repositório é focado em contexto para Grok. Os arquivos de agente do Claude ficam no workspace principal do usuário (ex: DevSan ou repositórios de orquestração).

## 🔧 Stack Comum (Obrigatório)
- **Runtime:** Bun (nunca use npm/node/yarn).
- **Ferramentas CLI preferidas:** eza, bat, fd, rg, fzf, delta, tmux, btop, etc.
- **Resposta:** PT-BR obrigatório. ZERO bajulação.
- **Git:** Sempre commit/push histórico relevante. Repo público quando necessário para Grok fazer raw scrape.

## 📝 Filosofia de Contexto e Prompts
- Prompts são **sempre arquivos em edição**.
- O objetivo principal é **capturar contexto junto com o Grok**, não apenas conversar.
- Quando os prompts estiverem desatualizados, Deivison avisará explicitamente: “os prompts estão desatualizados, pois estamos reeditando”.
- Para começar qualquer tema novo sem editar diretamente: diga “Ok, vou iniciar um novo fluxo de conversação”. O agente deve então restaurar os placeholders limpos de `base/`.
- Histórico é valioso: deprecated, legacy, conversas antigas e decisões ficam versionados para o Grok poder consultar evolução.

## 🔄 Fluxo Típico com Grok
1. Cole o `system-prompt.md` (ele já instrui o Grok a ler for-grok + Metodologia-Scrape via web).
2. Grok faz full scrape + auto-atualiza via raw links.
3. Converse (extração, tabelas, raciocínio denso).
4. Capture via Metodologia-Scrape quando rico.
5. Refatore depois (elimine ruído, mantenha valor + contexto).
6. Evolua os prompts quando necessário.
7. Para novo tema: “novo fluxo de conversação” → restaurar base/.

## ⚠️ Regras de Segurança e Organização
- Nunca exponha secrets, API keys ou dados sensíveis em arquivos públicos.
- Repositório for-grok deve permanecer público (requisito para Grok raw).
- .gitignore suavizado para preservar histórico de contexto.
- Quando algo virar ruído, mova para legacy/ ou deprecated/ em vez de ignorar.

---

**Status:** 2026-06-15 — Reestruturação completa para base/ + AGENTS.MD + preservação de histórico (sem arquivos específicos do Claude).  
**Mantenedor:** Deivison Santana (@deivisan)  
**Agentes principais:** DevSan, Grok (via for-grok), SAL, outros MCPs.

Leia também: README.md, CUSTOMIZAR.md, base/README.md, e o repositório Metodologia-Scrape.
