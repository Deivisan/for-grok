# 📋 QUESTIONÁRIO GROK - MELHORIAS REPO PRINCIPAL

**Repo:** `github.com/Deivisan/Deivisan`  
**Data:** 2026-02-05  
**Objetivo:** Identificar melhorias para o perfil/repositório principal

---

## 📁 ESTRUTURA ATUAL DO REPO

```
Deivisan/
├── README.md           ← Perfil principal (15KB)
├── ROADMAP.md          ← Roadmap do DeiviTech Formatação
├── roadmap-mudancas.md ← Histórico de mudanças
├── AGENTS.md          ← Config DevSan
├── index.html          ← Landing page
├── style.css           ← Estilos
├── script.js           ← Scripts
├── automation-scripts/ ← Scripts de automação
├── DeiviTech-Formatacao/ ← Site de formatação
├── FreelancerDeiviTech/  ← Loja digital
└── docs/              ← Documentação
```

---

## ❓ PERGUNTAS PARA O GROK

### BLOCO 1: ESTRUTURA DO README

**1. Otimização do README Principal**

O README.md atual tem 15KB com seções:
- Badge links (LinkedIn, WhatsApp, Portfolio)
- Sobre Mim
- Stack Tecnológica (tabelas)
- Estatísticas GitHub (cards)
- Portfólio de Projetos (7+ projetos)
- Marketplace
- Contatos

**Pergunta:**  
"O README.md do meu perfil tem 15KB e 7 projetos listados. Isso está poluído? Qual estrutura ideal para um perfil GitHub profissional em 2025? O que cortar e o que expandir?"

---

**2. Projetos Duplicados**

O repo contém sub-pastas com projetos que já existem como repositórios separados:
- `DeiviTech-Formatacao/` → Já é repo `DeiviTech-Formatacao`
- `FreelancerDeiviTech/` → Já é repo `FreelancerDeiviTech`

**Pergunta:**  
"Devo manter esses projetos como sub-pastas ou apenas referenciá-los como links? Qual abordagem é mais profissional para o GitHub Profile?"

---

### BLOCO 2: AGENTS.md

**3. Configuração AGI**

O `AGENTS.md` tem configuração DevSan com modos (devsan, devsan-max, devsan-plan).

**Pergunta:**  
"Essa configuração AGENTS.md faz sentido para um repositório de perfil? Como melhorar para que qualquer IA (Claude, Kimi, Grok) entenda rapidamente quem eu sou e o que desenvolvo?"

---

### BLOCO 3: AUTOMAÇÃO

**4. Scripts de Automação**

Pasta `automation-scripts/` contém scripts diversos.

**Pergunta:**  
"Como estruturar uma pasta de automação reutilizável? Que padrão seguir (Bun/TypeScript, Python, Shell)? Como documentar para que eu reuse em outros projetos?"

---

### BLOCO 4: ROADMAP

**5. Roadmap Divergente**

`ROADMAP.md` é sobre "DeiviTech Formatação" (site específico) enquanto `roadmap-mudancas.md` é sobre "mudanças no perfil".

**Pergunta:**  
"Dois arquivos de roadmap diferentes no mesmo repo é confuso. Como consolidar? Criar um único roadmap estruturado por área (Perfil, Projetos, Ferramentas)?"

---

### BLOCO 5: ESTILO E DESIGN

**6. HTML/CSS/JS**

 Existem `index.html`, `style.css`, `script.js` na raíz.

**Pergunta:**  
"Arquivos de frontend na raíz poluem o repo. Devo mover para sub-pasta `/web/` ou `/frontend/`? Ou remover se não são usados?"

---

### BLOCO 6: DOCUMENTAÇÃO

**7. Docs Duplicados**

Pasta `docs/` existe, mas não sei o que contém.

**Pergunta:**  
"Qual a melhor forma de documentar um perfil/repositório pessoal? README.md principal + docs/ para detalhamentos? Wiki do GitHub? mdBook?"

---

### BLOCO 7: INTEGRAÇÃO COM OUTROS REPOS

**8. Relação entre Repos**

