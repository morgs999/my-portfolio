import { FaNode, FaAws } from "react-icons/fa";
import { SiReact, SiExpress, SiPython, SiSanity, SiGraphql, SiJavascript, SiTypescript, SiNextdotjs, SiCss3, SiBootstrap, SiTailwindcss, SiBulma, SiHtml5, SiMongodb, SiMysql, SiPostgresql, SiGithub, SiJira, SiFigma, SiVercel, SiHeroku, SiNetlify, SiKubernetes, SiSwift, SiXcode, SiPytest, SiMocha, SiJest, SiEslint, SiAmp, SiApachesuperset, SiAwselasticloadbalancing, SiCplusplus, SiDjango } from "react-icons/si";
import { TbApi, TbBrandReactNative, TbBoxModel } from "react-icons/tb";

export const expTable = {
    backend: {
        title: 'Back End Experience',
        rows: [
            // {
            //     name: "React JS",
            //     icon: <SiReact />,
            //     color: 'cyan'
            // },
            {
                name: "Node JS",
                icon: <FaNode />,
                color: 'green'
            },
            {
                name: "Express JS",
                icon: <SiExpress />,
                color: 'black'
            },
            {
                name: "Python",
                icon: <SiPython />,
                color: 'yellow'
            },
            {
                name: "C++",
                icon: <SiCplusplus />,
                color: 'blue'
            },
            {
                name: "RESTful APIs",
                icon: <TbApi />,
                color: 'darkgrey'
            },
            {
                name: "Sanity IO CMS",
                icon: <SiSanity />,
                color: 'red'
            },
        ]
    },
    frontend: {
        title: 'Front End Experience',
        rows: [
            {
                name: "React",
                icon: <SiReact />,
                color: 'cyan'
            },
            {
                name: "Javascript",
                icon: <SiJavascript />,
                color: '#f7c743'
            },
            {
                name: "Typescript",
                icon: <SiTypescript />,
                color: '#57a6fa'
            },
            {
                name: "Next JS",
                icon: <SiNextdotjs />,
                color: '#000000'
            },
            {
                name: "Django",
                icon: <SiDjango />,
                color: 'darkgreen'
            },
            {
                name: "CSS",
                icon: <SiCss3 />,
                color: 'darkorange'
            },
            {
                name: "HTML",
                icon: <SiHtml5 />,
                color: 'royalblue'
            }]
    },
    devops: {
        title: 'DevOps Experience',
        rows: [
            {
                name: "Github / Gitlab",
                icon: <SiGithub />,
                color: 'black'
            },
            {
                name: "Jira",
                icon: <SiJira />,
                color: 'blue'
            },
            {
                name: "Figma",
                icon: <SiFigma />,
                color: 'red'
            },
            // {
            //     name: "Vercel / Heroku / Netlify",
            //     icon: <SiVercel />,
            //     color: 'black'
            // },
            {
                name: "Agile Development",
                icon: <SiAmp />,
                color: 'darkblue'
            },
            {
                name: "OOP",
                icon: <SiAwselasticloadbalancing />,
                color: '#b53410'
            },
            {
                name: "MVC",
                icon: <TbBoxModel />,
                color: '#ada221'
            },
            {
                name: "CI/CD Pipelines",
                icon: <SiApachesuperset />,
                color: 'purple'
            },
            // {
            //     name: "AWS / GCP / Firebase",
            //     icon: <FaAws />,
            //     color: 'orange'
            // },
            // {
            //     name: "Kubernetes / Docker",
            //     icon: <SiKubernetes />,
            //     color: 'darkblue'
            // }
        ]
    },
    database: {
        title: 'Database Experience',
        rows: [
            {
                name: "MongoDB (NoSQL)",
                icon: <SiMongodb />,
                color: 'darkgreen'
            },
            {
                name: "MySQL (SQL)",
                icon: <SiMysql />,
                color: 'lightblue'
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql />,
                color: 'darkblue'
            },
            {
                name: "GraphQL and GROQ",
                icon: <SiGraphql />,
                color: 'pink'
            },
        ]
    },
    mobile: {
        title: 'Mobile Experience',
        rows: [{
            name: "React Native",
            icon: <TbBrandReactNative />,
            color: 'blue'
        },
        {
            name: "Swift",
            icon: <SiSwift />,
            color: 'orange'
        },
        {
            name: "XCode",
            icon: <SiXcode />,
            color: 'black'
        }]
    },
    testing: {
        title: 'Testing Experience',
        rows: [{
            name: "Pytest",
            icon: <SiPytest />,
            color: 'green'
        },
        {
            name: "Mocha",
            icon: <SiMocha />,
            color: 'darkred'
        },
        {
            name: "Jest",
            icon: <SiJest />,
            color: 'darkblue'
        },
        {
            name: "ESLint",
            icon: <SiEslint />,
            color: 'brown'
        }]
    }
}
