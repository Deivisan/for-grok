# 04 - STACK TECNOLÓGICO

## 🖥️ Infraestrutura Completa

Hardware e software que sustentam ambas as faces (pessoal e profissional).

---

## 🏗️ Hardware Físico

### CPU
- **Modelo:** AMD Ryzen 7 5700G with Radeon Graphics
- **Cores:** 8 físicos, 16 threads
- **Clock:** Até 4.67 GHz
- **Governor:** performance (otimizado)
- **Arquitetura:** Zen 3 (Cezanne)
- **Capacidade:** Spawnar até 8 agentes em parallel

### RAM
- **Total:** 14 GB DDR4
- **Disponível:** ~6 GB (9GB em uso com caching)
- **Swap:** 11 GB
- **Status:** Sob pressão

### GPUs (DUAS)

#### GPU 0: Radeon RX 550/550X (Dedicada)
- **Chip:** Lexa PRO (Polaris 11)
- **VRAM:** 2-4 GB GDDR5
- **Uso potencial:** Compute, encoding, mining
- **ROCm:** Não suportada em versões novas
- **Status:** Subutilizada

#### GPU 1: Radeon Vega (Integrada)
- **Chip:** Cezanne (Ryzen 5700G)
- **VRAM:** Compartilhada (até 2GB)
- **Uso:** Display, compute leve
- **ROCm:** Suporte parcial
- **Status:** Display principal

### Storage
- **Tipo:** SSD NVMe
- **Performance:** Alta (kernel Zen otimizado)
- **Filesystem:** ext4/btrfs
- **Espaço livre:** ~170GB

### Rede
- **WiFi:** Realtek RTL8852AE WiFi 6 (802.11ax)
- **Driver:** rtw89_8852ae
- **Rede:** UFRB (Universidade Federal do Recôncavo da Bahia)
- **IP:** 172.17.23.130/16

---

## 💻 Sistema Operacional

### Arch Linux
- **Kernel:** 6.18.7-zen1-1-zen (ZEN PREEMPT_DYNAMIC)
- **Tipo:** Rolling release (sempre atualizado)
- **Desktop:** COSMIC (System76, preview)
- **Shell:** Zsh 5.9 + Starship 1.24.2
- **Display:** Wayland

### Runtimes
| Runtime | Versão | Uso Principal |
|---------|--------|---------------|
| **Bun** | 1.3.8 | JS/TS principal (runtime único) |
| **Python** | 3.14.2 | IA/ML, scripts, automação |
| **Rust** | 1.93.0 | Performance, sistemas, CLI tools |
| **Go** | 1.25.6 | APIs, DevOps, concorrência |

> ⚠️ **IMPORTANTE:** Node.js foi PURGADO. Usar SEMPRE Bun.

---

## 🛠️ Ferramentas CLI Modernas

### Core Tools (Substitutos)
| Comando Original | Tool Moderno | Descrição |
|-----------------|--------------|-----------|
| `ls` | `eza` 0.23.4 | Listagem com ícones e cores |
| `cat` | `bat` 0.26.1 | Syntax highlighting |
| `find` | `fd` 10.3.0 | Busca rápida e intuitiva |
| `grep` | `rg` (ripgrep) 15.1.0 | Grep ultra-veloz |
| - | `fzf` 0.67.0 | Fuzzy finder interativo |
| `diff` | `delta` 0.18.2 | Git diffs bonitos |

### Navegação
- **zoxide** - `cd` inteligente com aprendizado
- **tmux** - Multiplexing de terminal

### Monitoramento
- **btop** - Monitor de recursos moderno
- **dust** - Análise de uso de disco

---

## 🤖 Frameworks de Agentes (Trio)

### 1. OpenClaw (Principal)
- **Versão:** 2026.2.6
- **Gateway:** localhost:18789
- **Workspace:** ~/Projetos/devsan-clawd
- **Skills:** 58 disponíveis
- **Canais:** Telegram (@DevSanBot)

### 2. Kilo Code (Rápido)
- **Modelo:** z-ai/glm-4.7:free
- **MCPs:** 10 ativos
- **Uso:** Queries rápidas, parallelismo

### 3. OpenCode (Backup + Editor)
- **Versão:** 1.1.36+
- **Editor:** TUI avançado
- **MCPs:** 10 ativos
- **Uso:** Code editing, debugging

---

## 🔌 MCPs Unificados (10 servidores)

| MCP | Função | Status |
|-----|--------|--------|
| **mem0** | Memória persistente (graph + semântica) | ✅ |
| **tavily** | Busca web inteligente | ✅ |
| **context7** | Documentação de bibliotecas | ✅ |
| **exa** | Busca semântica AI | ✅ |
| **github** | Git operations | ✅ |
| **yt-dlp** | Download vídeo/áudio | ✅ |
| **playwright** | Browser automation | ✅ |
| **chrome-devtools** | Debug e performance | ✅ |
| **docker** | Containers | ✅ |
| **grok-scraper** | Scrape conversas Grok | ✅ |

---

## 🌐 GPU Compute Status

### ROCm (AMD CUDA alternative)
- **Status:** Instalado mas não funcional
- **Problema:** RX 550 não suportada em ROCm 5.0+
- **Erro:** `HSA_STATUS_ERROR` na inicialização

### Alternativas a Explorar
- **ZLUDA** - CUDA→ROCm translation layer
- **DirectML** - Via ONNX Runtime
- **OpenCL** - Para tarefas legadas
- **VAAPI** - Video encoding/decoding

### Uso Atual
❌ **Não está sendo usado para:**
- LLMs locais (prefere nuvem)
- Machine learning training
- Inference local

💡 **Potencial para:**
- Video transcoding (ffmpeg + VAAPI)
- Processamento de imagem em batch
- Renderização 3D (Blender)
- Mining (se valer a pena)

---

## 📊 Limitações e Oportunidades

### Restrições Atuais
- RAM limitada (14GB total, 6GB livre)
- GPUs AMD sem CUDA (ecossistema menor)
- RX 550 entry-level (poder limitado)
- Sem NVIDIA (ecossistema ML mais maduro)

### Oportunidades
- **Video encoding:** ffmpeg + VAAPI para transcodificar
- **Batch processing:** OpenCL para tarefas paralelas
- **Desenvolvimento local:** GPUs livres para testes

---

## 📖 Próximo Passo

Leia **05-capacidades-agregadas.md** para ver o que as duas faces fazem juntas.

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/04-stack-tecnologico.md
