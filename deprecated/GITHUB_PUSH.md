# 🚀 PUSH PARA GITHUB - Instruções

## Preparar Repo

```bash
cd ~/Projetos/for-grok

# Renomear branch para main (opcional mas recomendado)
git branch -m main

# Verificar remote (ainda não configurado)
git remote -v
# (vazio)
```

## Criar Repo no GitHub

1. Vá para https://github.com/new
2. **Repository name:** `for-grok`
3. **Description:** `Contexto para conversação com Grok - DevSan AGI`
4. **Visibility:** 🌎 Public (temporário)
5. ❌ Não inicialize com README (já temos)
6. ❌ Não adicione .gitignore (já temos)
7. ❌ Não adicione license (MIT no Metodologia-Scrape)
8. Clique **Create repository**

## Configurar Remote e Push

```bash
# Adicionar remote (substitua USER pelo seu usuário)
git remote add origin https://github.com/Deivisan/for-grok.git

# Verificar
git remote -v

# Push
git push -u origin main
```

## Verificar URLs

Após push, verifique se os links funcionam:

```
https://raw.githubusercontent.com/Deivisan/for-grok/main/README.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/system-prompt.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/01-identity.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/02-capabilities.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/03-hardware.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/04-skills-detail.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/05-missing-pieces.md
https://raw.githubusercontent.com/Deivisan/for-grok/main/context/06-metodologia-scrape.md
```

## Copiar Prompt para Grok

1. Abra `system-prompt.md`
2. Copie o conteúdo entre os backticks (tudo após "Copie TUDO abaixo")
3. Cole no Grok (grok.com)
4. O Grok vai começar a ler os arquivos via web

## Após a Conversa

1. Gere Grok Share link
2. Capture:
   ```bash
   cd ~/Projetos/Metodologia-Scrape/packages/mcp-grok-scraper
   bun run index-full.ts --url="https://grok.com/share/SEU_LINK"
   ```
3. Salve em `conversations/`
4. Traga para mim (DevSan/OpenCode) implementar

## Limpar (quando quiser)

```bash
# Deletar repo GitHub
# Settings > Danger Zone > Delete this repository

# Deletar local
rm -rf ~/Projetos/for-grok
```

---

**Repo temporário - use por dias, não semanas 🦞**
