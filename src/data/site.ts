export type NavLink = {
  href: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  duration: string;
  courses: string[];
  logoSrc: string;
  logoAlt: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = {
  github: "https://github.com/briccheng",
  linkedin: "https://www.linkedin.com/in/changyucheng/",
  resume:
    "https://drive.google.com/file/d/129eo5EBNneS-BgA3kFNpnr2HVEvBFHlV/view",
  email: "mailto:bricheng.job@gmail.com",
};

export const aboutText =
  "My name is Brian Cheng, and I'm currently pursuing a Master's degree in Computer Science at the University of Texas at Austin. I have 2 years of experience as a Software Test Engineer at Visa, developing automation tools using JavaScript, TypeScript, REST APIs, Java, and Selenium to improve testing efficiency and reduce manual processes. I also have experience in software development through internships and projects ranging from backend to full-stack applications.";

export const experiences: ExperienceItem[] = [
  {
    company: "Visa",
    role: "Software Engineer",
    duration: "2022 - Present",
    description:
      "Built automation tools and frameworks using JavaScript, TypeScript, REST APIs, Java, and Selenium to improve release confidence and reduce manual effort.",
    logoSrc: "/logos/visa.svg",
    logoAlt: "Visa placeholder logo",
  },
  {
    company: "Pennsylvania State University",
    role: "Grader and Learning Assistant",
    duration: "2021",
    description:
      "Supported course delivery by helping students with core engineering concepts, assisting instruction, and contributing to a stronger classroom learning experience.",
    logoSrc: "/logos/penn-state.svg",
    logoAlt: "Pennsylvania State University placeholder logo",
  },
  {
    company: "Allianz",
    role: "Intern",
    duration: "2019",
    description:
      "Delivered software across backend services and full-stack applications, emphasizing maintainable architecture, practical problem solving, and measurable product impact.",
    logoSrc: "https://media.licdn.com/dms/image/v2/C4D0BAQGHx9VjaPq_EQ/company-logo_200_200/company-logo_200_200/0/1630462389804/allianz_logo?e=1775692800&v=beta&t=55B9YXxhiEOC_2jPa2a-jh1DMocL_SRkhsdAcbh-8fg",
    logoAlt: "Allianz placeholder logo",
  },
];

export const education: EducationItem[] = [
  {
    school: "The University of Texas at Austin",
    degree: "Master of Science in Computer Science",
    duration: "2023 - 2025",
    courses: [
      "Deep Learning",
      "Machine Learning",
      "Natural Language Processing",
      "Advanced Operating Systems",
    ],
    logoSrc: "/logos/ut-austin.svg",
    logoAlt: "University of Texas at Austin placeholder logo",
  },
  {
    school: "Pennsylvania State University",
    degree: "Bachelor of Science in Computer Engineering",
    duration: "2018 - 2021",
    courses: [
      "Data Structures and Algorithms",
      "Computer Architecture",
      "Operating Systems",
      "Security",
      "Communication Network",
      "Computer Vision",
    ],


    logoSrc: "/logos/penn-state.svg",
    logoAlt: "Pennsylvania State University placeholder logo",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "Java",
      "Kotlin",
      "Golang",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "Karate",
      "Selenium",
      "JUnit",
      "SQL",
      "Astro",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "AI",
    items: ["RAG"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Automation Tooling",
    description:
      "A representative project focused on improving software testing efficiency through maintainable automation workflows and API-driven validation.",
    href: "https://github.com/briccheng",
    imageSrc: "/projects/automation.svg",
    imageAlt: "Abstract illustration for automation tooling project",
  },
  {
    title: "RAG Exploration",
    description:
      "A practical AI project exploring retrieval-augmented generation to improve relevance, grounding, and developer-facing productivity use cases.",
    href: "https://github.com/briccheng",
    imageSrc: "/projects/rag.svg",
    imageAlt: "Abstract illustration for RAG project",
  },
  {
    title: "Full-Stack Application Work",
    description:
      "A portfolio placeholder for backend and full-stack application projects spanning clean APIs, responsive interfaces, and end-to-end delivery.",
    href: "https://github.com/briccheng",
    imageSrc: "/projects/fullstack.svg",
    imageAlt: "Abstract illustration for full-stack application project",
  },
];
