// grok-share-extractor-generic.js
// Improved generic version (v4) - less hard-coded, better for future conversations.
// Use this as the base for the reusable skill.

(() => {
  const container = document.querySelector('main') || document.body;

  // Get all paragraph-like text in reading order
  const rawParas = Array.from(container.querySelectorAll('p, [role="paragraph"]'))
    .map(el => (el.innerText || '').trim())
    .filter(t => t && t.length > 3);

  // UI noise filter (language-agnostic where possible)
  const isUINoise = (t) => {
    const lower = t.toLowerCase();
    return (
      /^copiar$/i.test(t) ||
      /^report$/i.test(t) ||
      /sources$/i.test(lower) ||
      /^continuar conversa$/i.test(lower) ||
      /upgrade|supergrok/i.test(lower) ||
      /^\d+$/.test(t) ||                    // lone counters
      /^[\s\u00A0]*$/.test(t)               // whitespace only
    );
  };

  const cleanParas = rawParas.filter(t => !isUINoise(t));

  // Generic speaker detection heuristics (works across many Grok convos)
  // Grok tends to start with direct, analytical, or confirmatory language
  const looksLikeGrok = (t) => {
    const lower = t.toLowerCase();
    return (
      /^(e aí|entendi|ok|resumindo|acabei de|pronto|sem problema|tá bom|isso já|entendi perfeitamente|resumo direto)/i.test(t) ||
      /^(sim|não|então|basicamente|resumindo o que)/i.test(t) ||
      lower.includes('vou ser direto') ||
      lower.includes('entendi o contexto') ||
      lower.includes('peguei o contexto') ||
      lower.includes('vou te ajudar') ||
      /^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ].*?\.\s+[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ]/.test(t) && t.length > 80 // long explanatory sentences
    );
  };

  // User messages often start with questions, personal statements, or instructions
  const looksLikeUser = (t) => {
    return (
      /^[¿?¡!]?[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇa-z]/.test(t) && (t.includes('?') || t.length < 120) ||
      /^(quero|não quero|me fale|me diga|vou|eu tenho|eu sou|basicamente|ah|é|tá)/i.test(t) ||
      t.startsWith(' ') || t.startsWith('\u00A0') // common in pasted user turns
    );
  };

  let turns = [];
  let current = { speaker: null, parts: [] };

  cleanParas.forEach((text, idx) => {
    let speaker = null;

    if (looksLikeGrok(text)) speaker = 'Grok';
    else if (looksLikeUser(text)) speaker = 'Usuário';

    // Fallback / continuation logic
    if (!speaker) {
      if (current.speaker) {
        speaker = current.speaker;
      } else {
        // First message bias: Grok usually speaks first in shares
        speaker = (idx === 0) ? 'Grok' : 'Usuário';
      }
    }

    // Force alternation if we see strong signals of change
    const strongGrok = looksLikeGrok(text);
    const strongUser = looksLikeUser(text);
    if (strongGrok && current.speaker === 'Usuário') speaker = 'Grok';
    if (strongUser && current.speaker === 'Grok') speaker = 'Usuário';

    if (speaker !== current.speaker && current.parts.length > 0) {
      turns.push({
        speaker: current.speaker,
        text: current.parts.join('\n\n')
      });
      current = { speaker, parts: [text] };
    } else {
      current.speaker = speaker;
      current.parts.push(text);
    }
  });

  if (current.parts.length > 0) {
    turns.push({ speaker: current.speaker, text: current.parts.join('\n\n') });
  }

  // Assemble the canonical clean Markdown
  const now = new Date().toISOString().slice(0, 10);
  let md = `# Grok Share Conversation\n\n`;
  md += `**URL:** ${location.href}\n`;
  md += `**Captured:** ${now} via BrowserOS (for-grok training)\n`;
  md += `**Total turns:** ${turns.length}\n\n---\n\n`;

  turns.forEach((turn, i) => {
    md += `## Turn ${i + 1} - ${turn.speaker}\n\n${turn.text}\n\n---\n\n`;
  });

  md += `*End of capture. Clean text only. Speaker alternation: Usuário / Grok.*\n`;

  return {
    success: true,
    totalTurns: turns.length,
    turns,
    cleanMarkdown: md,
    rawLength: container.innerText.length,
    url: location.href,
    extractorVersion: 'v4-generic'
  };
})();
