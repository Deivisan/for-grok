// scroll-and-extract.js
// Draft for long-session capture (30min → 5h+).
// Strategy: patient repeated scroll + wait + re-extract + dedup until stable.
// This is the missing piece for the full methodology.
// To be used together with grok-share-extractor-generic.js

// === CONFIG (tune these) ===
const SCROLL_STEP = 3;           // how many scroll "ticks" per attempt
const MAX_SCROLLS = 200;         // safety cap (very long sessions)
const WAIT_MS = 1200;            // wait after each scroll batch
const STABLE_PASSES = 3;         // consecutive passes with no new content = done
const MAX_TIME_MS = 30 * 60 * 1000; // 30 minutes max patience per capture

// === HELPERS ===
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function scrollDown(amount = SCROLL_STEP) {
  window.scrollBy(0, amount * 800);
  await sleep(WAIT_MS);
}

function getCurrentConversationText() {
  // Re-use the same cleaning logic as the generic extractor
  const container = document.querySelector('main') || document.body;
  const raw = Array.from(container.querySelectorAll('p, [role="paragraph"]'))
    .map(el => (el.innerText || '').trim())
    .filter(t => t && t.length > 3);

  const uiNoise = (t) => {
    const l = t.toLowerCase();
    return /^copiar$/i.test(t) || /^report$/i.test(t) ||
           /sources$/i.test(l) || /^continuar conversa$/i.test(l) ||
           /upgrade|supergrok/i.test(l) || /^\d+$/.test(t);
  };

  return raw.filter(t => !uiNoise(t)).join('\n\n---PARA---\n\n');
}

// === MAIN CAPTURE LOOP ===
async function captureFullConversation() {
  const startTime = Date.now();
  let lastHash = '';
  let stableCount = 0;
  let allText = '';
  let scrollCount = 0;

  console.log('[BrowserOS Capture] Starting patient full scroll capture...');

  while (scrollCount < MAX_SCROLLS) {
    const elapsed = Date.now() - startTime;
    if (elapsed > MAX_TIME_MS) {
      console.warn('[BrowserOS Capture] Max time reached, stopping.');
      break;
    }

    await scrollDown();

    const current = getCurrentConversationText();
    const hash = current.length + '|' + current.slice(-200); // simple stability hash

    if (hash === lastHash) {
      stableCount++;
      console.log(`[BrowserOS Capture] Stable pass ${stableCount}/${STABLE_PASSES}`);
      if (stableCount >= STABLE_PASSES) {
        console.log('[BrowserOS Capture] Content is stable. Capture complete.');
        allText = current;
        break;
      }
    } else {
      stableCount = 0;
      lastHash = hash;
      allText = current; // keep latest
    }

    scrollCount++;
    if (scrollCount % 10 === 0) {
      console.log(`[BrowserOS Capture] Progress: ${scrollCount} scrolls, ~${Math.round(elapsed/1000)}s elapsed`);
    }
  }

  // Now run the clean speaker-aware extractor on the final DOM state
  // (In real use, you would call the grok-share-extractor-generic.js logic here
  //  or paste its IIFE after this loop returns)

  return {
    success: true,
    totalScrolls: scrollCount,
    timeMs: Date.now() - startTime,
    finalLength: allText.length,
    // In practice, replace the next line with the full cleanMarkdown from the extractor
    rawConcatenated: allText
  };
}

// To run from BrowserOS:
// browseros_evaluate_script({ page: XXX, expression: "the whole content of this file" })
// Then await the promise if needed, or wrap in an async IIFE.

console.log('scroll-and-extract.js loaded. Call captureFullConversation() to start.');
