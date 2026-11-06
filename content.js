/*
  ============================================================
  SITE TEXT: edit this file to change what the site says.
  ============================================================
  Rules that keep the site working:
  - Keep text inside the quote marks: "like this".
  - Keep the commas at the end of lines and between items.
  - To add a job, project or school, copy one whole { ... }, block
    (including its comma) and paste it next to the others.
  - Save (on GitHub: "Commit changes") and the live site updates
    in about a minute.
*/

window.CONTENT = {
  name: "Kara Dumk",
  tagline: "web developer · digital creative · Lagos, NG",
  email: "karadumk223@gmail.com",
  resume: "resume.pdf",   // the PDF file sitting next to index.html

  // The lines typed out on the intro screen.
  intro: [
    "\\[._.]/ Hey there, I'm Kara",
    "$ web developer & digital creative",
    "$ based in Lagos, Nigeria",
    "$ booting terminal...",
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/kara-dumk-0b13a8309/",
    github: "https://github.com/Karadumk",
    design: "https://karadumk.my.canva.site/",
  },

  // Shown by the "whoiskara" command. Each item is a paragraph.
  bio: [
    "Hi, I'm Kara! Web developer and digital creative in Lagos, Nigeria.",
    "My digital work is all about minimalism and playfulness. I'm love everything social media, tech and branding. I build on both sides: backend APIs in Python, and brand visuals and social media content.",
    "Currently open to full-time remote opportunities.",
  ],

  // Shown by the "experience" command, newest first.
  experience: [
    {
      role: "Social Media Strategist",
      org: "Wandé Esan",
      when: "Jun 2026 – present · hybrid",
      points: [
        "Leads social strategy and content across Instagram, TikTok, X and email for seasonal launches and product drops",
      ],
    },
    {
      role: "Communications Intern",
      org: "Varscon (Nwahia product team)",
      when: "Feb 2026 – Sep 2026 · remote",
      points: [
        "Made 30+ graphics and 20+ videos for LinkedIn, Instagram and campaigns",
        "Wrote a featured article on Nwahia's backend architecture with the engineering team",
      ],
    },
    {
      role: "Junior Backend Developer",
      org: "Dine Together UK",
      when: "Jun 2025 – Jan 2026 · remote",
      points: [
        "Built REST APIs in Django REST Framework for events, booking analytics and in-app messaging",
        "Engineered an async payout workflow with Celery and Django signals for daily host earnings",
      ],
    },
    {
      role: "Canva Designer, Social Media",
      org: "Hot Girl Wellness",
      when: "May 2025 – present · Lagos",
      points: [
        "Designed 20+ graphics and brand kits; content supported a 20% lift in follower interaction",
      ],
    },
    {
      role: "Backend Developer Intern",
      org: "HNG Tech",
      when: "Feb 2025 – Apr 2025 · remote",
      points: [
        "Built call notes, speech-to-text and call recording features for Outbound.im with FastAPI, PostgreSQL and Google Cloud",
      ],
    },
    {
      role: "Customer Experience Manager",
      org: "Unitellas International",
      when: "May 2024 – Feb 2025 · Lagos",
      points: [
        "Ran front-office operations and sat in on cloud (IaaS, PaaS, SaaS) meetings with Zadara",
      ],
    },
  ],

  // Shown by the "education" command.
  education: [
    {
      school: "Miva Open University, Nigeria",
      detail: "BSc Computer Science",
      when: "Sep 2026 – present",
      points: [],
    },
    {
      school: "Kings College Cotonou, Benin Republic",
      detail: "WASSCE, high school diploma",
      when: "Jan 2019 – Jul 2021",
      points: [
        "Credits in mathematics, physics and computer studies",
        "Social Prefect (2020–2021): led the student council and organised the school's first cultural day",
      ],
    },
  ],

  // Shown by the "skills" command.
  skills: [
    { label: "backend", items: "Python · Django REST Framework · FastAPI · Flask · Celery" },
    { label: "data",    items: "PostgreSQL · SQLite · Google Cloud APIs" },
    { label: "web",     items: "HTML · CSS · Bootstrap · REST API design" },
    { label: "design",  items: "Canva Pro · brand kits · carousels · mockups" },
    { label: "social",  items: "content strategy · vidiQ · Buffer" },
    { label: "office",  items: "Microsoft 365 · Google Workspace · CRM tools" },
  ],

  // Shown by the "projects" command.
  projects: [
    {
      name: "atlas",
      status: "in progress",
      tech: "FastAPI · microservices · event-driven",
      about: "An e-commerce backend built as separate services that talk asynchronously. A production-style learning project exploring service isolation, async messaging, eventual consistency and cloud-native deployment.",
      link: "https://github.com/Karadumk/atlas-backend",
    },
    {
      name: "Notes App",
      status: "",
      tech: "Python · Flask · SQLite · Bootstrap · HTML",
      about: "A personal notes web app with user accounts, markdown support and a responsive UI.",
      link: "https://github.com/Karadumk/Flask-Notes-App",
    },
  ],
};
