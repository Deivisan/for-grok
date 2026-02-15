# 03 - HARDWARE

## Infraestrutura Física

### CPU
- **Modelo:** AMD Ryzen 7 5700G with Radeon Graphics
- **Cores:** 8 físicos, 16 threads
- **Clock:** Até 4.67 GHz
- **Governor:** performance (otimizado)
- **Arquitetura:** Zen 3 (Cezanne)

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

#### GPU 1: Radeon Vega (Integrada)
- **Chip:** Cezanne (Ryzen 5700G)
- **VRAM:** Compartilhada (até 2GB)
- **Uso:** Display, compute leve
- **ROCm:** Suporte parcial

### Storage
- **Tipo:** SSD NVMe
- **Performance:** Alta (kernel Zen otimizado)
- **Filesystem:** ext4/btrfs

### Rede
- **WiFi:** Realtek RTL8852AE WiFi 6 (802.11ax)
- **Driver:** rtw89_8852ae
- **Rede:** UFRB (Universidade Federal do Recôncavo da Bahia)
- **IP:** 172.17.23.130/16

## Sistema Operacional

### Arch Linux
- **Kernel:** 6.18.7-zen1-1-zen (ZEN PREEMPT_DYNAMIC)
- **Tipo:** Rolling release
- **Desktop:** COSMIC (System76, preview)
- **Shell:** Zsh 5.9 + Starship 1.24.2

### Runtimes
- **Bun:** 1.3.8 (JS/TS principal)
- **Python:** 3.14.2 (IA/ML)
- **Rust:** 1.93.0 (performance)
- **Go:** 1.25.6 (APIs, DevOps)

### CLI Tools
- eza 0.23.4 (ls moderno)
- bat 0.26.1 (cat com syntax)
- fd 10.3.0 (find moderno)
- ripgrep 15.1.0 (grep rápido)
- fzf 0.67.0 (fuzzy finder)
- delta 0.18.2 (git diffs)

## GPU Compute Status

### ROCm (AMD CUDA alternative)
- **Status:** Instalado mas não funcional
- **Problema:** RX 550 não suportada em ROCm 5.0+
- **Erro:** `HSA_STATUS_ERROR` na inicialização

### Alternativas a explorar
- **ZLUDA** - CUDA→ROCm translation layer
- **DirectML** - Via ONNX Runtime
- **OpenCL** - Para tarefas legadas
- **VAAPI** - Video encoding/decoding

## Uso Atual das GPUs

❌ **Não está sendo usado para:**
- LLMs locais (ele prefere nuvem)
- Machine learning training
- Inference local

💡 **Potencial para:**
- Video transcoding (ffmpeg + VAAPI)
- Processamento de imagem (batch)
- Mining (se valer a pena)
- Renderização 3D (Blender)

## Restrições

- RAM limitada (14GB total, 6GB livre)
- GPUs AMD não têm CUDA (ecossistema menor)
- RX 550 é entry-level (poder limitado)
- Sem NVIDIA (ecossistema ML mais maduro)

## Próximo passo

Leia 04-skills-detail.md para ver cada skill em detalhe.

---
**URL:** https://raw.githubusercontent.com/Deivisan/for-grok/main/context/03-hardware.md
