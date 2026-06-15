# CAPTURE.md - Captura de Conversas Grok Share (Método Atual)

**Data de fixação do método:** 15 de junho de 2026

## Status Atual

O método oficial e validado para capturar conversas Grok Share de forma completa, limpa e agentica é:

**BrowserOS + script canônico** (`scripts/capture/grok-share-capture.js`)

Este método foi treinado intensivamente no repositório `for-grok` e validado com sucesso no **link definitivo**:

https://grok.com/share/c2hhcmQtMg_eb824561-8d15-406a-9286-ffa9eb6486d0

### Resultado no link definitivo (gold standard)
- 13 turns completos
- Início e fim verificados ("E aí, Rex..." → "Ok, esse é o final.")
- Markdown limpo, alternância explícita Usuário / Grok
- Zero perda de mensagens
- Zero ruído de UI

Testado posteriormente com sucesso em sessões reais de 21 e 226 turns.

## O Script Canônico

Localização no repo:
- `scripts/capture/grok-share-capture.js` (principal)
- `tools/browseros/grok-share-capture.js` (cópia para agentes)

**Como usar agenticamente:**

1. Abrir o link Grok Share no BrowserOS.
2. Obter o page ID (`browseros_list_pages`).
3. Executar:
   ```js
   browseros_evaluate_script({
     page: <PAGE_ID>,
     expression: "/* conteúdo inteiro de grok-share-capture.js */"
   })
   ```
4. Salvar `result.cleanMarkdown` como artefato datado.

O script faz scroll paciente até estabilizar, limpa UI, detecta speakers e devolve o Markdown exato no formato desejado.

## Filosofia (do link definitivo)

- A captura deve ser **100% completa** (nunca perder mensagem, mesmo em sessões de 30min a 5h+).
- A saída deve ser **um único Markdown limpo**, só texto da conversa, com turns claramente marcados como Usuário / Grok.
- O Grok (durante a conversa) deve gerar **texto de altíssima qualidade**, sem ser excessivamente proativo criando arquivos ou prompts (isso fica para o agente de refatoração posterior).
- A refatoração, criação de arquivos, atualização de prompts etc. é feita **depois**, por um agente dedicado que tem acesso a todo o texto capturado (normalmente rodando dentro do próprio repositório for-grok).

## Relação com Metodologia-Scrape

- Atualmente (junho 2026) o repositório Metodologia-Scrape está privado e em reestruturação.
- A captura prática e funcional está centralizada aqui no `for-grok` via BrowserOS.
- O script e a metodologia foram registrados em `metodologia-scrape-port/2026-06-15/` para futura adaptação/port para o Metodologia-Scrape quando ele estiver pronto.

## Próximos Passos Possíveis

- Mais testes com sessões ainda mais longas.
- Ajustes finos de paciência/scroll se necessário.
- Empacotamento como skill/MCP mais formal.
- Quando Metodologia-Scrape voltar a ser o destino principal de armazenamento, migrar/adaptar o script e os artefatos de captura.

---

**Este arquivo existe para que qualquer agente (DevSan, Grok, SAL, etc.) saiba exatamente qual é o método atual de captura e onde está o script que funciona.**
