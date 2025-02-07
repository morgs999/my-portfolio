import { SiApollographql, SiBootstrap, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiMui, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export const projects = {
    sideshow: {
        name: "SideShow4U",
        deploy: "In development!",
        repo: "Private Repository",
        photo: "",
        description: "A FERN stack web application for connecting touring artists and boutique hotels, using assorted Firebase database tools and authentication.",
        tools: {
            frontend: [<SiReact />, <SiMui />,],
            backend: [<SiFirebase />, <SiNodedotjs />, <SiExpress />]
        }
    },
    insurasee: {
        name: "Insurasee",
        deploy: "https://insurasee.com",
        repo: "Private Repository",
        photo: "https://insurasee.com/insurasee.webp",
        description: "A MERN stack application for providing consumers with detailed reports Property Climate Data generated from public and private Climate Science APIs.",
        tools: {
            frontend: [<SiReact />, <SiBootstrap />,],
            backend: [<SiMongodb />, <SiExpress />, <SiNodedotjs />]

        }
    },
    mathmastery: {
        name: "Math Mastery Blueprint",
        deploy: "https://mathmasteryblueprint.ca",
        repo: "https://github.com/morgs999/math-mastery-blueprint",
        photo: "pngs/mathmasteryblueprint.png",
        description: "A simple JS/HTML/CSS website for a K-12 math tutoring service, using MUI elements and a Calendly embed.",
        tools: {
            frontend: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiMui />],
        }
    },
    whatsupdoc: {
        name: "What's Up Doc",
        deploy: "https://linkedin.com/in/morgandclarke/",
        repo: "https://github.com/morgs999/Whats-Up-Doc",
        photo: "gifs/whatsupdoc.gif",
        description: "A full MERN stack application for an outpatient medical office, with user login authentication and admin functionality.",
        tools: {
            frontend: [<SiReact />, <SiTailwindcss />],
            backend: [<SiMongodb />, <SiApollographql />, <SiNodedotjs />, <SiExpress />]
        }
    },
    literatureblog: {
        name: "Literature Blog",
        deploy: "",
        repo: "",
        photo: "",
        description: "",
        tools: {
            frontend: [],
            backend: []
        }
    },
    wonderwall: {
        name: "Anyways, Here's Wonderwall",
        deploy: "https://wonderwall-196032f35f7e.herokuapp.com/",
        repo: "https://github.com/Levi-Man/Wonderwall",
        photo: "gifs/anywayhereswonderwall.gif",
        description: "",
        tools: {
            frontend: [],
            backend: []
        }
    },
    leftoverlover: {
        name: "Leftover Lover",
        deploy: "https://damirfm.github.io/leftover/",
        repo: "https://github.com/DamirFM/The-Leftover-Lover",
        photo: "gifs/leftoverlover.gif",
        description: "",
        tools: {
            frontend: [],
            backend: []
        }
    },
    weatherdash: {
        name: "Weather Dashboard",
        deploy: "https://morgs999.github.io/Weather-Dashboard/",
        repo: "https://github.com/morgs999/Weather-Dashboard",
        photo: "gifs/weatherdashboard.gif",
        description: "",
        tools: {
            frontend: [],
            backend: []
        }
    },
    techblog: {
        name: "Tech Blog",
        deploy: "https://github.com/morgs999/Tech-Blog",
        repo: "https://github.com/morgs999/Tech-Blog",
        photo: "gifs/techblog.gif",
        description: "",
        tools: {
            frontend: [],
            backend: []
        }
    },
    stockportfolio: {
        name: "Stock Portfolio Generator",
        deploy: "https://github.com/sheridan-python/assignment-7-portfolio-generator-morgs999",
        repo: "https://github.com/sheridan-python/assignment-7-portfolio-generator-morgs999",
        photo: "gifs/stockportfolio.gif",
        description: "",
        tools: {
            frontend: [],
            backend: []
        }
    },
    // punkangular: {},
    // onlineexercises: {},
    // plugins: {},
}