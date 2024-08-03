import ReactIcon from "../icons/React"
import type { Skills, Experiences, Projects, Studies } from "../types";


export const skills: Skills[] = [
  {
    id: 1,
    title: "React",
    color: "cyan",
    icon: ReactIcon
  },
  {
    id: 2,
    title: "Angular",
    color: "red",
    icon: ReactIcon
  },
  {
    id: 3,
    title: "Next.js",
    color: "black",
    icon: ReactIcon
  },
  {
    id: 4,
    title: "JavaScript",
    color: "amber",
    icon: ReactIcon
  },
  {
    id: 5,
    title: "Mithril.js",
    color: "white",
    icon: ReactIcon
  },
  {
    id: 6,
    title: "PHP",
    color: "blue",
    icon: ReactIcon
  },
  {
    id: 7,
    title: "HTML",
    color: "indigo",
    icon: ReactIcon
  },
  {
    id: 8,
    title: "CSS",
    color: "blue",
    icon: ReactIcon
  },
  {
    id: 9,
    title: "MySQL",
    color: "blue-yellow",
    icon: ReactIcon
  },
  {
    id: 10,
    title: "Semantic UI",
    color: "teal",
    icon: ReactIcon
  }
];

export const experiences: Experiences[] = [
  {
    id: 1,
    title: "Oscala / Das Automotive",
    description: "Elaboración de una página web corporativa completa y mantenimiento de la misma. Elaboración de la versión móvil del CRM propio. Comprobación de inventario y mantenimiento de scrapers.",
    extended_description: "Equipo pequeño,",
    start_date: "11 / 2022",
    end_date: "2 / 2024",
    tecnologies: [skills[0], skills[2], skills[3], skills[5], skills[6], skills[7], skills[8]]
  },
  {
    id: 2,
    title: "Digital Value",
    description: "Elaboración de la página del fondo botánico del museo de la huerta de Almàssera. Foro para atención ciudadana.",
    extended_description: "Prácticas de la FPII Desarrollo de Aplicaciones Web",
    start_date: "10 / 2020",
    end_date: "3 / 2021",
    tecnologies: [skills[3], skills[4], skills[9]]
  },
  {
    id: 3,
    title: "Hospital Arnau de Vilanova",
    description: "Aplicación de gestión de pruebas médicas (radiografías, TACs, etc.)",
    extended_description: "Prácticas de la FPII Administración de Sistemas Informáticos en Red",
    start_date: "3 / 2017",
    end_date: "6 / 2017",
    tecnologies: [skills[3], skills[5]]
  }
]

export const studies: Studies[] = [
  {
    id: 1,
    title: "Formación profesional de grado superior (FPII)",
    subtitle: "Desarrollo de aplicaciones web",
    college: "IES Conselleria",
    city: "Valencia, España",
    start_date: "2018",
    end_date: "2021",
    tecnologies: [skills[1]]
  },
  {
    id: 2,
    title: "Formación profesional de grado superior (FPII)",
    subtitle: "Administración de sistemas informáticos en red",
    college: "IES Conselleria",
    city: "Valencia, España",
    start_date: "2015",
    end_date: "2017",
    tecnologies: []
  },
  {
    id: 3,
    title: "Bachillerato",
    subtitle: "",
    college: "Colegio María Auxiliadora",
    city: "Valencia, España",
    start_date: "2013",
    end_date: "2015",
    tecnologies: []
  }
]

export const projects: Projects[] = [
  {
    id: 1,
    title: "Das Automotive",
    description: "Mi primera página diseñada específicamente para un proyecto y una empresa en concreto. Puedes ",
    image: "/src/assets/projects/project1.png",
    link: "https://dasautomotive.nl/",
    main_project: true,
    tecnologies: [skills[0], skills[2], skills[3]]
  },
  {
    id: 2,
    title: "Museu de l'horta (Almassera)",
    description:
      "Proyecto que realicé en Digital Value. Esta aplicación te deja ver las plantas, árboles y flores que se alojan en el museo de la huerta de Almàssera.",
    image: "/src/assets/projects/project2.png",
    link: "https://museuetnologia.almassera.es/Fons_botanic?locale=es",
    main_project: true,
    tecnologies: [skills[3], skills[4], skills[9]]
  },
];