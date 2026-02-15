# 03 - TÉCNICO

## 🔧 Aspectos Técnicos dos Serviços

Detalhes profundos sobre sistemas, hardware e processos de formatação.

---

## 💿 Sistemas Operacionais

### Windows 10

**Versões Oferecidas:**
- **Home:** Usuários domésticos, básico
- **Pro:** Profissionais, recursos avançados (Remote Desktop, BitLocker)
- **Enterprise:** Corporativo (não necessário para maioria dos clientes)

**Build Atual:** 22H2 (19045) - Mais estável e atualizada

**Requisitos Mínimos:**
- Processador: 1 GHz ou mais rápido
- RAM: 2GB (4GB recomendado)
- Espaço: 20GB livre
- Placa de vídeo: DirectX 9 ou posterior

**Vantagens:**
- Interface familiar (usuários conhecem)
- Compatibilidade 100% com softwares corporativos
- Suporte estendido até outubro 2025
- Mais leve que Windows 11
- Funciona em hardware antigo (2010+)

**Desvantagens:**
- Fim do suporte em 2025 (depois precisa migrar)
- Sem novas features de segurança do Win 11

**Público-Alvo:** PCs de 2010-2020, usuários que querem estabilidade

---

### Windows 11

**Versões Oferecidas:**
- Home, Pro, Enterprise

**Build Atual:** 23H2 (22631) - Última versão estável

**Requisitos Mínimos (Estritos):**
- Processador: 8ª geração Intel ou Ryzen 2000+ ( oficialmente)
- TPM 2.0: Chip de segurança obrigatório
- Secure Boot: UEFI com Secure Boot habilitado
- RAM: 4GB (8GB recomendado)
- Espaço: 64GB livre

**Vantagens:**
- Interface moderna e bonita
- Melhor desempenho em jogos (DirectStorage, Auto HDR)
- Snap Layouts (organização de janelas)
- Melhor segurança (TPM obrigatório)
- Suporte longo (até 2031)

**Desvantagens:**
- Requisitos de hardware restritivos
- Interface mudada (curva de aprendizado)
- Alguns PCs antigos não são compatíveis
- Mais pesado que Windows 10

**Público-Alvo:** PCs novos (2020+), gamers, entusiastas

**Bypass de Requisitos:**
- É possível instalar em hardware "incompatível"
- Editar registro durante instalação
- Avisar cliente: "Sem garantia de updates futuros"

---

### Ghost Spectre (Versões Modificadas)

**O que é:** Windows "desbloated" - removido bloatware da Microsoft

**Versões Disponíveis:**
- **Superlite:** Mínimo possível, para PCs muito antigos
- **Compact:** Balanceado entre leveza e funcionalidade
- **Gaming:** Otimizado para jogos

**O que é removido:**
- Cortana (assistente virtual)
- OneDrive (cloud)
- Microsoft Store (pode ser reinstalado se precisar)
- Apps pré-instalados (Xbox, Solitaire, etc)
- Telemetria (coleta de dados)
- Windows Defender (substituído por alternativa leve)

**Vantagens:**
- +30-40% performance em PCs antigos
- Boot mais rápido (10-15 segundos)
- Menos processos em background
- Mais privacidade (sem telemetria)
- Ideal para PCs com 2-4GB RAM

**Desvantagens:**
- Não é "oficial" Microsoft
- Alguns recursos podem não funcionar
- Updates podem ser problemáticos
- Não recomendado para empresas (compliance)

**Preço:** R$ 50-100 (justificado pelo trabalho de otimização)

**Público-Alvo:** PCs antigos, gamers, usuários avançados, quem quer performance máxima

---

### Linux

**Distribuições Oferecidas:**

**1. Ubuntu (Recomendado para Iniciantes)**
- Interface similar ao Windows
- Grande comunidade de suporte
- Software center fácil de usar
- LTS (Long Term Support) - 5 anos de updates
- **Ideal para:** Primeira experiência com Linux

