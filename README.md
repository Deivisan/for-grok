# 🎯 for-grok - Template JIT + Memória Persistente para Conversas com Grok

**Repositório público para contexto denso, auto-atualizável e versionado.**

---

## 🎯 O que é este Repo (evoluído)

Este é um **template de contexto JIT (Just-In-Time)** otimizado para o fluxo real de Deivison:

- **Extração máxima de inteligência** durante conversas longas e densas (anotação, tabelas, raciocínio, estruturação em tempo real).
- **Captura automática** via Metodologia-Scrape (links permanentes Grok Share → JSON + MD).
- **Refatoração inteligente posterior** (eliminar ruído, manter contexto rico e valor).
- **Melhoria contínua dos próprios prompts** (o Grok ajuda a evoluir o system-prompt e os context/ com base no que é aprendido).

**Princípio central:** O Grok precisa de contexto completo e atualizado toda vez que a conversa começa. Em vez de reexplicar tudo, Deivison cola o system-prompt → Grok faz scrape dos raw links (for-grok + Metodologia-Scrape) → já carrega o modo de operação permanente + estado atual.

O repositório **deve permanecer público** (raw.githubusercontent.com) porque o Grok depende de acesso web para ler os arquivos.

---

## 🚀 Como Usar (Fluxo Real)

### 1. Iniciar uma conversa (modo permanente ou tema específico)

- Abra `system-prompt.md`.
- Copie **TODO o conteúdo** entre os backticks.
- Cole no Grok (voz ou texto).
- Aguarde o Grok:
  - Ler todos os arquivos listados (em ordem).
  - Usar web para se autoatualizar (reler for-grok + Metodologia-Scrape).
  - Confirmar que carregou o contexto completo.

### 2. Conversar (extração e estruturação)

- Fale abertamente, sem filtro.
- Peça tabelas, listas, planos, comparações, decisões parciais.
- O Grok ajuda a estruturar em tempo real.

### 3. Capturar (quando a conversa for valiosa)

- Compartilhe o link via "Grok Share" (link permanente público).
- Deixe o Metodologia-Scrape capturar (MCP ou scripts).
- A captura vira fonte de memória para refatoração futura.

### 4. Refatorar (pós-conversa ou em sessão futura)

- Peça ao Grok (ou outro agente) para refatorar a conversa/captura.
- Objetivo: eliminar ruído (o que você falou, listas temporárias, horários, repetições) e manter valor rico + contexto.
- Refatore **com base no contexto de cada coisa**, não resuma cegamente.

### 5. Evoluir os prompts

