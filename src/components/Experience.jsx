import { Grid } from '@mui/material';
import { FaNode, FaAws } from "react-icons/fa";
import { SiReact, SiExpress, SiPython, SiSanity, SiGraphql, SiJavascript, SiTypescript, SiNextdotjs, SiCss3, SiBootstrap, SiTailwindcss, SiBulma, SiHtml5, SiMongodb, SiMysql, SiPostgresql, SiGithub, SiJira, SiFigma, SiVercel, SiHeroku, SiNetlify, SiKubernetes, SiSwift, SiXcode, SiPytest, SiMocha, SiJest, SiEslint, SiAmp, SiApachesuperset, SiAwselasticloadbalancing, SiCplusplus } from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";


export default function Experience() {
    const exp = {
        backend: {
            title: 'Back End Experience',
            rows: [
                {
                    name: "React JS",
                    icon: <SiReact className='text-secondary' />,
                    color: 'cyan'
                },
                {
                    name: "Node JS and Express JS",
                    icon: <FaNode className='text-primary' />,
                    color: 'green'
                },
                {
                    name: "Python / Django",
                    icon: <SiPython />,
                    color: 'yellow'
                },
                {
                    name: "C++",
                    icon: <SiCplusplus />,
                    color: 'blue'
                },
                {
                    name: "RESTful and SOAP APIs",
                    icon: <TbApi className='text-primary' />,
                    color: 'darkgrey'
                },
                {
                    name: "Sanity IO CMS",
                    icon: <SiSanity />,
                    color: 'red'
                },
                {
                    name: "GraphQL and GROQ",
                    icon: <SiGraphql />,
                    color: 'darkblue'
                }]
        },
        frontend: {
            title: 'Front End Experience',
            rows: [
                {
                    name: "React",
                    icon: <SiReact />,
                    color: '#0587ab'
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
                {
                    name: "Vercel / Heroku / Netlify",
                    icon: <SiVercel />,
                    color: 'black'
                },
                {
                    name: "Agile Development",
                    icon: <SiAmp />,
                    color: 'darkblue'
                },
                {
                    name: "OOP",
                    icon: <SiAwselasticloadbalancing />,
                    color: 'bloodorange'
                },
                {
                    name: "MVC",
                    icon: <SiExpress />,
                    color: 'darkyellow'
                },
                {
                    name: "CI/CD Pipelines",
                    icon: <SiApachesuperset />,
                    color: 'purple'
                },
                {
                    name: "AWS / GCP / Firebase",
                    icon: <FaAws />,
                    color: 'orange'
                },
                {
                    name: "Kubernetes / Docker",
                    icon: <SiKubernetes />,
                    color: 'darkblue'
                }]
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

    return (
        <>
            <Grid container spacing={1}>

                {Object.entries(exp).map(([key, value]) => {
                    return (
                        <Grid className='table'>
                            <div id={key} className='exp-title'>
                                <h5>
                                    {value.title}
                                </h5>
                                <div className=''>
                                    {value.rows.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='table-row'>
                                                    <div className='exp-icon'>
                                                        {item.icon}
                                                    </div>
                                                    <p className='table-item'>{item.name}</p>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </Grid>
                    )
                })}

            </Grid>
        </>
    )
} 