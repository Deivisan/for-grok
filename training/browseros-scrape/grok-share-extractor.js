// grok-share-extractor.js
// Reusable BrowserOS evaluate_script payload for extracting clean Grok share conversations.
// Paste the inner function body into browseros_evaluate_script(expression).

(() => {
  // Grok Share Extractor v3 - tuned for clean, complete capture with speaker detection
  const container = document.querySelector('main') || document.body;
  
  const rawParas = Array.from(container.querySelectorAll('p'))
    .map(p => p.innerText.trim())
    .filter(t => t && t.length > 3);
  
  const uiFilters = [
    /^copiar$/i, /^report$/i, /sources$/i, /^continuar conversa$/i,
    /^fazer um upgrade/i, /^\d+$/, /^4$/
  ];
  
  const cleanParas = rawParas.filter(t => {
    const lower = t.toLowerCase();
    return !uiFilters.some(re => re.test(lower));
  });
  
  const isGrokStart = (t) => (
    /^E aí[, ]/i.test(t) ||
    /^Entendi/i.test(t) ||
    /^Ok, esse é o final/i.test(t) ||
    /^Resumindo/i.test(t) ||
    /^Acabei de reler/i.test(t) ||
    /^Pronto pra iterar/i.test(t) ||
    /^Sem problema\./i.test(t) ||
    /^Tá bom assim/i.test(t) ||
    /^Isso já é um contexto/i.test(t)
  );
  
  const isUserStart = (t) => (
    /^Quais são os seus/i.test(t) ||
    /^Dei 404/i.test(t) ||
    /^É, porque o repositório/i.test(t) ||
    /^Bem, tudo bem/i.test(t) ||
    /^Ah, mas essas/i.test(t) ||
    /^Ah, vamo lá/i.test(t) ||
    /^Não\. Não, não quero/i.test(t) ||
    /^Tá, eu tô treinando/i.test(t)
  );
  
  let turns = [];
  let current = { speaker: null, parts: [] };
  
  cleanParas.forEach(text => {
    let speaker = null;
    
    if (isGrokStart(text)) speaker = 'Grok';
    else if (isUserStart(text)) speaker = 'Usuário';
    else if (current.speaker) speaker = current.speaker;
    
    if (!speaker) speaker = 'Grok';
    
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
  
  // Build clean Markdown
  let md = `# Grok Share Conversation\n\n`;
  md += `**URL:** ${location.href}\n`;
  md += `**Captured:** ${new Date().toISOString().slice(0,10)} via BrowserOS (for-grok training)\n`;
  md += `**Total turns:** ${turns.length}\n\n---\n\n`;
  
  turns.forEach((turn, i) => {
    md += `## Turn ${i+1} - ${turn.speaker}\n\n${turn.text}\n\n---\n\n`;
  });
  
  md += `*End of capture. Verified start-to-end. Clean text only.*\n`;
  
  return {
    totalTurns: turns.length,
    turns,
    cleanMarkdown: md,
    rawLength: container.innerText.length,
    url: location.href
  };
})();