Outros repos principais:
- `DevSan` (AGI central)
- `Prompts` (banco de prompts)
- `MCP-HUB` (MCPs)
- `for-grok` (contexto Grok)
- `Metodologia-Scrape` (captura)

**Pergunta:**  
"Como documentar relações entre esses repos? Criar um `ecosystem.md` que mostra como tudo se conecta? Links internos no README?"

---

### BLOCO 8: PRESENÇA ONLINE

**9. Portfólio vs. Perfil**

Há links para:
- `deivisan.github.io/` (portfolio)
- `deivisan.github.io/Curriculo-Deivison/` (currículo)
- `deivisan.github.io/DeiviTech-Formatacao/` (formatação)
- `deivisan.github.io/FreelancerDeiviTech/` (loja)

**Pergunta:**  
"Essa fragmentação (5+ sites) é profissional ou devo consolidar tudo em um único portfolio.gihub.io? Qual a melhor estratégia para 2025?"

---

### BLOCO 9: BRANDING

**10. Identidade Visual**

Badge links usam cores variadas. Não há identidade visual unificada.

**Pergunta:**  
"Criar um "Design System" simples com paleta de cores consistente para todos os badges, shields e links? Como fazer isso de forma mantenível?"

---

### BLOCO 10: AUTOMAÇÃO FUTURA

**11. GitHub Actions**

Não há workflows automatizados.

**Pergunta:**  
"Que GitHub Actions fazem sentido para um perfil pessoal?
- Atualizar estatísticas automaticamente?
- Sincronizar com outros repos?
- Deploy de sub-sites?"

---

## 📊 MATRIZ DE DECISÃO

| Área | Pergunta | Impacto | Esforço |
|------|----------|---------|---------|
| README | #1 | Alto | Médio |
| Sub-pastas | #2 | Médio | Alto |
| AGENTS.md | #3 | Médio | Baixo |
| Automation | #4 | Médio | Médio |
| Roadmap | #5 | Baixo | Baixo |
| Frontend | #6 | Baixo | Baixo |
| Docs | #7 | Baixo | Baixo |
| Ecosystem | #8 | Médio | Baixo |
| Portfolio | #9 | Alto | Alto |
| Branding | #10 | Baixo | Baixo |
| Actions | #11 | Médio | Médio |

---

## 🎯 COMO USAR ESTE QUESTIONÁRIO

### Passo a Passo:

1. **Copie** este arquivo (`questionario-repo-principal.md`)
2. **Cole** no Grok com o `system-prompt.md` do `for-grok`
3. **Peça** para responder 2-3 perguntas por vez
4. **Capture** cada sessão com Metodologia-Scrape
5. **Salve** em `for-grok/conversations/`
6. **Implemente** as melhorias com DevSan

### Prompt Inicial para Grok:

```
Você está conversando com Deivison Santana (@deivisan).

INSTRUÇÕES:
1. Leia o questionário: https://raw.githubusercontent.com/Deivisan/for-grok/main/questionario-repo-principal.md
2. O repo em discussão é: github.com/Deivisan/Deivisan
3. Clone o repo para ver a estrutura real: gh repo clone Deivisan/Deivisan
4. Responda as perguntas #1 e #2 sobre README e projetos duplicados
5. Seja específico, sugira mudanças concretas

Comece clonando e analisando o repo, depois responda #1.
```

---

## 📁 ESTRUTURA DO RESULTADO

```
for-grok/
├── questionario-repo-principal.md  ← Este arquivo
└── conversations/
    ├── 2026-02-05-grok-repo-principal.md
    └── decisions/
        ├── 2026-02-05-repo-estrutura.md
        └── 2026-02-05-repo-automacao.md
```

---

## 🦞 NOTAS DO DEVSAN

**Status:** ⏳ Aguardando conversa com Grok

**Antes de implementar:**
- [ ] Grok responde todas as perguntas
- [ ] Consolidar decisões em `decisions/`
- [ ] Criar scripts de migração se necessário
- [ ] Commitar mudanças
- [ ] Atualizar `questionario-repo-principal.md` com status

**Repo Principal:** `github.com/Deivisan/Deivisan`  
**Repo Contexto:** `github.com/Deivisan/for-grok`
