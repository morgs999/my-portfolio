import ScrollAnimation from 'react-animate-on-scroll';
import { FaNode, FaAws } from "react-icons/fa";
import { SiReact, SiExpress, SiPython, SiSanity, SiGraphql, SiJavascript, SiTypescript, SiNextdotjs, SiCss3, SiBootstrap, SiTailwindcss, SiBulma, SiHtml5, SiMongodb, SiMysql, SiPostgresql, SiGithub, SiJira, SiFigma, SiVercel, SiHeroku, SiNetlify, SiKubernetes, SiSwift, SiXcode, SiPytest, SiMocha, SiJest, SiEslint, SiAmp, SiApachesuperset, SiAwselasticloadbalancing } from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

export default function Experienc() {
    const backend = [
        {
            name: "React JS",
            icon: <SiReact />,
            color: 'cyan'
        },
        {
            name: "Node JS and Express JS",
            icon: <FaNode />,
            color: 'green'
        },
        {
            name: "Python / Django",
            icon: <SiPython />,
            color: 'yellow'
        },
        {
            name: "C++",
            img: '/pngs/cpp_logo.png',
        },
        {
            name: "RESTful and SOAP APIs",
            icon: <TbApi />,
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
        }
    ];

    const frontend = [
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
            name: "CSS (Bootstrap, Tailwind, Bulma, etc.)",
            icon: <SiCss3 />,
            color: 'darkorange'
        },
        {
            name: "HTML",
            icon: <SiHtml5 />,
            color: 'royalblue'
        }
    ];

    const database = [
        {
            name: "MongoDB (NoSQL)",
            icon: <SiMongodb />,
        },
        {
            name: "MySQL (SQL)",
            icon: <SiMysql />,
        },
        {
            name: "PostgreSQL",
            icon: <SiPostgresql />,
        }
    ];

    const devops = [
        {
            name: "Github / Gitlab",
            icon: <SiGithub />,
        },
        {
            name: "Jira",
            icon: <SiJira />,
        },
        {
            name: "Figma",
            icon: <SiFigma />,
        },
        {
            name: "Vercel / Heroku / Netlify",
            icon: <SiVercel />,
        },
        {
            name: "Agile Development",
            icon: <SiAmp />,
        },
        {
            name: "OOP",
            icon: <SiAwselasticloadbalancing />,
        },
        {
            name: "MVC",
            icon: <SiExpress />,
        },
        {
            name: "CI/CD Pipelines",
            icon: <SiApachesuperset />,
        },
        {
            name: "AWS / GCP / Firebase",
            icon: <FaAws />,
        },
        {
            name: "Kubernetes / Docker",
            icon: <SiKubernetes />,
        }
    ];

    const mobile = [
        {
            name: "React Native",
            icon: <TbBrandReactNative />,
        },
        {
            name: "Swift",
            icon: <SiSwift />,
        },
        {
            name: "XCode",
            icon: <SiXcode />,
        }
    ];

    const testing = [
        {
            name: "Pytest",
            icon: <SiPytest />,
        },
        {
            name: "Mocha",
            icon: <SiMocha />,
        },
        {
            name: "Jest",
            icon: <SiJest />,
        },
        {
            name: "ESLint",
            icon: <SiEslint />,
        }
    ];


    return (
        <>
            <h1>Experience</h1><br></br><br></br>


            <table>
                {backend.map((item, index) => {
                    return (
                        <ScrollAnimation
                            offset={10}
                            animateIn='animate__fadeIn'
                            animateOnce='true'>

                            <tr key={index} className='table-row'>

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__bounceInLeft'
                                    duration={1}
                                    animateOnce='true'>

                                    <td className='table-item' style={{ color: `${item.color}` }}>{
                                        item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                    }</td>

                                </ScrollAnimation>

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__bounceInRight'
                                    duration={2}
                                    animateOnce='true'>

                                    <td className='table-item'>{item.name}

                                    </td>

                                </ScrollAnimation>

                            </tr>
                        </ScrollAnimation>
                    )
                })}
            </table >
            <table>
                {frontend.map((item, index) => {
                    return (
                        <tr key={index} className='table-row'>
                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                            }</td>
                            <td className='table-item'>{item.name}</td>
                        </tr>
                    )
                })}
            </table>



            <br></br><br></br><h1>Experience</h1><br></br><br></br>
        </>
    )
} 