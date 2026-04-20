export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js (App Router) and TypeScript. Showcases projects, skills, blogs, and contact information. Includes a dark/light theme toggle (next-themes), responsive layouts with Tailwind CSS, project cards with cycling image galleries, and a dedicated projects page. Live demo and source code are linked.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://preyumkrportfolio.netlify.app/",
    codelink: "https://github.com/PreyumKr/portfoliowebsite",
    date: "2026-03-19",
    images: [
      "/project1/1.png",
      "/project1/2.png",
    ]
  },
  {
    id: 2,
    title: "Resume Screening Model",
    description: "Resume Screener using TF‑IDF to filter candidate resumes. The app extracts their text, preprocesses, vectorizes and compares them to role-specific keyword profiles, The project includes model training and serialization. FastAPI and Kubernetes/Docker are provided for deployment as well.",
    technologies: [
      "Python", "scikit-learn", "FastAPI", "Docker", "Streamlit", "Kubernetes", "RapidOCR"
    ],
    link: "https://resumescreenerbasic.streamlit.app/",
    codelink: "https://github.com/preyumkr/resume_screener_basic",
    date: "2025-02-11",
    images: [
      "/project2/1.png",
      "/project2/2.png",
      "/project2/3.png",
      "/project2/4.png",
    ]
  },
  {
    id: 3,
    title: "Vehicle Insurance Claim Prediction",
    description: "Predictive model for estimating vehicle insurance claims using machine learning techniques.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy"],
    link: "https://vehicle-insurance-checker.onrender.com",
    codelink: "https://github.com/PreyumKr/MLOps_Project1",
    date: "2026-02-23",
    images: [
      "/project3/1.png",
      "/project3/2.png",
    ]
  },
  {
    id: 4,
    title: "QR Code Designer",
    description: "A beautiful, full-featured QR code designer built with Next.js and qr-code-styling. Generate, customize, and export designer QR codes with preset themes, advanced styling (dot & corner styles, colors, error correction), and multiple export options (PNG, SVG, JPEG, clipboard).",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "qr-code-styling"],
    link: "https://designedqrgenerator.netlify.app/",
    codelink: "https://github.com/PreyumKr/qr-generator",
    date: "2026-03-20",
    images: [
      "/project4/1.png",
      "/project4/2.png",
      "/project4/3.png",
      "/project4/4.png",
    ]
  }
]

export const skills = [
  { category: "Programming", items: ["Python", "C++", "Go", "Java"] },
  { category: "ML & AI", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Transformers", "OpenCV", "Ollama"] },
  { category: "Tools", items: ["Git", "Docker", "VS Code", "Vercel", "GitHub", "MLFlow", "Netlify"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"] },
  { category: "Others", items: ["REST APIs", "GraphQL", "WebSockets", "Agile", "Problem Solving"] },
]

export const blogs = [
  {
    id: 1,
    title: "Modern JavaScript Essentials: From Basics to Asynchronous Programming",
    description: "In an AI-driven world, a strong foundation in core technologies is essential. To keep my skills sharp, I'm starting a regular blog series covering the tech stack I use. Welcome to the first post in my Next.js journey, where we'll start by mastering the JavaScript fundamentals.",
    date: "2026-03-23",
    readTime: "32 min read",
    image: "/blog1/1.png",
    link: "https://dev.to/preyumkr/modern-javascript-essentials-from-basics-to-asynchronous-programming-3fgo"
  },
  {
    id: 2,
    title: "Modern React Essentials: From Component Architecture to Advanced Hooks",
    description: "In an AI-driven world, we should keep our basics clear at all times. This is the second post in my next.js learning series where we will learn about React as it's a fundamental part of Next.js. In the future, I may also add an optional HTML & CSS post, but since I'm already familiar with their fundamentals, I'm not creating one just now.",
    date: "2026-04-09",
    readTime: "20 min read",
    image: "/blog2/1.png",
    link: "https://dev.to/preyumkr/modern-react-essentials-from-component-architecture-to-advanced-hooks-2bj0"
  },
  {
    id: 3,
    title: "Modern Next.js Essentials: Building Scalable Full-Stack Applications",
    description: "In an AI-driven world, we should keep our basics sharp at all times. This is the final post in my next.js learning series where we'll go over the fundamentals of Next.js.",
    date: "2026-04-16",
    readTime: "33 min read",
    image: "/blog3/1.png",
    link: "https://dev.to/preyumkr/modern-nextjs-essentials-building-scalable-full-stack-applications-2l0f"
  }
]
