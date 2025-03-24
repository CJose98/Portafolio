import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  java,
  boostrap,
  flask,
  linux,
  mysql,
  postman,
  nodejs,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "study",
    title: "Study",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "FullStack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "boostrap",
    icon: boostrap,
  },

];


// Datos para estudios superiores
const estudiosSuperiores = [
  {
    title: "Tec. en Informática",
    subtitle: "Terciario LA NORMAL",
    duration: "2017 - 2019 (finalizado)",
  },
  {
    title: "Tec. en Programación",
    subtitle: "Universidad UNSA",
    duration: "2020 - 2022 (-)",
  },
  {
    title: "Tec. en Desarrollo de Software",
    subtitle: "Universidad UPATECO",
    duration: "2022 - 2025 (finalizado)",
  },
];

// Datos para cursos
const cursos = [
  {
    title: "Programación con Java",
    subtitle: "Universidad UNSA",
    duration: "2022 (finalizado)",
  },
  {
    title: "Programación con JavaScript",
    subtitle: "Argentina Programa",
    duration: "2023 (finalizado)",
  },
  {
    title: "Ciberseguridad",
    subtitle: "Universidad UPATECO",
    duration: "2024 (finalizado)",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


export { services, estudiosSuperiores, cursos, technologies, projects};
