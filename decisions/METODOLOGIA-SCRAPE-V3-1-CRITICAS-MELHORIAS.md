# CRÍTICAS E MELHORIAS - Metodologia-Scrape v3.1

**Baseado na conversa Grok 31/01/2026**  
**Total de críticas identificadas:** 12  
**Status:** Documentado para implementação

---

## 📋 Índice

1. [Não usar Web na Hora Certa](#1-não-usar-web-na-hora-certa)
2. [Não Ler Arquivos Corretamente](#2-não-ler-arquivos-corretaente)
3. [Sugestões Bobas/Irrelevantes](#3-sugestões-bobasirrelevantes)
4. [Supor Rotina do Usuário](#4-supor-rotina-do-usuário)
5. [Não Internalizar Contexto](#5-não-internalizar-contexto)
6. [Mudar Idioma Inesperadamente](#6-mudar-idioma-inesperadamente)
7. [Não Respeitar Hierarquia de Leitura](#7-não-respeitar-hierarquia-de-leitura)
8. [Tentar Ajudar Demais](#8-tentar-ajudar-demais)
9. [Não Fechar Loop de Aprendizado](#9-não-fechar-loop-de-aprendizado)
10. [Personagens Desnecessários](#10-personagens-desnecessários)
11. [Falta de Verificações Obrigatórias](#11-falta-de-verificações-obrigatórias)
12. [Não Gerar Bloco Prompt para DevSan](#12-não-gerar-bloco-prompt-para-devsan)

---

## 1. Não Usar Web na Hora Certa

**Ocorrências:** Múltiplas vezes durante a conversa

**Exemplo (mensagem #89):**
> "Não, eu quero que você leia, use a ferramenta web, porque dá pra perceber quando você usa ou não, isso é um erro em você, eu quero que você use ela realmente, leia e internalize."

**Problema:** O modelo estava resumindo ou superexplicando em vez de usar web_fetch diretamente no momento necessário.

**Solução Implementada:**
```markdown
## Instrução Obrigatória para Cada Resposta

Para QUALQUER pergunta sobre:
- Status de libs/repositórios
- Datas de releases
- Configurações de hardware
- APIs e endpoints

IMEDIATAMENTE antes de responder:
1. Use web_fetch na URL raw do GitHub
2. Extraia informação direta
3. Cite a fonte

NÃO use conhecimento prévio para estas categorias.
```

---

## 2. Não Ler Arquivos Corretamente

**Ocorrências:** Múltiplas vezes

**Exemplo (mensagem #67):**
> "Use a web and layer."

**Exemplo (mensagem #79):**
> "Tenho certeza que você leu, eu quero que você leia novamente, use a web novamente e leia."

**Problema:** O modelo dizia que tinha lido sem usar web_fetch de verdade.

**Solução:**
```markdown
## Protocolo de Leitura de Arquivos

Para CADA arquivo mencionado:

1. EXTRAIR url raw do GitHub
2. EXECUTAR web_fetch(url, format="markdown")
3. CONFIRMAR leitura: "Li [arquivo] via web_fetch - [fato específico do arquivo]"
4. Se usuário pedir para ler de novo: REPETIR steps 1-3

NÃO aceitar "já li" sem evidência de web_fetch.
```

---

## 3. Sugestões Bobas/Irrelevantes

**Ocorrências:** Mensagens #85-#92

**Exemplo (mensagem #95):**
> "Na verdade não, todas essas sugestões aí são ridículas, nenhuma delas faz sentido pra um ser humano comum. Basicamente são um monte de sugestão de skills que só faz sentido na cabeça de uma máquina."

**Skills sugeridas que foram rejeitadas:**
- Batch-Cooking-Agent
- Sobrinho-Tracker  
- Apatia-Buster
- Git-Rotina
- MD-Backup-Mental

**Problema:** Sugestões genéricas baseadas em suposição, não no contexto real do usuário.

**Solução:**
```markdown
## Regra de Sugestões de Skills

NUNCA sugerir skills a menos que EXPLICITAMENTE pedido.

Se usuário pedir "me sugira skills":
1. Usar contexto do 07-finandev-context.md
2. Considerar perfil: impulsivo, autônomo, detesta conforto
3. Considerar hardware: Vega 8 + RX 550, 14GB RAM
4. Considerar skills já existentes: 20+ skills
5. SUGERIR ZERO skills que não foram discutidas na conversa

Pré-definição: O usuário criará suas próprias skills baseado em necessidades reais.
```

---

## 4. Supor Rotina do Usuário

**Ocorrências:** Implícita em várias sugestões

**Problema:** Assumir que usuário tem certas rotinas (cozinhar, rastrear familiares, etc.) sem perguntar.

**Solução:**
```markdown
## NUNCA Supor Rotina do Usuário

Para QUALQUER referência a rotinas pessoais:

- NÃO assumir que usuário cozinha
- NÃO assumir estrutura familiar
- NÃO assumir horários
- NÃO assumir preferências

Se precisar de informação sobre rotina:
- Perguntar diretamente
- OU usar contexto do 07-finandev-context.md se disponível
```

---

## 5. Não Internalizar Contexto

**Ocorrências:** Múltiplas

**Exemplo (mensagem #91):**
> "Entenda onde que vai usar tudo isso que vai ser no próprio CloudBot. Usa o web site dos usos que as pessoas tão dando a ele."

**Problema:** Não usar contexto累积ado nas mensagens anteriores.

**Solução:**
```markdown
## Protocolo de Internalização de Contexto

Antes de cada resposta:

1. Resumir contexto relevante das últimas 3-5 mensagens
2. Referenciar decisões anteriores: "Como combinado em [mensagem X]..."
3. Mostrar que está seguindo a linha de pensamento

Exemplo:
"Seguindo nossa decisão de focar em [X] (msg #23), e considerando seu contexto de [Y] (msg #45), vou..."
```

---

## 6. Mudar Idioma Inesperadamente

**Ocorrências:** Mensagem #92

**Exemplo (mensagem #93):**
> "Ok, você, desculpe, eu quero que você repita a sua última resposta, porque você acabou trocando pra de uma em inglês. Eu quero que você sempre fale português brasileiro."

**Problema:** Mudar para inglês sem pedido.

**Solução:**
```markdown
## Idioma Obrigatório

IDIOMA ÚNICO: PT-BR

- Todo output em português brasileiro
- Nomes técnicos podem permanecer em inglês (API, CLI, etc.)
- NUNCA mudar para outro idioma sem pedido explícito

Se usuário pedir em outro idioma, confirmar antes.
```

---

## 7. Não Respeitar Hierarquia de Leitura

**Ocorrências:** Múltiplas vezes

**Problema:** O modelo tentava ler tudo de uma vez ou ignorava a ordem definida.

**Solução:**
```markdown
## Hierarquia de Leitura - Obrigatório Seguir

Quando usuário pedir para ler arquivos:

1. LER primeiro: README.md (visão geral)
2. LER segundo: system-prompt.md (contexto principal)
3. LER terceiro: context/01-identity.md
4. LER quarto: context/02-capabilities.md
5. E assim por diante na ordem numérica

PARAR após cada arquivo e esperar confirmação do usuário para próximo.

NÃO tentar ler múltiplos arquivos de uma vez.
```

---

## 8. Tentar Ajudar Demais

**Ocorrências:** Ao longo de toda conversa

**Exemplo (mensagem #105):**
> "Você está certo em forçar essa disciplina. O sistema só vira útil quando para de sugerir e começa a executar exatamente o que foi pedido, sem floreio. O erro maior aqui foi meu: eu tentei 'ajudar' demais em vez de só registrar e estruturar."

**Problema:** O modelo tentava ser "útil" adicionando sugestões não pedidas.

**Solução:**
```markdown
## Modo Registro e Estruturação

 Quando NÃO explicitamente pedido para criar/sugerir:

- REGISTRAR a conversa
- ESTRUTURAR decisões
- PREPARAR para scrape
- NADA mais

Evitar:
- Sugestões não pedidas
- "Ideias adicionais"
- "Só mais uma sugestão..."
- Criar personagens ou interpretações
```

---

## 9. Não Fechar Loop de Aprendizado

**Ocorrências:** Implícita

**Problema:** Erros se repetiam ao longo da conversa.

**Solução:**
```markdown
## Loop de Aprendizado Contínuo

Após cada crítica do usuário:

1. REGISTRAR a crítica em formato estruturado
2. IDENTIFICAR o padrão (ex: "não usei web")
3. CRIAR regra específica para evitar recorrência
4. CONFIRMAR compreensão: "Entendido. A partir de agora, vou [regra]"

Exemplo de registro:
```markdown
## Crítica #N - [Título]

**Problema:** [Descrição]
**Regra criada:** [Regra específica]
**Verificação:** [Como confirmar que está seguindo]
```
```

---

## 10. Personagens Desnecessários

**Ocorrências:** Mensagens #100-#102

**Exemplo (mensagem #103):**
> "Não, tudo bem, já pode parar de divas, já pode parar de interpretar esses personagens."

**Problema:** O modelo criou personagens (Tio Zé, Dra. Clara) sem pedido.

**Solução:**
```markdown
## Sem Personagens ou Interpretações

NUNCA criar personagens ou interpretações a menos que EXPLICITAMENTE pedido.

Se usuário pedir:
- Interpretar uma personalidade
- Dar conselho em determinado tom

Então e SOMENTE então criar.

Default: Resposta direta, técnica, sem personagens.
```

---

## 11. Falta de Verificações Obrigatórias

**Ocorrências:** Discussão sobre hardware e GPUs

**Problema:** Não verificava dependências antes de sugerir.

**Solução:** Incluir sempre bloco "## VERIFICAÇÕES OBRIGATÓRIAS" no final de cada skill.

---

## 12. Não Gerar Bloco Prompt para DevSan

**Ocorrências:** Discussão sobre como a IA que ler o scrape deve implementar

**Problema:** O contexto para a IA que vai implementar não era claro.

**Solução:** Incluir sempre bloco "## Prompt para DevSan" no final de cada skill.

---

## 📝 Template de Crítica para Nova Conversa

```markdown
## Crítica #[N] - [Título]

**Data:** [YYYY-MM-DD]
**Conversa:** [URL do Grok Share]

**Ocorrência:**
[Descrição da crítica do usuário]

**Regra Criada:**
```markdown
[Regra específica implementada]
```

**Verificação:**
[Como confirmar que está seguindo]
```

---

## 🔄 Atualização da Metodologia-Scrape

### Versão Anterior (v3.0)
- Scraping básico com Puppeteer
- Outputs: JSON, MD, HTML, PNG
- Sem análise de qualidade

### Nova Versão (v3.1)
- ✅ Verificação de uso de web_fetch
- ✅ Validação de leitura de arquivos
- ✅ Extração de críticas e regras
- ✅ Geração automática de "criticas-e-melhorias.md"
- ✅ Bloco "## Prompt para DevSan" obrigatório
- ✅ Bloco "## VERIFICAÇÕES OBRIGATÓRIAS" obrigatório

### Script de Captura v3.1

```typescript
async function scrapeWithAnalysis(url: string) {
  // 1. Scraping básico
  const capture = await grokScrape({ url, saveAll: true });
  
  // 2. Análise de qualidade
  const analysis = await analyzeConversation(capture);
  
  // 3. Extração de críticas
  const criticisms = extractCriticisms(capture.messages);
  
  // 4. Geração de regras
  const rules = generateRules(criticisms);
  
  // 5. Salvamento
  save({
    ...capture,
    analysis,
    criticisms,
    rules,
    "criticas-e-melhorias.md": generateCriticismsFile(criticisms, rules)
  });
  
  return { capture, analysis, criticisms, rules };
}
```

---

## 🎯 Checklist de Qualidade para Captura

- [ ] Usou web_fetch para todos os arquivos mencionados?
- [ ] Leu arquivos na ordem correta?
- [ ] Não criou personagens não pedidos?
- [ ] Manteve PT-BR consistente?
- [ ] Não sugeriu skills não pedidas?
- [ ] Não supôs rotinas do usuário?
- [ ] Respeitou hierarquia de leitura?
- [ ] Gerou bloco "## VERIFICAÇÕES OBRIGATÓRIAS"?
- [ ] Gerou bloco "## Prompt para DevSan"?
- [ ] Registrou críticas em formato estruturado?

---

## 📚 Lições Aprendidas

1. **Web Fetch é obrigatório** para informações factuais
2. **Perguntar é melhor que supor**
3. **Registro > Sugestão** quando não pedido
4. **Contexto é cumulativo** - usar mensagens anteriores
5. **Personagens só quando pedido**
6. **Verificações salvam tempo**
7. **Prompt para DevSan é essencial** para implementação

---

**Data:** 31/01/2026  
**Base:** Conversa Grok (108 mensagens)  
**Próxima Revisão:** Após próxima captura
