import GrowhubIcon from "@/assets/GrowhubIcon.png";
import huellitasPagina from "@/assets/huellitasPagina.png";
import growhubPage from "@/assets/growhubPage.png";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  imageCover: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink?: string;
  methodology: string;
  projectImages: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Woof and Dodge",
    description:
      "Retro-style videogame developed as a milestone project during my Web Development Bootcamp. This project served as a deep dive into Vanilla JavaScript, focusing on DOM manipulation, collision logic, and state management without the use of external libraries.",
    imageCover: GrowhubIcon,
    technologies: ["HTML, CSS, Javascript, DOM Manipulation, GitHub Projects, Excalidraw, Figma."],
    githubLink: "https://github.com/AlejandroDuqueG-design/Woof-n-Dodge-My-Videogame",
    liveDemoLink: "",
    methodology:
      "This videogame was conceived as my first major milestone in the bootcamp. The goal was to bridge the gap between theoretical logic and a functional, interactive product. I focused heavily on the event-driven nature of JavaScript, using event listeners to capture user input and translating those actions into visual changes on the screen. It was a deep dive into managing the Game Loop, balancing constant state updates with efficient DOM rendering to keep the gameplay smooth and bug-free",
    projectImages: [{ src: "", alt: "" }],
  },
  {
    id: "1",
    title: "GrowHub",
    description:
      "A full-cycle inventory manager that allows users to perform all CRUD operations (Create, Read, Update, Delete) on their plant collections. It features structured data handling for scientific nomenclature and automated watering routines, ensuring a seamless interface between the user and their data.",
    imageCover: "jajaja",
    technologies: ["HTML, CSS, Javascript, React, GitHub Projects, Excalidraw, Figma."],
    githubLink: "https://github.com/AlejandroDuqueG-design/Huellitas-client",
    liveDemoLink: "https://growhub-app.netlify.app/",
    methodology: "",
    projectImages: [{ src: growhubPage, alt: "Layout GrowHub Dashboard" }],
  },
  {
    id: "2",
    title: "Huellitas",
    description:
      "Full-Stack application designed to streamline dog shelter operations. This project features a custom-built Authentication & Authorization system, implementing distinct user roles (Admin vs. Client). While users can browse and interact with pets, the Admin dashboard leverages full CRUD capabilities to manage the shelter's database, ensuring data integrity and secure access control.",
    imageCover: "hahsa",
    technologies: ["HTML, CSS, Javascript, React, React Bootstrap, MongoDB, Postman, Excalidraw, Figma."],
    githubLink: "https://github.com/AlejandroDuqueG-design/Huellitas-client",
    liveDemoLink: "https://huellitas-app.netlify.app/",
    methodology: "",
    projectImages: [{ src: huellitasPagina, alt: "Layout Huellitas Dashboard" }],
  },
];
