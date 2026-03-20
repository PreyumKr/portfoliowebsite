export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and TypeScript showcasing my projects and skills.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    link: "https://preyumkrportfolio.netlify.app/",
    codelink: "https://github.com/PreyumKr/portfoliowebsite",
    date: "2024-03-19",
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
      "Python", "scikit-learn", "FastAPI", "Streamlit", "Docker", "Kubernetes"
    ],
    link: "https://resumescreenerbasic.streamlit.app/",
    codelink: "https://github.com/preyumkr/resume_screener_basic",
    date: "2024-02-10",
    images: [
      "/project2/1.png",
      "/project2/2.png",
      "/project2/3.png",
      "/project2/4.png",
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
    title: "Getting Started with Next.js 13+",
    description: "Learn the fundamentals of Next.js 13 with the new App Router and Server Components.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356360985-cacdc5adac21?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    description: "Master TypeScript with these essential tips and tricks for production-ready code.",
    date: "2024-01-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Building Responsive Designs with Tailwind CSS",
    description: "Create beautiful, responsive layouts using utility-first CSS with Tailwind.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356360985-cacdc5adac21?w=500&h=300&fit=crop",
  },
]
