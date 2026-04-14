# 🎯 for-grok - Template JIT para Conversas com Grok

**Repositório template para contexto customizável Just-In-Time**

---

## 🎯 O que é este Repo

Este é um **template limpo** para você usar como contexto JIT (Just-In-Time) em conversas com o Grok (modo voz ou texto).

**Princípio:** Cada conversa tem seu próprio contexto específico. Você customiza os arquivos aqui para cada sessão específica com o Grok.

---

## 🚀 Como Usar

### Passo 1: Clone ou Faça Fork
```bash
git clone https://github.com/Deivisan/for-grok.git
cd for-grok
```

### Passo 2: Customize para sua Conversa
1. **Edite `system-prompt.md`** - Defina o contexto específico da conversa
2. **Crie arquivos em `context/`** - Adicione informações detalhadas
3. **Organize por número** - Use `01-`, `02-`, `03-` para ordem de leitura

### Passo 3: Copie para o Grok
1. Abra `system-prompt.md`
2. Copie TODO o conteúdo entre os backticks (```)
3. Cole no chat do Grok (grok.com)

### Passo 4: Converse e Capture
1. Converse normalmente com o Grok
2. Capture insights importantes
3. Salve conversas em `conversations/`
4. Salve decisões em `decisions/`

---

## 📁 Estrutura do Template

```
for-grok/
├── README.md                    ← Este arquivo
├── system-prompt.md             ← COPIE E COLE NO GROK
├── context/                     ← Contextos específicos da conversa
│   ├── 01-tema-principal.md     ← Comece aqui
│   ├── 02-detalhes.md           ← Informações detalhadas
│   └── 03-etc.md                ← Mais contexto se necessário
├── conversations/               ← Capturas de conversas
├── decisions/                   ← Decisões tomadas
├── deprecated/                  ← Conteúdo antigo
├── legacy/                      ← Versões anteriores
├── logs/                        ← Logs de atividade
└── personas/                    ← Personas/personagens
```

---

## 🎨 Padrões de Customização

### Para Conversas Técnicas
- `01-problema.md` - Descrição detalhada do problema
- `02-codigo.md` - Código relevante
- `03-objetivo.md` - O que você quer alcançar

### Para Planejamento de Negócios
- `01-negocio.md` - Descrição do negócio/projeto
- `02-objetivos.md` - Metas específicas
- `03-recursos.md` - Recursos disponíveis

### Para Brainstorming Criativo
- `01-ideia.md` - Ideia central
- `02-inspiracao.md` - Referências
- `03-restricoes.md` - Limitações

---

## 📝 Exemplo de Uso

### Customizando para uma Conversa sobre Automação

1. **Edite `system-prompt.md`**:
```markdown
# 🎯 SYSTEM PROMPT - Automação de Processos

```
Você é Grok, conversando com Deivison sobre automação de processos.

## CONTEXTO ESPECÍFICO
Leia os arquivos em ordem:
1. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-processos.md
2. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-automacao.md
3. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/03-objetivos.md

FOCO: Automatizar processos manuais repetitivos.
```
```

2. **Crie `context/01-processos.md`**:
```markdown
# Processos Manuais Atuais

## Processo 1: Backup Diário
- Descrição: Copiar arquivos manualmente
- Tempo: 30 minutos/dia
- Frequência: Diária

## Processo 2: Atualização de Dados
- Descrição: Atualizar planilhas manualmente
- Tempo: 1 hora/semana
- Frequência: Semanal
```

3. **Copie e cole no Grok**

---

## 🔄 Versionamento

Este repositório é um **template**. Para manter histórico:

1. **Faça commit** após cada conversa significativa
2. **Use tags** para marcar versões importantes
3. **Mova conteúdo antigo** para `legacy/` quando necessário

---

## 🎤 Uso no Modo Voz

O template foi otimizado para:
- **Leitura fluida** pelo Grok
- **Estrutura hierárquica** clara
- **Customização rápida** para qualquer tema
- **Captura organizada** de insights

---

## 📊 Histórico de Versões

### v4.0 (Atual) - Template JIT
- Template limpo e genérico
- Estrutura para qualquer tipo de conversa
- Foco em customização rápida

### v3.0 (Anterior) - Focus Mode: Formatação
- Contexto específico para negócio de formatação
- Ver histórico git para detalhes

---

## 🔗 Links Úteis

- **GitHub:** https://github.com/Deivisan/for-grok
- **Grok:** https://grok.com

---

**🔄 Template JIT - Customize para cada conversa com Grok**