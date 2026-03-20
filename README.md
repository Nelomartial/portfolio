# Cyrille Nelo - Portfolio Website

A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS. Showcases quantitative finance expertise, software engineering projects, and professional experience.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark Mode Toggle**: Smooth theme switching with Framer Motion animations
- **Project Showcase**: Interactive bento grid with filtering by category (Quant, Algo, AI, Data Eng, Software Eng)
- **Project Detail Panel**: Slide-in drawer with full project descriptions and tech stacks
- **Work History Timeline**: Professional experience with company details and achievements
- **Contact Form**: Email integration with pre-filled mailto links
- **Smooth Animations**: Framer Motion for transitions and interactive elements
- **Modern UI**: Radix UI components and custom Tailwind styling

## Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Radix UI** - Unstyled, accessible components

### Build & Development
- **Parcel** - Zero-config bundler
- **PostCSS** - CSS transformations
- **ESLint** - Code quality

## Project Structure

```
src/
├── components/
│   ├── portfolio/
│   │   ├── ContactBar.jsx
│   │   ├── ContactSection.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectDetailPanel.jsx
│   │   ├── ProjectSlideshow.jsx
│   │   ├── SectionHeader.jsx
│   │   └── WorkHistory.jsx
│   └── ui/
│       └── [49+ Radix UI component wrappers]
├── hooks/
│   └── use-mobile.jsx
├── lib/
│   ├── AuthContext.jsx
│   ├── PageNotFound.jsx
│   ├── query-client.js
│   └── utils.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start Parcel dev server on port 3000
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## Customization

### Update Contact Information



### Modify Projects

Update the `PROJECTS` array in `src/pages/Home.jsx` to add/edit projects:
```javascript
{
  id: "1",
  title: "Project Title",
  category: "Quant",
  summary: "Brief description...",
  deep_dive: "Detailed description...",
  tech_stack: ["Tech1", "Tech2"],
  in_progress: false,
}
```

### Update Work History

Edit `src/components/portfolio/WorkHistory.jsx`:
```javascript
const WORK_HISTORY = [
  {
    company: "Company Name",
    role: "Job Title",
    period: "Start — End",
    location: "City, Country",
    description: "Job description...",
    tags: ["Tech1", "Tech2"],
  },
];
```

## Colors & Styling

The portfolio uses a dark theme with category-specific accent colors:
- **Quant**: `#00d4ff` (Cyan)
- **Algo**: `#a855f7` (Purple)
- **AI**: `#22d3ee` (Sky Blue)
- **Data Eng**: `#f97316` (Orange)
- **Software Eng**: `#10b981` (Emerald)

Modify color schemes in individual component files or update Tailwind config in `tailwind.config.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Built with Parcel for optimized bundling
- Code splitting for faster initial loads
- Lazy loading for images and components
- Optimized animations with Framer Motion

## Deployment

### Build for Production
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Deployment Options
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Configure build output directory
- **Any static host**: Copy `dist/` contents

## License

© 2026 Cyrille Nelo. All rights reserved.

## Contact

- Email: nelomartial@yahoo.com
- Phone: +33669233372
- GitHub: [cyrille-nelo](https://github.com/cyrille-nelo)
- LinkedIn: [cyrille-nelo](https://linkedin.com/in/cyrille-nelo)
