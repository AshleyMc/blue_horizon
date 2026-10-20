# Contributing to Project Blue Horizon

This preview does not have an assigned maintainer. Once an owner is named, use this workflow for new patterns, component changes, and token updates.

## Request an addition

Use the **Request an addition** link in the website navigation to prepare a structured request. Include the user or team need, a proposed addition, and the products or teams it affects. Download or copy the generated Markdown and share it through the team’s normal intake channel. The form does not submit requests to a server; an intake owner and destination still need to be assigned.

Do not include member, patient, or other sensitive personal information in a request.

## Propose a change

Include:

- The user need and the products or flows affected.
- The current behavior and proposed behavior, including empty, loading, error, focus, disabled, and mobile states where relevant.
- The proposed token or component API and a working example.
- Accessibility impact, including keyboard, screen-reader, contrast, zoom, and motion behavior.
- Security, privacy, or clinical considerations for member, provider, claims, and biometrics experiences.
- Whether the change is compatible with existing implementations and how a migration would work.

## Review and release

1. Review the proposal with design, engineering, and the relevant accessibility, security, privacy, or clinical owners.
2. Update the documentation, CSS and JSON tokens, component styles/behavior, and examples together.
3. Review responsive layouts and all component states before release.
4. Record the change in `CHANGELOG.md`, assign a version, and provide migration guidance for breaking changes.

Do not publish a stable release until ownership, browser support, accessibility target, token source of truth, and security review rules are assigned.
