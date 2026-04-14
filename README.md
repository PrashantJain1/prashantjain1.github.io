# Prashant Jain Portfolio Website

Static, modular portfolio site built for GitHub Pages.

## Why this structure?
- `index.html` stays simple and only contains the page shell.
- `js/content.js` stores nearly all editable text in one place.
- `js/main.js` renders reusable section patterns from the content object.
- `css/` is split by responsibility so layout, components, and themes can change independently.
- `css/themes/` contains swappable visual themes.

## How to edit content
1. Open `js/content.js`
2. Update text, links, arrays, or add/remove items
3. Save and refresh

## How to remove a section
- Remove or comment out the matching `<section id="..."></section>` in `index.html`
- Or keep the section and remove its data from `content.js` plus the matching render block in `js/main.js`

## How to add a project
- In `js/content.js`, duplicate one object inside `projects.items`

## How to switch themes
- In `index.html`, change:
  `css/themes/theme-default.css`
  to
  `css/themes/theme-alt.css`
- Or use the theme toggle button in the site

## GitHub Pages deployment
1. Push the whole folder to a repository
2. Put `index.html` in the repository root
3. Enable GitHub Pages in repository settings
4. Site will work without build tools or dependencies
