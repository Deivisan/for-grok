# 🎯 Como Customizar e Evoluir o Contexto (Seu Fluxo Real)

**Guia prático para usar e melhorar este template JIT + memória persistente.**

---

## 🚀 Fluxo Básico de Uso

### 1. Iniciar conversa (contexto permanente ou tema específico)

1. Abra `system-prompt.md`.
2. Copie **todo o conteúdo** entre os backticks (```).
3. Cole no Grok (voz ou texto).
4. Aguarde o Grok:
   - Ler todos os arquivos listados (em ordem).
   - Usar web para auto-atualizar (for-grok + Metodologia-Scrape).
   - Confirmar que carregou o modo de operação (extração + refatoração + captura).

### 2. Conversar

- Fale abertamente.
- Peça estrutura (tabelas, listas, planos, comparações).
- O Grok ajuda a extrair e organizar em tempo real.

### 3. Capturar (quando valer a pena)

- Compartilhe o link Grok Share.
- Metodologia-Scrape captura (JSON + MD em captures/).
- A captura vira memória externa para refatoração futura.

### 4. Refatorar

- Peça ao Grok (ou outro agente): "refatora eliminando ruído, o que eu falei, horários, rascunhos — mantém só o valor rico + contexto".
- Refatore **com base no contexto de cada coisa** (não resumo cego).

### 5. Evoluir os prompts

- Quando a conversa revelar melhorias no modo de usar o Grok, peça para atualizar os arquivos.
- Commit + push para que os raw links fiquem atualizados.

---

## 📝 Como Customizar para uma Conversa com Tema Específico

### Passo a passo

1. **Limpe placeholders antigos (se necessário):**
   ```bash
   # Só se quiser começar limpo (cuidado: apaga o que está lá)
   rm context/*.md
   ```

2. **Crie/edit arquivos numerados em `context/`:**
   ```bash
   # Exemplo: tema "lista de compras"
   # context/01-tema-principal.md     ← pode manter ou ajustar o permanente
   # context/02-detalhes.md           ← pode manter ou ajustar o permanente
   # context/03-objetivos.md          ← pode manter ou ajustar o permanente
   # context/04-lista-compras.md      ← novo
   # context/05-precos-e-marcas.md    ← novo
   # context/06-decisoes.md           ← novo
   ```

3. **Atualize o `system-prompt.md`:**
   - Na seção "ARQUIVOS PARA LER", adicione os novos links:
     ```markdown
     ✅ **5. Lista de Compras**
     https://raw.githubusercontent.com/Deivisan/for-grok/main/context/04-lista-compras.md

     ✅ **6. Preços e Marcas**
     https://raw.githubusercontent.com/Deivisan/for-grok/main/context/05-precos-e-marcas.md

     ✅ **7. Decisões e Justificativas**
     https://raw.githubusercontent.com/Deivisan/for-grok/main/context/06-decisoes.md
     ```

4. **Copie e cole no Grok** (todo o conteúdo entre os backticks do system-prompt.md).

5. **Converse, capture, refatore.**

6. **Depois da conversa (se quiser guardar):**
   - Mova os arquivos específicos (04, 05, 06...) para `legacy/` ou `deprecated/` se não quiser mais no contexto base.
   - Ou deixe lá se quiser retomar o tema depois.

---

## 🔄 Como Evoluir o Contexto Permanente (Modo de Operação)

O contexto permanente está em:

- `context/01-tema-principal.md`
- `context/02-detalhes.md`
- `context/03-objetivos.md`
- `system-prompt.md` (a parte que é colada)

### Quando evoluir:

- Depois de várias conversas você percebe que o fluxo pode ser mais eficiente.
- O Grok sugere (ou você percebe) uma forma melhor de estruturar extração/refatoração.
- Surge um novo padrão de uso que vale incorporar no modo base.
- O Metodologia-Scrape evolui (novas features, novos prompts, novas capturas importantes) e você quer que o Grok já carregue isso.

### Como fazer:

1. Edite os arquivos de contexto diretamente (densidade é bem-vinda).
2. Peça ao Grok, durante ou depois de uma conversa, para ajudar a refatorar/propor melhorias nos prompts.
3. Atualize também os prompts correspondentes no **Metodologia-Scrape** quando fizer sentido (PROMPT_MASTER_V3.md, METODOLOGIA_CONSOLIDADA.md, etc.).
4. Commit + push.
5. Teste colando o system-prompt novo no Grok e verificando se ele leu e entendeu as mudanças.

---

## 🧪 Limites e Capacidades do Grok (Referência Realista)

**O que funciona bem:**
- Ler 8-12+ arquivos por sessão via raw.githubusercontent.com.
- Arquivos densos de até ~100-200KB cada.
- Manter contexto durante a conversa.
- Usar web para se autoatualizar (reler os links).
- Navegar entre links dentro dos arquivos.

**Boas práticas:**
- Numere os arquivos em ordem hierárquica (01-, 02-, 03...).
- Coloque os arquivos mais importantes primeiro.
- Mantenha links diretos para raw.githubusercontent.com.
- Use markdown simples e legível.
- Densidade é intencional — não limite o Grok com "resuma para caber".

**O que não funciona (evite):**
- Repositórios privados (Grok não consegue acessar).
- Arquivos protegidos por Cloudflare ou autenticação.
- URLs encurtadas (bit.ly, tinyurl etc.).
- Arquivos binários ou imagens como contexto principal.
- Pedir para o Grok "não ler tudo" ou "resumir antes de ler".

---

## 📦 Integração com Metodologia-Scrape (Não Esqueça)

Este repositório (for-grok) é o **contexto de entrada**.

Metodologia-Scrape é o **sistema de captura + memória + prompts master**.

Sempre que evoluir algo importante aqui, considere espelhar/atualizar lá também (e vice-versa).

O system-prompt atual já instrui o Grok a ler vários arquivos chave do Metodologia-Scrape toda vez. Mantenha isso atualizado.

---

## 🔄 Versionamento e Organização

- Faça commit após mudanças significativas nos prompts ou após conversas que geraram evolução de contexto.
- Mensagens de commit claras ajudam (ex: "docs: adicionar contexto de refatoração cirúrgica", "feat: novo tema lista de compras").
- Quando o contexto base ficar poluído com temas antigos, mova os arquivos específicos para `legacy/` ou `deprecated/`.
- O `.gitignore` já protege pastas locais (conversations/, decisions/, etc.) e secrets.

---

## ✅ Checklist Antes de Colar o System-Prompt

- [ ] Os arquivos context/ que você quer que o Grok leia estão atualizados.
- [ ] Os links no system-prompt.md estão corretos (incluindo arquivos do Metodologia-Scrape).
- [ ] O repositório está com push recente (raw links atualizados).
- [ ] O repositório está público (sem segredos).
- [ ] Você copiou **todo** o conteúdo entre os backticks do system-prompt.md.

---

**🎯 Resumo:** Customize para tema específico adicionando arquivos numerados + atualizando links. Evolua o modo permanente editando 01/02/03 + system-prompt + (quando fizer sentido) os prompts no Metodologia-Scrape. Capture conversas ricas. Refatore depois. Evolua os prompts com base no que aprendeu. Commit + push. Repita.

**🔄 Template JIT + Memória Persistente - em evolução contínua.**
