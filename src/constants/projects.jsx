import { SiApollographql, SiBootstrap, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiMui, SiNodedotjs, SiReact, SiTailwindcss, SiPython, SiDjango, SiMysql, SiHandlebarsdotjs, SiBulma } from 'react-icons/si';
import { TbApi } from "react-icons/tb";

export const projects = [
    {
        name: "SideShow4U",
        deploy: "https://sideshow4u-df733.web.app/",
        repo: "Private Repository",
        photo: "pngs/github-mark.png",
        description: "A FERN stack web application for connecting touring artists and boutique hotels, using assorted Firebase database tools and authentication.",
        tools: {
            frontend: ['React', 'MUI'],
            backend: ['Firebase', 'Node.js', 'Express']
        },
        icons: {
            frontend: [<SiReact />, <SiMui />],
            backend: [<SiFirebase />, <SiNodedotjs />, <SiExpress />]
        }
    },
    {
        name: "Insurasee",
        deploy: "https://insurasee.com",
        repo: "Private Repository",
        photo: "https://insurasee.com/insurasee.webp",
        description: "A MERN stack application for providing consumers with detailed reports Property Climate Data generated from public and private Climate Science APIs.",
        tools: {
            frontend: ['React', 'Bootstrap'],
            backend: ['MongoDB', 'Express', 'Node.js']
        },
        icons: {
            frontend: [<SiReact />, <SiBootstrap />],
            backend: [<SiMongodb />, <SiExpress />, <SiNodedotjs />]
        }
    },
    {
        name: "Math Mastery Blueprint",
        deploy: "https://mathmasteryblueprint.ca",
        repo: "https://github.com/morgs999/math-mastery-blueprint",
        photo: "pngs/mathmasteryblueprint.png",
        description: "A simple JS/HTML/CSS website for a K-12 math tutoring service, using MUI elements and a Calendly embed.",
        tools: {
            frontend: ['HTML5', 'CSS3', 'JavaScript', 'MUI'],
            backend: []
        },
        icons: {
            frontend: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiMui />],
            backend: []
        }
    },
    {
        name: "What's Up Doc",
        deploy: "https://linkedin.com/in/morgandclarke/",
        repo: "https://github.com/morgs999/Whats-Up-Doc",
        photo: "gifs/whatsupdoc.gif",
        description: "A full MERN stack application for an outpatient medical office, with user login authentication and admin functionality.",
        tools: {
            frontend: ['React', 'TailwindCSS'],
            backend: ['MongoDB', 'Apollo GraphQL', 'Node.js', 'Express']
        },
        icons: {
            frontend: [<SiReact />, <SiTailwindcss />],
            backend: [<SiMongodb />, <SiApollographql />, <SiNodedotjs />, <SiExpress />]
        }
    },
    {
        name: 'Literature Blog',
        deploy: 'https://morgan-clarke-blog-9b6bfcffe1b8.herokuapp.com/',
        repo: 'https://github.com/morgs999/myBlog',
        photo: 'pngs/github-mark.png',
        description: 'A blog built with Django and Python, with user authentication and commenting functionality.',
        tools: {
            frontend: ['Django'],
            backend: ['Python']
        },
        icons: {
            frontend: [<SiDjango />],
            backend: [<SiPython />]
        }
    },
    {
        name: "Anyways, Here's Wonderwall",
        deploy: "No longer deployed.",
        repo: "https://github.com/Levi-Man/Wonderwall",
        photo: "gifs/anywayhereswonderwall.gif",
        description: "The Wonderwall Website allows a user to search for artists and scroll through their discography (via generated album covers), or look up the Billboard Top 10 from any year to find songs they want to revisit that nostalgia wave with.",
        tools: {
            frontend: ['Handlebars.js', 'Javascript', 'Bootstrap'],
            backend: ['RESTful API', 'Node.js', 'Express', 'MySQL']
        },
        icons: {
            frontend: [<SiHandlebarsdotjs />, <SiJavascript />, <SiBootstrap />],
            backend: [<TbApi />, <SiMysql />, <SiNodedotjs />, <SiExpress />]
        }
    },
    {
        name: "Leftover Lover",
        deploy: "No longer deployed.",
        repo: "https://github.com/DamirFM/The-Leftover-Lover",
        photo: "gifs/leftoverlover.gif",
        description: "The Leftover Lover web application allows you to input an ingredient you have sitting unused in your fridge, and find a delicious recipe to make for dinner!",
        tools: {
            frontend: ['HTML5', 'Bulma CSS', 'JavaScript', 'RESTful API'],
            backend: []
        },
        icons: {
            frontend: [<SiHtml5 />, <SiBulma />, <SiJavascript />, <TbApi />],
            backend: []
        }
    },
    {
        name: "Weather Dashboard",
        deploy: "https://morgs999.github.io/Weather-Dashboard/",
        repo: "https://github.com/morgs999/Weather-Dashboard",
        photo: "gifs/weatherdashboard.gif",
        description: "A web application that provides a user to search for their city, and return today's detailed forecast, as well as a five day forecast to plan ahead with.",
        tools: {
            frontend: ['HTML5', 'CSS3', 'JavaScript', 'RESTful API'],
            backend: []
        },
        icons: {
            frontend: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <TbApi />],
            backend: []
        }
    },
    {
        name: "Tech Blog",
        deploy: "Not currently deployed.",
        repo: "https://github.com/morgs999/Tech-Blog",
        photo: "gifs/techblog.gif",
        description: "An interactive blogging website that allows users to post blogs and comment on fellow blogs, with a login system locking out unauthorized users.",
        tools: {
            frontend: ['Handlebars.js', 'Javascript'],
            backend: ['MySQL', 'Node.js', 'Express']
        },
        icons: {
            frontend: [<SiHandlebarsdotjs />, <SiJavascript />],
            backend: [<SiMysql />, <SiNodedotjs />, <SiExpress />]
        }
    },
    {
        name: "Stock Portfolio Generator",
        deploy: "Not currently deployed.",
        repo: "https://github.com/sheridan-python/assignment-7-portfolio-generator-morgs999",
        photo: "gifs/stockportfolio.gif",
        description: "A purely Python application that generates a stock portfolio based on user input, using the IEX Trading API to pull real-time stock data.",
        tools: {
            frontend: [],
            backend: ['Python', 'RESTful API']
        },
        icons: {
            frontend: [],
            backend: [<SiPython />, <TbApi />]
        }
    }
    // punkangular
    // onlineexercises
    // plugins
];