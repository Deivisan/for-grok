# BrowserOS Grok Share Capture

**Status:** Production-ready (validated 2026-06-15 on the definitive link + longer real sessions).

## The Script That Works

The single file you need:

- `grok-share-capture.js` (in this folder or `tools/browseros/`)

It is the integrated patient capture:
- Scrolls until the conversation is stable (configurable patience).
- Aggressively removes UI noise (Copiar, Report, sources, buttons, etc.).
- Detects Usuário vs Grok with generic heuristics + alternation correction.
- Returns one clean Markdown in the exact format required.

## How to Use (Agentic / Manual)

1. Open the Grok Share link in BrowserOS (it will get a page ID).
2. Use `browseros_list_pages` to find the exact page ID of the share.
3. (Optional) Activate/focus it.
4. Run the capture:

```js
// Paste the entire content of grok-share-capture.js as the "expression"
browseros_evaluate_script({
  page: <PAGE_ID>,
  expression: "/* entire content of grok-share-capture.js */"
})
```

5. From the result take `cleanMarkdown` and save it as `YYYY-MM-DD_title_Nturns.md`.

## Configuration (inside the script)

At the top of the file:

```js
const CONFIG = {
  scrollStep: 3,
  maxScrolls: 300,
  waitAfterScrollMs: 1400,
  stablePassesRequired: 4,
  maxTotalTimeMs: 45 * 60 * 1000,   // 45 min max patience
  logEveryNScrolls: 15
};
```

Tune these if you have extremely long sessions.

## Validation History (Definitive Link)

- Link: https://grok.com/share/c2hhcmQtMg_eb824561-8d15-406a-9286-ffa9eb6486d0
- Date tested: 2026-06-15
- Turns: 13
- Result: Perfect start-to-end capture, clean Markdown, explicit Usuário/Grok turns, zero loss, zero UI noise.
- This link is considered the **gold standard** for the methodology in for-grok.

Later tested successfully on:
- 21-turn voice session
- 226-turn multi-hour technical + news session (printer NAT, CUPS, AI models debate)

All produced high-quality single Markdown outputs with perfect speaker separation.

## Agentic Usage

Any agent (DevSan, Grok via tools, SAL, etc.) can:
- Open the link via `browseros_new_page`
- Find the page ID
- Execute the evaluate_script with this payload
- Save the `result.cleanMarkdown` to the appropriate training/captures folder
- Update logs

This makes the capture step fully autonomous and repeatable.

## Output Format (Guaranteed)

```markdown
# Grok Share Conversation

**URL:** ...
**Captured:** YYYY-MM-DD via BrowserOS (for-grok training)
**Total turns:** N

---

## Turn 1 - Grok
...

## Turn 2 - Usuário
...

---
*End of capture. Clean text only. Usuário / Grok alternation enforced.*
```

## Notes

- The script runs entirely inside the page context via `evaluate_script` — no external dependencies.
- It is self-contained and versioned here.
- For even longer sessions in the future, increase `maxScrolls`, `stablePassesRequired`, or `waitAfterScrollMs`.

This is the current canonical capture tool for Grok Share links using BrowserOS.
