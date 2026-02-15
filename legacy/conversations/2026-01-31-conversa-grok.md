# Conversa Grok - 31/01/2026

## Decisões Principais

### 1. Skill: youtube-inteligente
**Status:** Aprovado para implementação

**Funcionalidades:**
- Input: Link YouTube + contexto natural (ex: "debate político, extrai argumentos")
- Transcrição: youtube-transcript-api (Python, free) ou Supadata.ai (fallback)
- Download: yt-dlp
- Corte inteligente: ffmpeg com VAAPI (GPU Vega 8)
- Análise LLM: Sumário, pontos chave, fact-check via Tavily/Exa
- Envio: Telegram/WhatsApp com descrições inteligentes por parte
- Limites: WhatsApp 100MB (mídia) ou 2GB (documento), Telegram 2GB

**Sub-skills incluídas:**
- Fact-check automático
- Extração de clips chave
- Geração de descrições com minutagem
- Narrativa na voz do usuário (Qwen TTS - quando funcionar)

### 2. Skill: apk-smart-fetch
**Status:** Aprovado para implementação

**Funcionalidades:**
- Input: Nome do app ou package name
- Busca inteligente em ordem de prioridade:
  1. F-Droid (se FOSS) - via apkeep
  2. GitHub releases (se repo conhecido)
  3. APKPure (fallback geral)
- Compara versões entre fontes
- Download automático
- Verificação de hash
- Envio como documento WhatsApp/Telegram

**Ferramentas:**
- apkeep (Rust CLI) - principal
- gh CLI - GitHub releases
- Playwright - scrape fallback

### 3. Skill: news-supremo (agregador)
**Status:** Aprovado para implementação

**Funcionalidades:**
- Agregação de notícias personalizadas
- Foco: IA, tecnologia, economia (sem futebol, sem sensacionalismo)
- Fontes: RSS (HuggingFace, arXiv, TechCrunch), X, Reddit
- Filtro de viés e fact-check
- Resumos em markdown
- Podcast na voz do usuário (quando Qwen TTS funcionar)
- Atualização diária automática
- Contexto persistente dos gostos do usuário

**Características:**
- Multi-formato: texto, áudio, links
- Inteligente: detecta narrativas tendenciosas
- CLI-first: comandos simples, execução background
- Data sempre atual (verifica data do dia)

## Tecnologias Definidas

### Prioridade de Linguagens
1. **Bun/TypeScript** - Skills principais, orquestração
2. **Rust** - Hashbreach, integridade, checagens críticas
3. **Python** - APIs externas (youtube-transcript, whisper)
4. **Go** - Serviços background (watchers)

### Hardware
- **VAAPI** - Aceleração vídeo ffmpeg na Vega 8
- **Vulkan** - Compute quando necessário (mais estável que ROCm)
- **ROCm** - Experimental, usar apenas se necessário

### Integrações
- **Mem0** - Memória persistente das preferências
- **Tavily/Exa** - Fact-check e busca web
- **OpenCode/OpenClaw** - Execução das skills
- **Telegram/WhatsApp** - Envio de resultados

## Implementação

### Repositórios Afetados
1. **clawd/skills/** - Criar as 3 skills
2. **proximos-passos/for-grok/** - Documentação e capturas
3. **Metodologia-Scrape/** - Já integrado

### Próximos Passos
1. Criar estrutura das skills em Bun
2. Configurar dependências (yt-dlp, apkeep, ffmpeg)
3. Implementar lógica de fallback
4. Testes em hardware real (Vega 8 VAAPI)
5. Integração com hashbreach para integridade

## Notas Técnicas

### ffmpeg VAAPI
```bash
ffmpeg -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 \
  -i input.mp4 -c:v h264_vaapi -b:v 5M output.mp4
```

### apkeep
```bash
# F-Droid
apkeep -d f-droid -a org.fdroid.fdroid

# APKPure
apkeep -a com.whatsapp
```

### youtube-transcript-api
```python
from youtube_transcript_api import YouTubeTranscriptApi
transcript = YouTubeTranscriptApi.get_transcript("video_id")
```

## Referências da Conversa
- Grok leu contextos 01, 02, 03, 04
- Paramos no 04-skills-detail.md
- Próximo: 05-missing-pieces.md (para futuras conversas)

---
**Data:** 31/01/2026
**Participantes:** Deivison Santana, Grok
**Captura:** DevSan (OpenCode)
