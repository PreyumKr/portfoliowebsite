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
    date: "2026-02-10",
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
    link: "https://vehicleinsuranceclaimprediction.streamlit.app/",
    codelink: "https://github.com/preyumkr/vehicle_insurance_claim_prediction",
    date: "2026-01-20",
    images: [
      "/project3/1.png",
      "/project3/2.png",
      "/project3/3.png",
    ]
  },
  {
    id: 4,
    title: "QR Code Designer",
    description: "A beautiful, full-featured QR code designer built with Next.js and qr-code-styling. Generate, customize, and export designer QR codes with preset themes, advanced styling (dot & corner styles, colors, error correction), and multiple export options (PNG, SVG, JPEG, clipboard).",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "qr-code-styling"],
    link: "",
    codelink: "",
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