**2. Linux Mint (Alternativa ao Ubuntu)**
- Ainda mais parecido com Windows
- Leve e rápido
- Menu iniciar tradicional
- **Ideal para:** PCs antigos, usuários que querem simplicidade

**3. Arch Linux (Avançado)**
- Instalação manual (para experts)
- Sistema rolling release (sempre atualizado)
- Minimalista (instala só o necessário)
- **Ideal para:** Programadores, entusiastas, quem quer controle total
- **Nota:** Deivison usa Arch pessoalmente (expertise real)

**4. Pop!_OS (Para Profissionais)**
- Baseado em Ubuntu
- Otimizado para produtividade
- Suporte NVIDIA nativo
- **Ideal para:** Desenvolvedores, designers, engenheiros

**Vantagens do Linux:**
- 100% gratuito (sem licença)
- Livre de vírus (quase não existem)
- Leve (roda em PCs antigos)
- Customizável
- Excelente para programação
- Privacidade (código aberto)

**Desvantagens:**
- Curva de aprendizado
- Alguns programas Windows não rodam (Office, Photoshop, jogos)
- Driver de algumas placas WiFi pode ser problemático
- Suporte técnico limitado (menos técnicos conhecem)

**Serviço:** Instalação GRATUITA (só cobra se quiser dual boot com Windows)

**Público-Alvo:** Estudantes de TI, orçamento limitado, PCs muito antigos, programadores

---

### Dual Boot (Windows + Linux)

**Como funciona:**
- Ambos os sistemas instalados no mesmo HD/SSD
- No boot, usuário escolhe qual usar
- Cada sistema tem sua partição separada
- Arquivos podem ser compartilhados entre eles

**Vantagens:**
- Melhor dos dois mundos
- Windows para jogos/programas específicos
- Linux para trabalho/navegação segura
- Aprendizado gradual

**Desvantagens:**
- Complexidade maior
- Risco de corromper bootloader
- Espaço em disco dividido
- Updates de um podem afetar o outro

**Preço:** R$ 50 (adicional à formatação principal)

---

## 🖥️ Hardware

### SSD vs HD

| Característica | HD (Mecânico) | SSD (Estado Sólido) |
|---------------|---------------|---------------------|
| **Velocidade** | 80-160 MB/s | 500-550 MB/s (SATA) |
| **Boot Windows** | 1-2 minutos | 10-15 segundos |
| **Abrir Chrome** | 10-15 segundos | 1-2 segundos |
| **Durabilidade** | 3-5 anos | 5-10 anos |
| **Consumo** | 6-7W | 2-3W |
| **Ruído** | Ruidoso (disco girando) | Silencioso |
| **Preço 500GB** | R$ 60 | R$ 120-180 |

**Impacto Real:**
- Upgrade de HD para SSD = PC "novo" na percepção do usuário
- Maior upgrade de performance possível
- Recomendar SEMPRE que orçamento permitir

---

### Memória RAM

**Gerações:**

**DDR3 (Antiga, 2010-2015)**
- Velocidade: 1066-2133 MHz
- Preço: Mais barato
- **Limite:** Máximo 16GB na maioria das placas
- **Ainda vale a pena?** Sim, se o PC só aceita DDR3

**DDR4 (Atual, 2015-2023)**
- Velocidade: 2133-3200 MHz
- Preço: Médio
- **Limite:** Até 64GB-128GB
- **Padrão atual:** Maioria dos PCs

**DDR5 (Nova, 2021+)**
- Velocidade: 4800-6400 MHz
- Preço: Caro
- **Limite:** Até 128GB+
- **Aplicação:** PCs novos (12ª gen Intel, Ryzen 6000+)

**Quanto RAM é necessário?**

| Uso | Mínimo | Recomendado | Confortável |
|-----|--------|-------------|-------------|
| Navegação básica | 4GB | 8GB | 8GB |
| Office + internet | 4GB | 8GB | 16GB |
| Multitarefa | 8GB | 16GB | 16-32GB |
| Gaming | 8GB | 16GB | 16-32GB |
| Edição vídeo | 16GB | 32GB | 32-64GB |

