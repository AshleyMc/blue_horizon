# Project Blue Horizon Design System

This is a static, multi-page design-system documentation site for the BCBS Mississippi Project Blue Horizon reference set. Open `index.html` in a browser and use the shared navigation to move between pages. The site works without a build step.

## Files

- `index.html` — overview and links into the system.
- `foundations.html` — color, typography, layout, mobile guidance, accessibility, patterns, and adoption guidance.
- `components.html` — buttons, forms, feedback, data tables, and iconography, grouped under Components.
- `site.css` and `site.js` — shared website layout and page navigation behaviors.
- `tokens.css` — CSS custom properties that can be imported into a web project.
- `components.css` — framework-free button, form, alert, status, and table starters.
- `components.js` — password show/hide and native dialog behaviors used by the examples.
- `tokens.json` — structured token export for tooling and design handoff.
- `project-horizon.png` — the supplied Project Blue Horizon logo asset.
- `CHANGELOG.md` — preview release notes.
- `CONTRIBUTING.md` — change proposal and release workflow.

## Request a design-system addition

Use **Request an addition** in the global navigation to prepare a structured Markdown request. The form runs locally in the browser and lets the requester download or copy the result; it does not submit to or store anything on a server. Share the request through the team’s normal intake channel. Do not include member, patient, or other sensitive personal information. Connect the form to an owned issue tracker or intake service when the team establishes one.

## Use the CSS tokens

Copy both CSS files into the consuming project. Load the tokens before the component styles:

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
```

```html
<button class="bh-button bh-button--primary" type="submit">Submit request</button>
```

Keep `tokens.css` and `tokens.json` aligned when a token changes. The exports are a preview, not yet a generated package; the product team should choose a source-of-truth workflow before publishing them to production applications.

## Status and ownership

Version 1.0 preview. The existing HTML, CSS, image, palette, button, and typography references were used as source material. Contrast examples are calculated from the displayed foreground/background values; review them with the accessibility owner before adoption. The source references do not establish a release owner, support policy, or browser support matrix. Assign those before calling this release-ready.

The button hierarchy follows the updated button document: solid orange for the primary form submission, solid blue for a primary non-submit action, outline for secondary/equal actions, and flat gray for cancel/reset/exit. Use one solid primary action per page. Orange outline is reserved for pages that truly need multiple form submissions; reconsider the structure first.

## Suggested release checklist

- Name a design-system owner and code owner.
- Confirm the supported browsers, devices, and accessibility target.
- Review the legacy password behavior with Security; this preview keeps passwords masked by default on every device.
- Validate every documented component and token pair with accessibility review.
- Add automated token synchronization and component-level usage examples in the framework selected by the product team.
- Publish a changelog and migration notes for each stable release.
