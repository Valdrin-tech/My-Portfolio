# Copilot Instructions for Portfolio Website

## Project Overview
This is a modern, minimalistic portfolio website for a Frontend Developer. The design uses a strict black and white color palette, high contrast, and a premium, professional look. The site is built with React and styled-components, featuring a grid-based layout, large bold headings, and smooth transitions.

## Key Architecture & Patterns
- **Framework:** React (with functional components)
- **Styling:** styled-components for all CSS-in-JS styling
- **Color Palette:**
  - Background: #000 (black)
  - Primary text: #fff (white)
  - Secondary text: #aaa (gray)
- **Layout:** Responsive grid, strong visual hierarchy, generous spacing
- **Sections:** Home, About, Projects, Contact
- **Typography:** Clean, sans-serif fonts (e.g., Inter, Helvetica Neue)
- **Animations:** Subtle transitions on hover/focus for links, buttons, and cards

## Developer Workflows
- **Install dependencies:** `npm install` or `yarn`
- **Start development server:** `npm start` or `yarn start`
- **Build for production:** `npm run build` or `yarn build`
- **Linting:** Use ESLint (if configured)
- **Styling:** All styles must use styled-components; avoid global CSS

## Project Conventions
- **Component Structure:** Each section (Home, About, Projects, Contact) is a separate React component in `/src/components/`
- **No images or media** unless explicitly requested; use text and layout for visual impact
- **No color except black, white, and gray**
- **Minimal dependencies:** Only use libraries essential for layout, animation, or accessibility
- **Accessibility:** Use semantic HTML and accessible color contrast

## Example Files
- `/src/App.js` – Main app layout and routing
- `/src/components/` – Section components
- `/src/styles/GlobalStyle.js` – Global styles with styled-components

## Integration Points
- No backend or API integration by default
- If adding contact forms, use a service like Formspree or Netlify Forms (document integration steps)

## References
- [styled-components documentation](https://styled-components.com/docs)
- [React documentation](https://react.dev/)

---

- Keep all code and styles minimal, clean, and consistent with the design vision.
- Reference this file for project-specific rules and update as the project evolves.
