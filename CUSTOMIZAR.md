# 🎯 Como Customizar para uma Nova Conversa

**Guia rápido para usar este template JIT**

---

## 🚀 Passo a Passo

### 1. Limpe o Contexto Anterior
```bash
# Remova arquivos de exemplo
rm context/*.md

# Limpe conversas antigas (se necessário)
rm -rf conversations/*
```

### 2. Edite o System Prompt
Abra `system-prompt.md` e edite o conteúdo entre os backticks (```):

```markdown
# 🎯 SYSTEM PROMPT - [SEU TEMA AQUI]

```
Você é Grok, conversando com Deivison sobre [TEMA ESPECÍFICO].

## CONTEXTO ESPECÍFICO
Leia os arquivos em ordem:
1. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-[tema-principal].md
2. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-[detalhes].md
3. [adicione mais se necessário]

FOCO: [O que você quer alcançar nesta conversa?]
```
```

### 3. Crie Arquivos de Contexto
Crie arquivos numerados em `context/`:

```bash
# Exemplo para uma conversa técnica
vim context/01-problema.md
vim context/02-codigo.md  
vim context/03-objetivos.md

# Exemplo para planejamento de negócios
vim context/01-negocio.md
vim context/02-objetivos.md
vim context/03-recursos.md
```

### 4. Copie para o Grok
1. Abra `system-prompt.md`
2. Copie TODO o conteúdo **entre os backticks** (```)
3. Cole no chat do Grok
4. O Grok vai ler os arquivos em ordem

### 5. Converse e Capture
1. Converse normalmente
2. Capture insights importantes
3. Salve conversas em `conversations/`
4. Salve decisões em `decisions/`

---

## 🎨 Padrões Comuns

### Para Resolução de Problemas Técnicos
- `01-problema.md` - Descrição detalhada do problema
- `02-codigo.md` - Código relevante e configurações
- `03-objetivos.md` - O que você quer resolver

### Para Planejamento Estratégico
- `01-negocio.md` - Descrição do negócio/projeto
- `02-objetivos.md` - Metas específicas e métricas
- `03-recursos.md` - Recursos disponíveis e restrições

### Para Brainstorming Criativo
- `01-ideia.md` - Ideia central e inspiração
- `02-contexto.md` - Informações de fundo
- `03-restricoes.md` - Limitações e preferências

---

## 📝 Exemplo Prático

### Conversa sobre Automação de Backup

**system-prompt.md:**
```markdown
# 🎯 SYSTEM PROMPT - Automação de Backup

```
Você é Grok, especialista em automação.

PROBLEMA: Backup manual diário consome 30 minutos
OBJETIVO: Automatizar processo completo

Leia os arquivos:
1. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-processo.md
2. https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-recursos.md
```
```

**context/01-processo.md:**
```markdown
# Processo de Backup Atual

## Backup Diário
- Descrição: Copiar 5GB de arquivos manualmente
- Tempo: 30 minutos/dia
- Frequência: Diária às 18h
- Local: HD externo USB
```

**context/02-recursos.md:**
```markdown
# Recursos Disponíveis

## Hardware
- Computador: Linux Ubuntu 22.04
- Storage: HD externo 1TB USB 3.0

## Software
- Sistema: Linux bash
- Conhecimento: Intermediário em scripting
```

---

## 🔄 Versionamento

Após conversas importantes:
```bash
git add .
git commit -m "💬 Conversa sobre [tema] - $(date +%Y-%m-%d)"
git push
```

Para conteúdo antigo:
```bash
# Mova para legacy/
mv context/ legacy/context-[data]
mv conversations/ legacy/conversations-[data]
```

---

**🎯 Template JIT - Customize para cada conversa!**