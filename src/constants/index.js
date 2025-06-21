const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },

];

const words = [
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Build", imgPath: "/images/concepts.svg" },
  { text: "Plan", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Build", imgPath: "/images/concepts.svg" },
  { text: "Plan", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 6, suffix: "+", label: "Months of Front-end Learning" },
  { value: 10, suffix: "+", label: "Personal Projects Completed" },
  { value: 3, suffix: "", label: "Team Projects Participated" },
  { value: 80, suffix: "%", label: "Commitment to Learn & Grow" },
];

const logoIconsList = [
  {
    imgPath: "./images/logos/company-logo-1.png",
  },
  {
    imgPath: "./images/logos/company-logo-2.png",
  },
  {
    imgPath: "./images/logos/company-logo-3.png",
  },
  {
    imgPath: "./images/logos/company-logo-4.png",
  },
  {
    imgPath: "./images/logos/company-logo-5.png",
  },
  {
    imgPath: "./images/logos/company-logo-6.png",
  },
  {
    imgPath: "./images/logos/company-logo-7.png",
  },
  {
    imgPath: "./images/logos/company-logo-8.png",
  },
  {
    imgPath: "./images/logos/company-logo-9.png",
  },
  {
    imgPath: "./images/logos/company-logo-10.png",
  },
  {
    imgPath: "./images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Learning with Purpose",
    desc: "Continuously improving my frontend skills through real-world projects and best practices.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "Communicating clearly, asking for feedback, and staying aligned with team goals.",
  },
  {
    imgPath: "/images/time.png",
    title: "Responsible & Committed",
    desc: "Taking ownership of tasks and delivering on time with attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Javascript",
    imgPath: "/images/logos/company-logo-11.png  ",
  },
  {
    name: "Typescript",
    imgPath: "/images/logos/company-logo-9.png  ",
  },
  {
    name: "Sass",
    imgPath: "/images/logos/company-logo-6.png  ",
  },
];

const techStackIcons = [
  {
    name: "React ",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "View Demo",
    link: "https://tuann09.github.io/project-08/",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Drink Store Website",
    date: "2023 - 2024",
    responsibilities: [
      "Designed and developed a modern drink store website using HTML, SCSS, and JavaScript.",
      "Implemented a fully responsive layout for all screen sizes.",
      "Integrated light and dark theme switcher with smooth transitions.",
    ],
  },
  {
    review: "View Demo",
    link: "https://tuann09.github.io/playing-music/",
    imgPath: "/images/logo2.png",
    logoPath: "/images/logo2.png",
    title: "Music Player ",
    date: "2024",
    responsibilities: [
      "Built a responsive music player using HTML, CSS, and JavaScript.",
      "Implemented core features like play/pause, next/previous, and shuffle.",
      "Created a clean and modern interface with playlist support and active track display.",
    ],
  },
  {
    review: "View Demo",
    link: "https://react-vite-book.vercel.app/",
    imgPath: "/images/logo3.png",
    logoPath: "/images/logo3.png",
    title: "Online Bookstore Project",
    date: "2025",
    responsibilities: [
      "Developed an online bookstore using React and TypeScript with Ant Design UI library.",
      "Integrated VNPay for secure online payments and implemented Google OAuth login.",
      "Used refresh token strategy for authentication and improved user session handling.",
      "Built responsive interfaces for browsing, searching, and purchasing books.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
