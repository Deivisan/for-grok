# AGENTS.md - for-grok Repository

> **Repositório template JIT para conversas com Grok**

---

## 🎯 PROPÓSITO

Este repositório é um **template Just-In-Time** para customizar contexto específico para cada conversa com o Grok (modo voz ou texto).

**Princípio:** Cada conversa tem seu próprio contexto customizado via arquivos markdown acessíveis via web.

---

## 🔄 MUDANÇAS RECENTES (v4.0)

### Transformação para Template JIT
- **Data:** 14/04/2026
- **Status:** ✅ Concluído

**O que mudou:**
- ❌ Removido conteúdo específico anterior (DeiviTech Formatação)
- ✅ Criado template genérico JIT
- ✅ README.md explicando uso como template
- ✅ system-prompt.md genérico para customização
- ✅ CUSTOMIZAR.md com guia passo a passo
- ✅ Estrutura de diretórios vazia organizada

**Capacidade Web do Grok:**
- ✅ Grok pode fazer scrape de arquivos markdown via URLs raw GitHub
- ✅ Links diretos para cada arquivo no system prompt
- ✅ Máximo de contexto por requisição aproveitado

---

## 📁 ESTRUTURA ATUAL

```
for-grok/
├── README.md                    ← Documentação principal
├── AGENTS.md                    ← Este arquivo (mudanças recentes)
├── system-prompt.md             ← Prompt principal (copiar/colar)
├── CUSTOMIZAR.md                ← Guia de customização
├── context/                     ← Contextos específicos da conversa
│   ├── 01-tema-principal.md     ← Placeholder (customizar)
│   ├── 02-detalhes.md           ← Placeholder (customizar)
│   └── 03-objetivos.md          ← Placeholder (customizar)
├── conversations/               ← Capturas de conversas (vazio)
├── decisions/                   ← Decisões tomadas (vazio)
├── deprecated/                  ← Conteúdo antigo (vazio)
├── legacy/                      ← Versões anteriores (vazio)
├── logs/                        ← Logs de atividade (vazio)
└── personas/                    ← Personas/personagens (vazio)
```

---

## 🌐 CAPACIDADE WEB DO GROK

### URLs Raw GitHub Disponíveis
```
Base: https://raw.githubusercontent.com/Deivisan/for-grok/main/

Arquivos principais:
- README: https://raw.githubusercontent.com/Deivisan/for-grok/main/README.md
- System Prompt: https://raw.githubusercontent.com/Deivisan/for-grok/main/system-prompt.md

Contextos (customizar):
- 01: https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-tema-principal.md
- 02: https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-detalhes.md
- 03: https://raw.githubusercontent.com/Deivisan/for-grok/main/context/03-objetivos.md
```

### Limites de Scrape
- **Máximo por requisição:** Grok pode ler vários arquivos em uma sessão
- **Mínimo necessário:** Pelo menos o arquivo base (README) deve ser lido
- **Ordem hierárquica:** Arquivos numerados são lidos sequencialmente

---

## 🚀 COMO USAR (FLUXO ATUALIZADO)

### 1. Customizar para Nova Conversa
```bash
# Clone o repositório
git clone https://github.com/Deivisan/for-grok.git
cd for-grok

# Remova exemplos (opcional)
rm context/*.md

# Crie seus próprios arquivos numerados
vim context/01-seu-tema.md
vim context/02-detalhes.md
vim context/03-objetivos.md
```

### 2. Editar System Prompt
Edite `system-prompt.md` com links específicos:

```markdown
# 🎯 SYSTEM PROMPT - [SEU TEMA]

```
Você é Grok. Antes de conversar, LEIA estes arquivos:

1. https://raw.githubusercontent.com/Deivisan/for-grok/main/README.md
2. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-seu-tema.md
3. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-detalhes.md
4. [adicione mais conforme necessário]

OBRIGATÓRIO: Leia TODOS antes de responder.
```
```

### 3. Usar no Grok
1. Copie o conteúdo entre backticks de `system-prompt.md`
2. Cole no chat do Grok
3. Grok vai fazer scrape automático dos arquivos
4. Converse normalmente

### 4. Capturar e Organizar
- Salve conversas em `conversations/`
- Salve decisões em `decisions/`
- Versionamento via git

---

## 📝 EXEMPLO DE USO

### Para Conversa Técnica
```markdown
# 🎯 SYSTEM PROMPT - Automação de Backup

```
Você é Grok, especialista em automação.

LEIA ANTES DE CONVERSAR:
1. https://raw.githubusercontent.com/Deivisan/for-grok/main/README.md
2. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-problema.md
3. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-recursos.md

PROBLEMA: Backup manual consome 30min/dia
OBJETIVO: Automatizar completamente
```
```

### Para Planejamento Estratégico
```markdown
# 🎯 SYSTEM PROMPT - Expansão de Negócio

```
Você é Grok, consultor estratégico.

LEIA:
1. https://raw.githubusercontent.com/Deivisan/for-grok/main/README.md
2. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-negocio.md
3. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-objetivos.md

FOCO: Como escalar de R$2k para R$8k/mês
```
```

---

## 🔗 LINKS IMPORTANTES

- **Repositório:** https://github.com/Deivisan/for-grok
- **Raw GitHub Base:** https://raw.githubusercontent.com/Deivisan/for-grok/main/
- **Grok:** https://grok.com

---

## 📊 HISTÓRICO DE VERSÕES

### v4.0 (Atual) - Template JIT
- Template genérico para qualquer conversa
- Explora capacidade web do Grok
- URLs raw GitHub para scrape automático
- Placeholders vazios para customização

### v3.0 (Anterior) - Focus Mode: Formatação
- Contexto específico para negócio de formatação
- Ver histórico git para detalhes

---

**🔄 Template JIT - Customize → Scrape → Converse**