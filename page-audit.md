# Page audit — Parul Sharma portfolio

Audit date: 27 October 2026  
Files checked: `index.html`, `style.css`, `script.js`

| Content item | Verification status | Evidence or action required |
| --- | --- | --- |
| Name | Checked | Hero heading, brand, About copy, title, and footer all use **Parul Sharma**. |
| Contact details | Checked | Email `parulsharma3248@gmail.com` with `mailto:parulsharma3248@gmail.com` on the contact button and the visible email link. LinkedIn uses `https://www.linkedin.com/in/parul-sharma-a09905382` (tracking query string from the resume was removed; the profile path is unchanged). |
| About section | Checked | States B.Tech CSE, JECRC University, Jaipur, Rajasthan, 2025–2029, C/C++, DSA, tools, and the two resume projects. No internships, GPA, or extra biography invented. |
| Skills | Checked | Languages C and C++; core concepts DSA, OOP, problem solving; tools Git, GitHub, VS Code, Excel, Office, PowerPoint; coursework matches the resume. Project technologies (Python, ML, transaction analysis, QR, web development) are labelled as project technologies, not as extra claimed languages. |
| Project: UPI Shield | Checked | Description, features, technologies, and 2024 certificate context match the resume. No fake metrics or demos. |
| Project: MediQR | Checked | Description, features, and technologies match the resume. No fake metrics or demos. |
| Education | Checked | B.Tech in Computer Science and Engineering, JECRC University, Jaipur, Rajasthan, 2025–2029. |
| Certificates | Checked | UPI Shield Certificate, 2024; Cyber Sangam Event Certificate, 2024 (participant). |
| External links | Checked | Working: email mailto, LinkedIn profile URL, in-page anchors (`#about`, `#skills`, `#projects`, `#education`, `#achievements`, `#contact`, `#top`, `#main`). CSS `style.css` and JS `script.js` are linked with relative paths and load in the browser. |
| Responsive design | Checked | Mobile: hamburger opens/closes, nav links work, cards stack. Desktop (1280px): primary nav links are visible without the hamburger. Layout uses grid breakpoints at 960px and 760px. |
| Remaining placeholders | Checked | `PLACEHOLDER` remains for GitHub profile URL, UPI Shield repository/live demo, and MediQR repository/live demo. Resume listed GitHub handle `parulsharmaa25433-create` but not a full profile URL, so the URL was not constructed. |
| HTML validation | Pending | Semantic HTML5 was reviewed locally (one `h1`, labelled sections, `aria` on nav/menu, skip link). Official W3C Nu check has **not** been run. Open `index.html` at https://validator.w3.org/nu/. |
| File set | Checked | `index.html`, `style.css`, `script.js`, and `page-audit.md` exist in the project folder. No resume PDF was present in the folder. |
| Accessibility | Checked | Skip link, `:focus-visible` outlines, `aria-expanded` on the menu, `prefers-reduced-motion` disables transitions/smooth scroll, contrast of navy/gold/cream, no decorative photo. Keyboard Escape closes the mobile menu. |
| JavaScript behaviour | Checked | Copyright year rendered as `© 2026`. Mobile menu toggle and link-close behaviour verified in the browser. |

## Remaining tasks for Parul

1. Replace GitHub `PLACEHOLDER` with the real profile URL if it should be public.
2. Replace project repository and live demo `PLACEHOLDER` text when those URLs exist.
3. Validate HTML at https://validator.w3.org/nu/.
4. Optionally confirm the LinkedIn URL still opens the intended profile after removing UTM parameters.
