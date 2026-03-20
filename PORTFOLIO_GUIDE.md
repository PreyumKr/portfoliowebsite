# Portfolio Website - Next.js TypeScript

A modern, responsive portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. This portfolio includes a navbar, hero section, about section, projects showcase, skills display, blog section, and contact footer.

## 🎯 Features

✅ **Responsive Design** - Mobile-first approach with Tailwind CSS  
✅ **Modern Navbar** - Sticky navigation with mobile menu toggle  
✅ **Hero Section** - Eye-catching introduction with call-to-action buttons  
✅ **About Section** - Overview with quick facts  
✅ **Projects Section** - Display featured projects with tech stack  
✅ **Skills Section** - Categorized skills display  
✅ **Blog Section** - Latest blog posts with metadata  
✅ **Footer** - Social links and quick navigation  
✅ **Dark Mode Support** - CSS-based dark mode styling  
✅ **TypeScript** - Fully typed components and data  
✅ **Optimized Images** - Next.js Image component for performance  

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page component
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── navbar.tsx          # Navigation bar with mobile menu
│   ├── hero-section.tsx    # Hero introduction section
│   ├── about-section.tsx   # About me section
│   ├── projects-section.tsx # Projects showcase
│   ├── skills-section.tsx   # Skills display
│   ├── blogs-section.tsx    # Blog posts section
│   ├── project-card.tsx     # Project card component
│   ├── blog-card.tsx        # Blog card component
│   └── footer.tsx           # Footer with links
├── lib/
│   ├── utils.ts            # Utility functions (cn for classname merging)
│   └── data.ts             # Sample data for projects, skills, blogs
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
- Visit `http://localhost:3000` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run start
```

## 📦 Dependencies

- **next**: ^16.2.0 - React framework
- **react**: 19.2.4 - UI library
- **react-dom**: 19.2.4 - React DOM utilities
- **lucide-react**: ^0.454.0 - Icon library
- **next-themes**: ^0.4.4 - Dark mode support
- **clsx**: ^2.1.1 - Classname utility
- **class-variance-authority**: ^0.7.1 - CSS-in-JS utilities
- **tailwind-merge**: - Tailwind CSS class merging

## 🎨 Customization

### Update Your Information

Edit `lib/data.ts` to add your own:
- Projects with descriptions, tech stack, and links
- Skills organized by category
- Blog posts with metadata

### Update Hero Section

Edit `components/hero-section.tsx`:
- Change your name and headline
- Update tagline and description
- Modify CTA button text

### Update Navbar Links

Edit `components/navbar.tsx`:
- Add or remove navigation links
- Update logo text
- Customize colors and styling

### Styling

All components use **Tailwind CSS** classes. Global styles are in `app/globals.css`.

Colors used:
- Primary: `blue-600` (hover: `blue-700`)
- Background: `white` / `black` (dark mode)
- Text: `gray-900` / `white` (dark mode)

## 📝 Sections Breakdown

### 1. **Navbar** (`navbar.tsx`)
- Sticky navigation bar
- Desktop menu + mobile hamburger menu
- Logo and navigation links
- Contact button
- Dark mode ready

### 2. **Hero Section** (`hero-section.tsx`)
- Full-height introduction
- Large heading with accent color
- Subtitle and description
- Gradient background
- CTA buttons

### 3. **About Section** (`about-section.tsx`)
- Text description split into paragraphs
- Quick facts box with highlights
- Two-column layout on desktop, stacked on mobile

### 4. **Projects Section** (`projects-section.tsx`)
- Grid layout (2-3 columns based on screen size)
- Uses `ProjectCard` component
- Sample projects from `lib/data.ts`
- "View All Projects" link

### 5. **Skills Section** (`skills-section.tsx`)
- Four categories: Frontend, Backend, Tools, Other
- Skill items with dot indicators
- Card-based layout
- Responsive grid

### 6. **Blogs Section** (`blogs-section.tsx`)
- Grid of blog cards
- Uses `BlogCard` component
- Metadata: date and read time
- Link to read more

### 7. **Project/Blog Cards**
- Image with hover effect
- Title and description
- Tech stack tags (projects) / metadata (blogs)
- Call-to-action links

### 8. **Footer** (`footer.tsx`)
- Company information
- Quick links
- Resources
- Social media links
- Bottom copyright and legal links

## 🌚 Dark Mode

The portfolio includes dark mode support using CSS media queries:
- `dark:` prefix for dark mode styles in Tailwind
- Automatic detection via `prefers-color-scheme`
- No theme toggle button (can be added)

## 📱 Responsive Breakpoints

Uses Tailwind's breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔗 Component Props Types

### ProjectCard
```typescript
interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    technologies: string[]
    link: string
    image: string
  }
}
```

### BlogCard
```typescript
interface BlogCardProps {
  blog: {
    id: number
    title: string
    description: string
    date: string
    readTime: string
    image: string
  }
}
```

## 📊 Data Structure

### Projects (`lib/data.ts`)
```typescript
projects = [
  {
    id: 1,
    title: "Project Name",
    description: "...",
    technologies: ["Tech1", "Tech2"],
    link: "https://...",
    image: "https://...",
  }
]
```

### Skills
```typescript
skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", ...]
  }
]
```

### Blogs
```typescript
blogs = [
  {
    id: 1,
    title: "Blog Title",
    description: "...",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://..."
  }
]
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
- Connect GitHub repo
- Build command: `npm run build`
- Publish directory: `.next`

### Standard Server
```bash
npm run build
npm start
```

## 🛠️ Development Tips

1. **Component Reusability** - Extract common patterns into components
2. **Type Safety** - Always define prop interfaces
3. **Performance** - Use Next.js Image for all images
4. **Accessibility** - Add alt text to images, semantic HTML
5. **SEO** - Update metadata in layout.tsx

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `page.tsx` | Main homepage component |
| `layout.tsx` | Root layout, metadata, fonts |
| `globals.css` | Global styles and Tailwind directives |
| `navbar.tsx` | Navigation component with mobile menu |
| `hero-section.tsx` | Hero/welcome section |
| `about-section.tsx` | About me information |
| `projects-section.tsx` | Projects showcase |
| `skills-section.tsx` | Skills display |
| `blogs-section.tsx` | Blog posts listing |
| `project-card.tsx` | Reusable project card |
| `blog-card.tsx` | Reusable blog card |
| `footer.tsx` | Footer with links |
| `utils.ts` | Helper functions (cn for classname) |
| `data.ts` | Sample data structures |

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📞 Support

For issues or questions:
1. Check the component files
2. Review Tailwind CSS classes used
3. Verify data in `lib/data.ts`
4. Check TypeScript types

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Building! 🎉**

## Changes Made Summary

✅ Created responsive navbar with mobile menu toggle  
✅ Implemented hero section with CTA buttons  
✅ Built about section with quick facts  
✅ Created projects showcase with card component  
✅ Added skills section with categorized skills  
✅ Built blog section with blog cards  
✅ Created reusable project and blog card components  
✅ Added footer with social links and navigation  
✅ Set up TypeScript types and data structures  
✅ Installed UI dependencies (lucide-react, next-themes, tailwind utilities)  
✅ Created utility functions for classname merging  
✅ Updated metadata and page title  
✅ Made fully responsive and mobile-friendly  
✅ Added dark mode CSS support  
✅ All components are fully typed TypeScript
