// Copy of the canonical capture script as of 2026-06-15
// This is the exact version validated on the definitive link and promoted in for-grok.
// When adapting to Metodologia-Scrape, you can start from this file.

(() => {
  const CONFIG = {
    scrollStep: 3,
    maxScrolls: 300,
    waitAfterScrollMs: 1400,
    stablePassesRequired: 4,
    maxTotalTimeMs: 45 * 60 * 1000,
    logEveryNScrolls: 15
  };

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function scrollDown(steps = CONFIG.scrollStep) {
    window.scrollBy(0, steps * 900);
    await sleep(CONFIG.waitAfterScrollMs);
  }

  function getAllVisibleParagraphs() {
    const container = document.querySelector('main') || document.body;
    return Array.from(container.querySelectorAll('p, [role="paragraph"]'))
      .map(el => (el.innerText || '').trim())
      .filter(t => t && t.length > 3);
  }

  function isUINoise(text) {
    const l = text.toLowerCase();
    return (
      /^copiar$/i.test(text) || /^report$/i.test(text) ||
      /sources$/i.test(l) || /^continuar conversa$/i.test(l) ||
      /upgrade|supergrok/i.test(l) || /^\d+$/.test(text) ||
      /^[\s\u00A0]*$/.test(text)
    );
  }

  function looksLikeGrok(text) {
    const lower = text.toLowerCase();
    return (
      /^(e aí|entendi|ok, esse|resumindo|acabei de|pronto pra|sem problema|tá bom|isso já|entendi perfeitamente|resumo direto)/i.test(text) ||
      /^(sim|não|então|basicamente|resumindo o que)/i.test(text) ||
      lower.includes('vou ser direto') || lower.includes('entendi o contexto') ||
      lower.includes('peguei o contexto') || lower.includes('vou te ajudar') ||
      /^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ].*?\.\s+[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]/.test(text) && text.length > 70
    );
  }

  function looksLikeUser(text) {
    return (
      /^[¿?¡!]?[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇa-z]/.test(text) && (text.includes('?') || text.length < 140) ||
      /^(quero|não quero|me fale|me diga|vou|eu tenho|eu sou|basicamente|ah|é|tá)/i.test(text) ||
      text.startsWith(' ') || text.startsWith('\u00A0')
    );
  }

  function buildCleanMarkdown(turns, url) {
    const date = new Date().toISOString().slice(0, 10);
    let md = `# Grok Share Conversation\n\n`;
    md += `**URL:** ${url}\n`;
    md += `**Captured:** ${date} via BrowserOS (for-grok training)\n`;
    md += `**Total turns:** ${turns.length}\n\n---\n\n`;
    turns.forEach((turn, i) => {
      md += `## Turn ${i + 1} - ${turn.speaker}\n\n${turn.text}\n\n---\n\n`;
    });
    md += `*End of capture. Clean text only. Usuário / Grok alternation enforced.*\n`;
    return md;
  }

  async function runFullCapture() {
    const startTime = Date.now();
    let lastContentHash = '';
    let stableCount = 0;
    let scrollCount = 0;
    let lastParagraphCount = 0;

    console.log('[BrowserOS Grok Capture] Starting full patient capture...');

    while (scrollCount < CONFIG.maxScrolls) {
      const elapsed = Date.now() - startTime;
      if (elapsed > CONFIG.maxTotalTimeMs) { console.warn('[BrowserOS Grok Capture] Max time reached.'); break; }

      await scrollDown();

      const currentParas = getAllVisibleParagraphs().filter(t => !isUINoise(t));
      const contentHash = currentParas.length + '|' + (currentParas.slice(-3).join('|').slice(-300));

      if (contentHash === lastContentHash && currentParas.length === lastParagraphCount) {
        stableCount++;
        if (stableCount >= CONFIG.stablePassesRequired) { console.log('[BrowserOS Grok Capture] Stabilized.'); break; }
      } else {
        stableCount = 0;
        lastContentHash = contentHash;
        lastParagraphCount = currentParas.length;
      }
      scrollCount++;
    }

    const finalParas = getAllVisibleParagraphs().filter(t => !isUINoise(t));
    let turns = [];
    let current = { speaker: null, parts: [] };

    finalParas.forEach((text, idx) => {
      let speaker = null;
      if (looksLikeGrok(text)) speaker = 'Grok';
      else if (looksLikeUser(text)) speaker = 'Usuário';
      if (!speaker) speaker = current.speaker || (idx === 0 ? 'Grok' : 'Usuário');
      if (looksLikeGrok(text) && current.speaker === 'Usuário') speaker = 'Grok';
      if (looksLikeUser(text) && current.speaker === 'Grok') speaker = 'Usuário';

      if (speaker !== current.speaker && current.parts.length > 0) {
        turns.push({ speaker: current.speaker, text: current.parts.join('\n\n') });
        current = { speaker, parts: [text] };
      } else {
        current.speaker = speaker;
        current.parts.push(text);
      }
    });
    if (current.parts.length > 0) turns.push({ speaker: current.speaker, text: current.parts.join('\n\n') });

    const cleanMarkdown = buildCleanMarkdown(turns, location.href);

    return {
      success: true,
      extractorVersion: 'full-capture-v1 (canonical 2026-06-15)',
      url: location.href,
      totalTurns: turns.length,
      totalScrolls: scrollCount,
      timeMs: Date.now() - startTime,
      turns,
      cleanMarkdown
    };
  }

  return runFullCapture();
})();
