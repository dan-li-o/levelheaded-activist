# Level-Headed Activist · One-Page Template

This repository contains a single-page HTML/CSS template for academics who want a measured, monochrome web presence rooted in clarity and civic tone.

## Quick Start

1. Double-click `index.html` to open the page locally in your browser.
2. Edit `index.html`, `styles.css`, and `script.js` with any text editor (VS Code, Sublime, TextEdit, etc.).
3. Refresh the browser tab to see your changes. No build tools or installs required.

## Customize the Template (No Coding Experience Needed)

| What you want to change | Where to edit | Tip |
| --- | --- | --- |
| Name in the logo | `index.html` → `<div class="logo">` | Keep uppercase for the classic masthead look. |
| Navigation items | `index.html` → `<nav>` links | Update both the link text and the `href="#section-id"` anchor. |
| Hero tagline & subtext | `index.html` → `<section class="hero">` | Swap in any of the suggested taglines or write your own. |
| About photo | `index.html` → `.about-portrait img` `src` | Paste a full image URL (Unsplash works great). |
| Biography text | `index.html` → `.about-text` paragraphs | Keep it to 2 paragraphs (~120 words) for balance. |
| Research tiles | `index.html` → `.research-card` blocks | Update titles, publishers, summaries, and hover quotes. |
| Speaking / Media lists | `index.html` → `.speaking-grid` | Add/remove `<div class="talk">` or `<li>` rows as needed. |
| Teaching courses | `index.html` → `.course-card` | Duplicate a card to add more classes. |
| Essay links & newsletter blurb | `index.html` → `.essays-grid` | Replace link text/URLs and edit the invitation copy. |
| Contact info & form labels | `index.html` → `.contact-grid` | Update the email, address, and social URLs. |
| Colors & fonts | `styles.css` → `:root` | Adjust the color codes or font stacks if desired. |

### Animations & Behavior

- Section headings slide in horizontally and content rises vertically as you scroll, handled by `script.js`.
- The navbar starts transparent over the hero image and switches to black once you leave the hero.
- Hover states reveal extra details on research cards, course cards, and essay links.

If you don't want animations, delete the entire contents of `script.js` and remove the `.section-header` / `.section-content` `transform` rules from `styles.css`.

## Replace Images Quickly

1. Visit [Unsplash](https://unsplash.com/) (or any royalty-free source) and copy the full image URL.
2. Replace the URL inside the `src="..."` of the `<img>` tag you want to swap.
3. Reload the page to view the new grayscale image (the CSS desaturates it automatically via the `sat=-100` parameter).

## Deploying

- GitHub Pages: push this repo to GitHub, then enable Pages (branch `main`, folder `/root`).
- Netlify / Vercel / Render: drag-and-drop the folder or connect your repo—no build settings required.

## Files at a Glance

- `index.html` – All content sections and structure.
- `styles.css` – Colors, typography, layout, and hover treatments.
- `script.js` – Scroll-triggered reveals, sticky nav behavior, and mobile menu toggle.

Need help adapting the template? Open an issue describing what you're trying to achieve and include screenshots or text samples if possible.***
