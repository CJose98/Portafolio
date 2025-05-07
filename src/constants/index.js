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
  servify,
  discord,
  spotify,
  restaurante,
  supermercado,
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
    name: "Servify",
    description:
      "A web-based platform that allows users to search, book, and manage various services, providing a convenient and efficient solution to people's needs.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "Django",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "npm",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: servify,
    source_code_link: "https://github.com/TinchoARS/FrontServices",
  },
  {
    name: "Discor",
    description:
      "A web-based messaging application that allows for user registration and authentication, server and channel creation and management, and real-time chat communication.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "flask",
        color: "orange-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/CJose98/UI_web_app.git",
  },
  {
    name: "Spotify",
    description:
      "Web application that offers an intuitive user experience for managing and browsing songs, artists, genres, and albums..",
    tags: [
      {
        name: "API (Django)",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "npm",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "bulma",
        color: "green-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/CJose98/Song_react.git",
  },

  {
    name: "Restaurante",
    description:
      "Complete web application for a restaurant that includes a corporate presentation of the establishment, an interactive digital menu, a food sales system, and a responsive design.",
    tags: [
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: restaurante,
    source_code_link: "https://github.com/CJose98/Pro_restaurante.git",
  },
  {
    name: "Supermercado",
    description:
      "A platform that allows companies to monitor sales and product inventory, allowing customers to purchase online.",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "MySql",
        color: "orange-text-gradient",
      },
      {
        name: "uml",
        color: "orange-text-gradient",
      },

    ],
    image: supermercado,
    source_code_link: "https://github.com/CJose98/Java_Supermercado.git",
  },
];


export { services, estudiosSuperiores, cursos, technologies, projects};
