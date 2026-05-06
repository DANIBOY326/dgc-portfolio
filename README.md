# DGConcept Multimedia & Prints — Portfolio

> **Product Marketing Designer (UI/UX + Brand)**
> Built with React + Vite + Tailwind CSS

---

## 🚀 Getting Started in VS Code

### Step 1 — Prerequisites
Make sure you have these installed on your computer:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

To check, open a terminal and run:
```bash
node -v    # Should show v18.x.x or higher
git -v     # Should show git version
```

---

### Step 2 — Open the project in VS Code
1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `dgc-portfolio` folder
4. Open the integrated terminal: **Terminal → New Terminal**

---

### Step 3 — Install dependencies
```bash
npm install
```
This installs React, Vite, Tailwind, and all other packages.

---

### Step 4 — Run locally
```bash
npm run dev
```
Open your browser and go to: **http://localhost:5173**

You should see your portfolio live! 🎉

---

## 📁 Project Structure

```
dgc-portfolio/
├── public/
│   └── favicon.svg              ← Browser tab icon
├── src/
│   ├── assets/
│   │   └── dgc-logo.png         ← Your DGC logo (already included)
│   ├── components/
│   │   ├── Navbar.jsx           ← Top navigation bar
│   │   ├── Hero.jsx             ← Hero / landing section
│   │   ├── Services.jsx         ← "What I Do" section
│   │   ├── CaseStudies.jsx      ← 4 case studies (expandable)
│   │   ├── About.jsx            ← About section
│   │   ├── Contact.jsx          ← Contact / CTA section
│   │   └── Footer.jsx           ← Footer
│   ├── hooks/
│   │   └── useReveal.js         ← Scroll animation hook
│   ├── App.jsx                  ← Root component
│   ├── main.jsx                 ← Entry point
│   └── index.css                ← Global styles + Tailwind
├── index.html                   ← HTML template
├── vite.config.js               ← Vite config
├── tailwind.config.js           ← Tailwind config
├── postcss.config.js            ← PostCSS config
├── netlify.toml                 ← Netlify deployment config
└── package.json                 ← Dependencies
```

---

## ✏️ How to Customize

### Update your contact info
Open `src/components/Contact.jsx` and replace:
```js
href: 'mailto:hello@dgconcept.com'   // ← Your real email
href: 'https://linkedin.com/in/dgconcept'  // ← Your LinkedIn URL
```

### Add your profile photo
1. Put your photo in `src/assets/` (e.g., `photo.jpg`)
2. Open `src/components/About.jsx`
3. Replace the placeholder div with:
```jsx
import photo from '../assets/photo.jpg'
<img src={photo} alt="Your Name" className="w-full rounded-2xl mb-8 shadow-sm" />
```

### Add your resume download
In `src/components/About.jsx`, replace the `href="#"` on the "Download Resume" button with a link to your PDF hosted online (e.g., Google Drive or Dropbox public link).

### Update case study content
Open `src/components/CaseStudies.jsx` — each case study has:
- `problem`, `goal`, `approach`, `solution`, `outcome` — edit these with your real project details

---

## 📤 Push to GitHub

```bash
# 1. Initialize git (if not done)
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial portfolio build"

# 4. Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/dgc-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy to Netlify

**Option A — Drag & Drop (easiest):**
1. Run `npm run build` — creates a `dist/` folder
2. Go to [netlify.com](https://netlify.com) → Log in → **Sites**
3. Drag and drop the `dist/` folder onto the Netlify dashboard
4. Done! Your site is live. ✅

**Option B — Connect GitHub (auto-deploys on push):**
1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
2. Choose GitHub → Select your `dgc-portfolio` repo
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**
5. Every time you push to GitHub, Netlify auto-deploys ✅

---

## 🎨 Colors & Fonts Reference

| Token | Value | Usage |
|-------|-------|-------|
| `brand-blue` | `#0F39D0` | Primary, CTAs, links |
| `brand-orange` | `#FF6B35` | Accent, highlights |
| `brand-dark` | `#0A0F2C` | Headings, text |
| `brand-gray` | `#F7F8FC` | Section backgrounds |
| `brand-muted` | `#6B7280` | Body text |
| Font Display | Poppins | Headings, buttons |
| Font Body | Inter | Paragraphs, labels |

---

## 🛠️ VS Code Extensions (Recommended)

Install these for a better experience:
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets** — React shortcuts
- **Prettier** — auto-format your code
- **GitLens** — powerful Git integration

---

Built by DGConcept Multimedia & Prints 🚀