- Quando a conversa revelar melhorias no modo de usar o Grok, peça para atualizar:
  - system-prompt.md
  - context/*.md
  - Prompts no Metodologia-Scrape
- Commit + push para que os raw links fiquem atualizados.

---

## 📁 Estrutura do Template

```
for-grok/
├── README.md                    ← Este arquivo (visão geral + fluxo)
├── system-prompt.md             ← O PEDIDO QUE VOCÊ COPIA E COLE NO GROK
├── CUSTOMIZAR.md
├── AGENTS.MD                    ← Contexto canônico para agentes
├── context/                     ← Tema permanente + detalhes + objetivos
├── scripts/capture/             ← **Captura canônica via BrowserOS** (grok-share-capture.js)
│   └── grok-share-capture.js    ← Script que resolve: scroll paciente + Markdown limpo Usuário/Grok
├── tools/browseros/             ← Cópia do mesmo script para conveniência de agentes
├── training/browseros-scrape/   ← Histórico de treinamento + capturas de validação (inclui o link definitivo)
├── metodologia-scrape-port/     ← Notas e payloads prontos para levar ao Metodologia-Scrape (privado)
├── conversations/ decisions/ legacy/ deprecated/  ← (quando necessário)
└── .gitignore
```

**Captura de conversas Grok Share**

A partir de 15/06/2026 o método oficial e validado é via BrowserOS + o script `scripts/capture/grok-share-capture.js`.

- Abra o link Grok Share no BrowserOS.
- Identifique o page ID.
- Execute o script via `browseros_evaluate_script`.
- Salve o `cleanMarkdown` resultante.

O script foi treinado e validado no **link definitivo**:
https://grok.com/share/c2hhcmQtMg_eb824561-8d15-406a-9286-ffa9eb6486d0

E testado com sucesso em sessões de 21 e 226 turns sem perda de mensagens.

**Pastas como conversations/, decisions/, legacy/ não são versionadas por padrão** (estão no .gitignore). Elas aparecem quando você quiser manter rascunhos locais.

---

## Sobre Metodologia-Scrape (sistema de captura)

Existe um sistema chamado **Metodologia-Scrape** (https://github.com/Deivisan/Metodologia-Scrape) que é usado para capturar conversas ricas feitas com o Grok, armazená-las de forma estruturada e permitir refatoração posterior.

Atualmente o repositório está **privado** (em processo de refatoração e melhoria das metodologias, pois havia chaves de API expostas). Por isso, o contexto em for-grok foi ajustado para ser auto-suficiente: o Grok deve entender o conceito e o fluxo sem precisar ler arquivos raw do Metodologia-Scrape.

Quando o repositório voltar a ficar público e as metodologias estiverem melhores, Deivison atualizará o contexto para voltar a integrar as leituras.

---

## 🎨 Padrões de Customização

### Para conversas com tema específico (além do contexto permanente)

- Crie ou edite arquivos em `context/` com numeração (01-, 02-, 03-...).
- Atualize a lista de links no `system-prompt.md` (seção "ARQUIVOS PARA LER").
- Exemplo:
  - 04-lista-compras.md
  - 05-precos-supermercados.md
  - 06-decisoes-teste.md

### Para evolução do modo de operação (permanente)

- Edite diretamente:
  - context/01-tema-principal.md
  - context/02-detalhes.md
  - context/03-objetivos.md
  - system-prompt.md
- Atualize também os prompts correspondentes no Metodologia-Scrape quando fizer sentido.
- Commit + push.

---

## 📝 Exemplo de Fluxo Completo (Seu Uso Real)

1. Você cola o system-prompt atual no Grok.
2. Grok lê for-grok (README + context/01/02/03) + Metodologia-Scrape (vários arquivos) + auto-atualiza via web.
3. Você conversa 60 minutos sobre lista de compras (preços, marcas, promoções, logística, preferências, restrições).
4. Durante a conversa: Grok ajuda a criar tabelas, registrar comparações, decisões parciais.
5. Fim da conversa: você compartilha o link Grok Share.
6. Metodologia-Scrape captura → gera JSON + MD em captures/.
7. Depois (mesma sessão ou futura): você pede "refatora essa captura eliminando o que eu falei, ruído, horários — quero só a lista limpa com justificativas por item".
8. Grok (ou outro agente) usa a captura + contexto carregado e produz o artefato refinado.
9. Se a conversa revelou algo sobre como usar melhor o Grok: você pede para atualizar os prompts (system-prompt.md + context/ + Metodologia-Scrape).
10. Commit + push.

---

## 🔄 Versionamento e Manutenção

- Faça commit após conversas significativas ou após evoluir prompts.
- Use mensagens claras (ex: "feat: adicionar contexto de lista de compras", "docs: refatorar system-prompt com foco em refatoração cirúrgica").
- Quando conteúdo antigo poluir, mova para `legacy/` ou `deprecated/` (e atualize .gitignore se necessário).
- O repositório **deve continuar público** — é requisito para o Grok poder fazer scrape.

---

## 🎤 Uso no Modo Voz

O template é otimizado para:
- Leitura fluida pelo Grok (estrutura hierárquica clara).
- Densidade (Grok aguenta contexto grande).
- Auto-atualização via web (não depende só da memória da sessão).
- Continuidade (capturas + prompts versionados permitem retomar e refatorar).

---

## 📊 Histórico de Versões (Resumo)

- **v4.0 (atual)**: Template JIT + contexto permanente de extração/refatoração + integração explícita com Metodologia-Scrape + auto-atualização via web + densidade intencional.
- **v3.0 (anterior)**: Focus Mode (negócio de formatação).
- **v2.0**: Dual Mode (DevSan + DeiviTech).
- **v1.0**: Versões iniciais.

Ver histórico git para detalhes completos.

---

## 🔗 Links Úteis

- **for-grok (este repo):** https://github.com/Deivisan/for-grok
- **Metodologia-Scrape (captura + memória):** https://github.com/Deivisan/Metodologia-Scrape
- **Grok:** https://grok.com

---

**🔄 Template JIT + Memória Persistente - Cole → Extraia → Capture → Refatore → Evolua → Repita**
