/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Carlos Ramirez",
  title: "Hola a todos, Soy Carlos",
  subTitle: emoji(
    "Tengo 6 meses de experiencia creando apps web con JavaScript | TypeScript | React | Node.js | Java | Python. He trabajado en un CRM y un chatbot con LLMs 🚀. Me encanta aprender, trabajar en equipo y construir soluciones útiles."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-TlCRI2TtCJiz0tLrf9j95MmXZeX_rLQ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CarlosRaul04",
  linkedin: "https://www.linkedin.com/in/carlos-ramirez-cuentas-2a41b8245/",
  gmail: "carlos.ramirez.cuentas04@gmail.com",
  whatsapp: "https://wa.me/51943765155",
  // gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Lo que hago",
  subTitle:
    "Full Stack Developer que siempre busca nuevas herramientas que potencien el desarrollo de software.",
  skills: [
    emoji(
      "⚡ Desarrollo de Interfaces web interactivas, consumo de endpoints y trabajo con frameworks modernos como React.js y Next.js."
    ),
    emoji(
      "⚡ Experiencia en desarrollo de software a medida, creando sistemas CRUD y API REST, tanto de forma individual como en equipo."
    ),
    emoji(
      "⚡ Exploración de inteligencia artificial generativa, desarrollando soluciones prácticas como chatbots para optimizar tareas repetitivas."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad San Ignacio de Loyola",
      logo: require("./assets/images/usilLogo.jpg"),
      subHeader: "Ingeniería de Software",
      duration: "Marzo 2024 - En curso - 8 ciclo",
      desc: "Participación en proyectos de desarrollo de software y aplicaciones web.",
      descBullets: [
        "Desarrollo de aplicaciones web y sistemas de gestión.",
        "Asistencia a conferencias importantes como la Intercon 2024.",
        "Desarrollo de un semáforo con arduino y C."
      ]
    },
    {
      schoolName: "Instituto San Ignacio de Loyola",
      logo: require("./assets/images/isilLogo.png"),
      subHeader: "Desarrollo de Software",
      duration: "Marzo 2021 - Diciembre 2023",
      descBullets: [
        "Desarrollo de aplicaciones con Java, JavaScript y C#",
        "Desarrollo de API REST y sistemas CRUD",
        "Asistencia a conferencias",
        "Admnistración de bases de datos SQL Server Avanzado"
      ]
    },
    {
      schoolName: "Colegio Augusto Salazar Bondy",
      logo: require("./assets/images/bondyLogo.png"),
      subHeader: "Primaria y Secundaria Completa",
      duration: "2010 - Diciembre 2020"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Diseño", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desarrollador de Front-end y Lider de Sistemas",
      company: "Consigue-Ventas",
      companylogo: require("./assets/images/consigueventasonline_logo.jpg"),
      date: "Abril 2024 – Julio 2024",
      desc: "Durante mi participación en un proyecto de CRM, implementé funcionalidades como la inclusión de fotos de perfil, botones interactivos, consumo de endpoints e integraciones directas con el módulo de ventas.",
      descBullets: [
        "diseñé y desarrollé un sistema de generación de reportes de ventas utilizando React-PDF.",
        "Asumí el rol de Líder de Sistemas, liderando el desarrollo continuo del proyecto junto a un equipo comprometido.",
        "Colaboré con el anterior líder del núcleo en el despliegue del backend de un sistema de asistencias en Digital Ocean bajo un entorno Linux",
        "Utilicé las librerías Redux Toolkit, React-Query, Axios, Tailwind CSS, Shadcn-UI, Lucide React y Zod para mejorar la experiencia del usuario."
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos Grandes",
  subtitle: "ALGUNAS STARTUPS Y EMPRESAS A LAS QUE AYUDÉ A CREAR SU TECNOLOGÍA",
  projects: [
    {
      image: require("./assets/images/CRM.png"),
      projectName: "CRM FINANCIERO ",
      projectDesc:
        "Creación de modulos y botones interactivos | Reporte de Venta (React-PDF) | Filros en el Frontend React.js,Tailwind,Zod,Redux | Consumo de Endpoints (Axios) + CRUDS",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/asistencia.png"),
      projectName: "SISTEMA DE ASISTENCIAS",
      projectDesc:
        "Filros en el Frontend React.js,Tailwind,Zod,Redux | Consumo de Endpoints (Axios) + CRUDS | Despliegue en Digital Ocean",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://consigueventas.netlify.app/login"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y certificaciones 🏆"),
  subtitle:
    "¡Logros, certificaciones, cartas de premios y algunas cosas interesantes que he hecho!",

  achievementsCards: [
    {
      title: "Especialización en Desarrollo Back-End",
      subtitle:
        "En curso - Proyecto Ecomerce con Node.js y MongoDB | API REST | NPM | Express.JS | JWT",
      image: require("./assets/images/idatLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "IA Generativa - Desarrollo de Soluciones con Python",
      subtitle:
        "Chatbot de recomendación de películas con LLMs: una app que entiende los gustos del usuario usando RAG, ChromaDB y APIs. Monitoreada con LangSmith y desplegada en Docker.",
      image: require("./assets/images/cibertecLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificación",
          url: "https://drive.google.com/file/d/1mqJdt5hYQhxLrpl6Gw60kwjUThyZWJme/view?usp=drive_link"
        },
        {
          name: "Proyecto Final",
          url: "https://github.com/CarlosRaul04/Proyecto_LLM_ChatbotRecomendation"
        }
      ]
    },
    {
      title: "Power BI Intermedio-Avanzado",
      subtitle:
        "Herramientas prácticas para transformar datos en historias visuales, tomar mejores decisiones y comunicar insights con claridad.",
      image: require("./assets/images/netzun.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificación",
          url: "https://drive.google.com/file/d/1EH0BNQ3cGu8bDp7Z51gFXd3svtvaN8YR/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Tecnicatura en Desarrollo de Software",
      image: require("./assets/images/isilLogo2.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certificación",
          url: "https://drive.google.com/file/d/1gCLqYVWKNAb6qxtxejrvu8e-yUX_kPyR/view?usp=drive_link"
        }
        /*{
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Sientete libre de descargar mi CV",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "¿Discutir un proyecto o simplemente quieres saludar? Mi bandeja de entrada está abierta para todos.",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
