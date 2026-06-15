// grok-share-capture.js
// Canonical production version (promoted from training/browseros-scrape/full-grok-share-capture.js)
// Date promoted: 2026-06-15 after successful validation on the definitive link.
//
// This is the script that currently solves the problem reliably.
// Use it agentically via browseros_evaluate_script on any Grok share page.

(() => {
  // ==================== CONFIG ====================
  const CONFIG = {
    scrollStep: 3,                    // scroll "ticks" per batch
    maxScrolls: 300,                  // hard safety cap
    waitAfterScrollMs: 1400,          // patience between scrolls
    stablePassesRequired: 4,          // consecutive no-growth passes = done
    maxTotalTimeMs: 45 * 60 * 1000,   // 45 minutes max (completeness > speed)
    logEveryNScrolls: 15
  };

  // ==================== HELPERS ====================
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
      /^copiar$/i.test(text) ||
      /^report$/i.test(text) ||
      /sources$/i.test(l) ||
      /^continuar conversa$/i.test(l) ||
      /upgrade|supergrok/i.test(l) ||
      /^\d+$/.test(text) ||
      /^[\s\u00A0]*$/.test(text)
    );
  }

  // Speaker detection (generic + strong alternation correction)
  function looksLikeGrok(text) {
    const lower = text.toLowerCase();
    return (
      /^(e aí|entendi|ok, esse|resumindo|acabei de|pronto pra|sem problema|tá bom|isso já|entendi perfeitamente|resumo direto)/i.test(text) ||
      /^(sim|não|então|basicamente|resumindo o que)/i.test(text) ||
      lower.includes('vou ser direto') ||
      lower.includes('entendi o contexto') ||
      lower.includes('peguei o contexto') ||
      lower.includes('vou te ajudar') ||
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

  // ==================== MAIN LOGIC ====================
  async function runFullCapture() {
    const startTime = Date.now();
    let lastContentHash = '';
    let stableCount = 0;
    let scrollCount = 0;
    let lastParagraphCount = 0;

    console.log('[BrowserOS Grok Capture] Starting full patient capture...');

    // Phase 1: Scroll until stable
    while (scrollCount < CONFIG.maxScrolls) {
      const elapsed = Date.now() - startTime;
      if (elapsed > CONFIG.maxTotalTimeMs) {
        console.warn('[BrowserOS Grok Capture] Max time reached. Stopping scroll.');
        break;
      }

      await scrollDown();

      const currentParas = getAllVisibleParagraphs().filter(t => !isUINoise(t));
      const contentHash = currentParas.length + '|' + (currentParas.slice(-3).join('|').slice(-300));

      if (contentHash === lastContentHash && currentParas.length === lastParagraphCount) {
        stableCount++;
        if (stableCount % 2 === 0) {
          console.log(`[BrowserOS Grok Capture] Stable ${stableCount}/${CONFIG.stablePassesRequired}`);
        }
        if (stableCount >= CONFIG.stablePassesRequired) {
          console.log('[BrowserOS Grok Capture] Content stabilized. Scroll phase complete.');
          break;
        }
      } else {
        stableCount = 0;
        lastContentHash = contentHash;
        lastParagraphCount = currentParas.length;
      }

      scrollCount++;
      if (scrollCount % CONFIG.logEveryNScrolls === 0) {
        console.log(`[BrowserOS Grok Capture] ${scrollCount} scrolls, ${currentParas.length} paras, ${Math.round(elapsed/1000)}s`);
      }
    }

    // Phase 2: Clean extraction + speaker detection on final DOM
    const finalParas = getAllVisibleParagraphs().filter(t => !isUINoise(t));

    let turns = [];
    let current = { speaker: null, parts: [] };

    finalParas.forEach((text, idx) => {
      let speaker = null;

      if (looksLikeGrok(text)) speaker = 'Grok';
      else if (looksLikeUser(text)) speaker = 'Usuário';

      if (!speaker) {
        speaker = current.speaker || (idx === 0 ? 'Grok' : 'Usuário');
      }

      // Strong correction for alternation
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

    if (current.parts.length > 0) {
      turns.push({ speaker: current.speaker, text: current.parts.join('\n\n') });
    }

    const cleanMarkdown = buildCleanMarkdown(turns, location.href);

    const result = {
      success: true,
      extractorVersion: 'full-capture-v1 (canonical 2026-06-15)',
      url: location.href,
      totalTurns: turns.length,
      totalScrolls: scrollCount,
      timeMs: Date.now() - startTime,
      finalParagraphCount: finalParas.length,
      turns,
      cleanMarkdown,
      diagnostics: {
        stablePassesAchieved: stableCount,
        maxTimeHit: (Date.now() - startTime) >= CONFIG.maxTotalTimeMs,
        scrollLimitHit: scrollCount >= CONFIG.maxScrolls
      }
    };

    console.log('[BrowserOS Grok Capture] Capture finished.', {
      turns: result.totalTurns,
      scrolls: result.totalScrolls,
      seconds: Math.round(result.timeMs / 1000)
    });

    return result;
  }

  // Auto-execute when pasted into evaluate_script
  return runFullCapture();
})();
