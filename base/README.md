# 📁 Base Placeholders (Clean, Cohesive, Reusable)

**Estes são os templates limpos** que você usa como ponto de partida quando começa um novo fluxo de conversação.

Quando você disser algo como:
> "Ok, vou iniciar um novo fluxo de conversação"

Você (ou um agente) deve:
1. Copiar os arquivos deste diretório `base/` para `context/` (ou sobrescrever os context/ atuais com versões limpas).
2. Atualizar o `system-prompt.md` com os links corretos para os novos context/ (se necessário).
3. O Grok já vai ler o contexto permanente (01-tema-principal, 02-detalhes, 03-objetivos) + Metodologia-Scrape, e você só injeta o tema específico novo.

## Arquivos base atuais

- `01-tema-principal.md` — Tema genérico / placeholder para o foco da conversa atual.
- `02-detalhes.md` — Detalhes técnicos, dados, restrições específicas do tema.
- `03-objetivos.md` — Objetivos imediatos, critérios de sucesso, o que você quer do Grok nesta conversa.

## Regras importantes

- Estes arquivos devem ficar **limpos, coesos e sem instruções específicas demais**.
- Eles servem como **estrutura reutilizável**.
- O contexto permanente (como você usa o Grok para extração + anotação + refatoração + captura via Metodologia-Scrape) já está carregado via `context/01-tema-principal.md`, `02-detalhes.md`, `03-objetivos.md` no nível raiz de `context/`, e via o `system-prompt.md`.
- Quando você começa algo novo, você **não edita diretamente** os arquivos de contexto permanente. Você fala "novo fluxo" e reaproveita os placeholders limpos daqui.

## Histórico vs Base

- `base/` → templates limpos e reutilizáveis (sempre disponíveis).
- `context/` → contexto carregado atualmente (pode estar sujo com tema específico).
- `deprecated/` + `legacy/` → versões antigas de prompts e contextos completos (histórico que o Grok deve poder consultar para entender evolução).
- `conversations/`, `decisions/`, `logs/` → capturas, decisões e logs que também ficam no histórico para contexto rico.

O `.gitignore` foi suavizado exatamente para **não perder** esse histórico. O objetivo é que o Grok sempre tenha acesso (via raw ou local) ao que já foi usado, como os prompts evoluíram, e qual era o contexto em momentos passados.

---

**Quando os prompts estiverem desatualizados**, você avisa explicitamente ("os prompts estão desatualizados, estamos reeditando"). Até lá, os arquivos em `base/` + o contexto permanente em `context/` são a base estável.
