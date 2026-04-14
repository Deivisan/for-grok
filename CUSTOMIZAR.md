# 🎯 Como Customizar para uma Nova Conversa

**Guia rápido para usar este template JIT**

---

## 🚀 Passo a Passo Completo

### 1. Limpe os Placeholders
```bash
# Remova arquivos de exemplo
rm context/*.md

# Limpe conversas antigas (se necessário)
rm -rf conversations/*
```

### 2. Crie Seus Arquivos de Contexto
Crie arquivos **numerados** em `context/` para ordem de leitura:

```bash
# Crie seus arquivos
vim context/01-tema.md
vim context/02-detalhes.md
vim context/03-objetivos.md
vim context/04-codigo.md
vim context/05-metricas.md
```

### 3. Atualize o System Prompt
Abra `system-prompt.md` e **adicione os links dos seus arquivos** na lista:

```markdown
✅ **5. Código Fonte**
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/04-codigo.md

✅ **6. Métricas**
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/05-metricas.md
```

### 4. Copie para o Grok
1. Abra `system-prompt.md`
2. Copie **TODO O CONTEÚDO** entre os backticks (```)
3. Cole no chat do Grok (grok.com)
4. **Aguarde** o Grok ler todos os arquivos

### 5. Converse e Capture
1. Converse normalmente
2. Capture insights importantes
3. Salve conversas em `conversations/`
4. Salve decisões em `decisions/`

---

## 🧪 Limites e Capacidades do Grok

### O que o Grok consegue fazer:
✅ Ler arquivos markdown via URLs raw GitHub
✅ Ler até **8-12 arquivos** por sessão
✅ Ler até **~100KB por arquivo** completamente
✅ Manter contexto durante toda a conversa
✅ Navegar entre links dentro dos arquivos

### Boas Práticas:
🔹 Sempre numere os arquivos em ordem hierárquica
🔹 Coloque os arquivos mais importantes primeiro
🔹 Evite arquivos maiores que 100KB
🔹 Use markdown simples, formatação limpa
🔹 Mantenha links diretos para raw.githubusercontent.com

### O que NÃO funciona:
❌ Arquivos em repositórios privados
❌ Arquivos com proteção Cloudflare
❌ URLs curtas (bit.ly, tinyurl)
❌ Arquivos binários ou imagens
❌ Mais de 12 arquivos por sessão

---

## 📝 Exemplo Prático Completo

### Passo 1: Crie `context/01-problema.md`
```markdown
# Problema: Backup Manual Diário

## Situação Atual
- Backup manual de 5GB todos os dias às 18h
- Tempo gasto: 30 minutos/dia
- Risco: Esquecer, falha humana
```

### Passo 2: Crie `context/02-recursos.md`
```markdown
# Recursos Disponíveis

## Hardware
- Sistema: Linux Ubuntu 22.04
- Armazenamento: HD externo 1TB USB 3.0

## Conhecimento
- Bash: Intermediário
- Python: Básico
```

### Passo 3: Atualize `system-prompt.md`
Adicione os links na lista de arquivos para ler

### Passo 4: Cole no Grok e converse

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
# Mova para legacy/ para não poluir
mv context/ legacy/context-2026-04-14
mv conversations/ legacy/conversations-2026-04-14
```

---

## ✅ Checklist Antes de Usar

- [ ] Todos os arquivos em `context/` foram editados
- [ ] Links atualizados no `system-prompt.md`
- [ ] Todos os arquivos estão com permissão pública no GitHub
- [ ] Os arquivos são acessíveis via raw.githubusercontent.com
- [ ] Você copiou TODO o conteúdo entre os backticks

---

**🎯 Pronto para sua conversa personalizada com Grok!**