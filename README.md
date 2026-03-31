# Tizzle Ticket Landing Page

Landing page untuk Tizzle Ticket - On-Chain Event Ticketing di Solana.

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS custom properties
- **Fonts**:
  - Clash Grotesk (Display)
  - DM Sans (Body)
  - Geist Mono (Monospace)

## 📁 Project Structure

```
tizzle-landing/
├── src/
│   └── styles/
│       ├── main.css          # Base styles & design tokens
│       ├── home.css          # Homepage specific styles
│       ├── components.css    # Reusable components
│       ├── phone.css         # Phone mockup styles
│       ├── faq.css           # FAQ & waitlist styles
│       ├── whitepaper.css    # Whitepaper page styles
│       └── responsive.css    # Media queries
├── index.html                # Homepage
├── whitepaper.html           # Whitepaper page
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies
```

## 🛠️ Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

```css
--accent: #caff00 /* Lime green */ --accent-text: #0a0a0a
  /* Dark text on accent */ --bg: #0a0a0a /* Background */ --surface: #111111
  /* Card background */ --text-1: #ffffff /* Primary text */ --text-2: #888888
  /* Secondary text */ --text-3: #444444 /* Tertiary text */;
```

### Typography

- **Display**: Clash Grotesk (Headlines, titles)
- **Body**: DM Sans (Paragraphs, descriptions)
- **Mono**: Geist Mono (Code, labels, chips)

### Border Radius

```css
--radius-sm: 2px --radius-md: 4px --radius-lg: 8px --radius-full: 9999px;
```

## 📄 Pages

### Homepage (`index.html`)

- Hero section with headline
- How it works (3 roles)
- Features grid
- Phone mockups showcase
- FAQ section
- Waitlist form

### Whitepaper (`whitepaper.html`)

- Executive summary
- Vision & mission
- Problem statement
- Technical architecture
- Economic model
- Roadmap
- Security considerations

## 🚢 Deployment

### Dokploy

1. Connect Git repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Docker

```bash
# Build
docker build -t tizzle-landing .

# Run
docker run -p 80:80 tizzle-landing
```

### Static Hosting

Upload `dist/` folder ke:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## 📝 License

MIT License

## 🔗 Links

- Website: https://tizzle.io
- GitHub: https://github.com/tizzle-labs/tizzle-landing
- Solana: Devnet

---

**Built with ❤️ for Tizzle Protocol**