**Regra prática:**
- Windows 10/11 roda bem com 8GB
- 4GB é o mínimo aceitável (lento)
- 16GB é ideal para maioria dos usuários

---

### Processadores (CPU)

**Intel vs AMD:**

**Intel (i3, i5, i7, i9)**
- i3: Básico (navegação, office)
- i5: Intermediário (multitarefa, gaming)
- i7: Avançado (edição, gaming)
- i9: Entusiasta (profissional)

**AMD Ryzen (3, 5, 7, 9)**
- Similar ao Intel
- Geralmente melhor custo-benefício
- Ryzen 5 = i5 (mais ou menos)

**Gerações:**
- Intel: 8ª gen (2017) a 14ª gen (2023)
- AMD: Ryzen 1000 (2017) a 7000 (2023)

**Como identificar:**
- i5-8400 = 8ª geração
- Ryzen 5 3600 = 3ª geração (3000 series)

**Upgrade possível?**
- Depende do socket da placa-mãe
- Geralmente só pode trocar por CPU da mesma geração
- Muitas vezes não vale a pena (trocar placa-mãe também)

---

## ⚡ Processos de Formatação

### Etapas Técnicas

**1. Preparação**
- Backup de dados (se solicitado)
- Verificar integridade do HD/SSD (CrystalDiskInfo)
- Baixar ISO do sistema
- Criar pendrive bootável (Rufus)

**2. Instalação**
- Boot pelo pendrive
- Particionamento do disco
  - UEFI (moderno): GPT partition scheme
  - Legacy (antigo): MBR
- Instalação do sistema
- Configuração inicial (idioma, região, conta)

**3. Pós-Instalação**
- Instalação de drivers
  - Windows Update (básicos)
  - Site do fabricante (específicos)
  - Driver Booster (complementares)
- Windows Update completo
- Ativação do Windows

**4. Instalação de Programas**
- Navegador (Chrome)
- Player (VLC)
- Compactador (7-Zip)
- Leitor PDF
- Office (LibreOffice ou ativação do cliente)
- Outros conforme necessidade

**5. Otimização**
- Desativar programas de inicialização desnecessários
- Configurar plano de energia (alta performance)
- Ajustes de privacidade
- Desativar telemetria (se Ghost Spectre)
- Limpeza de arquivos temporários

**6. Testes**
- Boot funciona?
- Drivers instalados (sem "?" no gerenciador)?
- Internet conecta?
- Som funciona?
- Programas abrem?

---

## 🛡️ Problemas Comuns e Soluções

### "Meu PC está lento"

**Causas prováveis:**
1. HD mecânico ruim (lento, setores defeituosos)
2. Pouca RAM (4GB ou menos)
3. Muitos programas iniciando com Windows
4. Vírus ou malware
5. Windows desatualizado/corrompido

**Diagnóstico:**
- CrystalDiskInfo (saúde do HD/SSD)
- Task Manager (uso de RAM e CPU)
- Análise de inicialização (msconfig)
- Antivírus (Malwarebytes)

**Soluções:**
- Upgrade SSD (maior impacto)
- Upgrade RAM
- Formatação limpa
- Remoção de vírus

---

### "Tela azul" (BSOD)

**Causas:**
- Drivers incompatíveis
- Hardware defeituoso (RAM, HD)
- Overclock instável
- Windows corrompido

**Soluções:**
- Modo seguro, desinstalar driver problemático
- Teste de memória (MemTest86)
- Verificar HD (chkdsk)
- Reset do overclock
- Formatação (se persistir)

---

### "Não liga"

**Diagnóstico:**
- Fonte queimada?
- Cabo de energia solto?
- Placa-mãe defeituosa?
- Botão power quebrado?

**Testes:**
- Testar fonte (papel clip test)
- Reset CMOS (bateria da placa-mãe)
- Testar com outra fonte
- Verificar LEDs na placa-mãe

---

## 📖 Próximo Contexto

Leia **04-estrategia.md** para estratégias de crescimento do negócio.

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/03-tecnico.md
