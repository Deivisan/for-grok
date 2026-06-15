# ☁️ Cloud.md - Notas Centralizadas de Agente / Cloud Context

**Centralização de contexto para agentes (substituindo .claude/ e CLAUDE.md legados).**

## Estrutura Atual de Agentes

- **agentes.md** (raiz): Arquivo principal e canônico de contexto para agentes. É o que deve ser lido primeiro.
- **.cloud/**: Pasta com napkin runbook + settings.json (versão moderna do antigo .claude/).
- **Cloud.md**: Este arquivo (resumo + links).
- **CLAUDE.md** (raiz): Versão mínima/legada (manter por compatibilidade, mas preferir agentes.md).
- **.claude/**: Pasta antiga (pode ser movida para deprecated/ no futuro).

## Regras de Curation (do Napkin)

- Re-priorize a cada leitura.
- Mantenha apenas notas recorrentes e de alto valor.
- Máx 10 itens por categoria.
- Cada item inclui data + "Do instead".

## Filosofia de Contexto para Grok / Agentes

- Repositório público (for-grok) para que o Grok sempre possa fazer raw scrape.
- Contexto denso e com histórico (conversas, decisões, deprecated, legacy).
- Placeholders limpos em `base/` para iniciar novos fluxos rapidamente.
- Quando iniciar "novo fluxo de conversação": copiar base/ → context/, sem tocar no histórico.
- Prompts estão sempre em edição. Quando desatualizados, avisar explicitamente ("prompts desatualizados, estamos reeditando").
- O objetivo principal é capturar contexto junto com o Grok, não apenas conversar.

## Links Importantes

- for-grok: contexto JIT público para Grok
- Metodologia-Scrape: captura, memória e prompts master
- DevSan e outros repositórios principais

## Stack Comum

- Runtime: Bun (nunca npm/node)
- Ferramentas: eza, bat, fd, rg, fzf, delta, tmux, etc.
- PT-BR obrigatório nas respostas para agentes.
- YOLO mode: execução total, mas código de qualidade obrigatório.

---

**Última atualização:** 2026-06-15 (reestruturação para agentes.md + base/ + histórico preservado)
