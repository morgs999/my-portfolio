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
            name: "CSS",
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
        }
    ];

    const devops = [
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
        }
    ];

    const mobile = [
        {
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
        }
    ];

    const testing = [
        {
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
        }
    ];


    return (
        <>
            <div className="container d-flex flex-row flex-wrap m-3 p-3 max">

                {/* BACK END SECTION */}
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr key='tablehead'>
                            <th>
                                Back End Experience
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {backend.map((item, index) => {
                            return (

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__fadeIn'
                                    animateOnce={true}>

                                    <tr key={index} className='table-row'>


                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInLeft'
                                            duration={1}
                                            animateOnce={true}>

                                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                            }</td>

                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInRight'
                                            duration={2}
                                            animateOnce={true}>

                                            <td className='table-item'>{item.name}

                                            </td>

                                        </ScrollAnimation>

                                    </tr>
                                </ScrollAnimation>
                            )
                        }
                        )}
                    </tbody>
                </table >

                {/* FRONT END SECTION */}
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr key='tablehead'>
                            <th>
                                Front End Experience
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {frontend.map((item, index) => {
                            return (

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__fadeIn'
                                    animateOnce={true}>

                                    <tr key={index} className='table-row'>


                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInLeft'
                                            duration={1}
                                            animateOnce={true}>

                                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                            }</td>

                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInRight'
                                            duration={2}
                                            animateOnce={true}>

                                            <td className='table-item'>{item.name}

                                            </td>

                                        </ScrollAnimation>

                                    </tr>
                                </ScrollAnimation>
                            )
                        }
                        )}
                    </tbody>
                </table >

                {/* DATABASE SECTION */}
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr key='tablehead'>
                            <th>
                                Database Experience
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {database.map((item, index) => {
                            return (

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__fadeIn'
                                    animateOnce={true}>

                                    <tr key={index} className='table-row'>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInLeft'
                                            duration={1}
                                            animateOnce={true}>

                                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                            }</td>

                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInRight'
                                            duration={2}
                                            animateOnce={true}>

                                            <td className='table-item'>{item.name}

                                            </td>

                                        </ScrollAnimation>
                                    </tr>
                                </ScrollAnimation>
                            )
                        }
                        )}
                    </tbody>
                </table >

                {/* DEVOPS SECTION */}
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr key='tablehead'>
                            <th>
                                DevOps Experience
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {devops.map((item, index) => {
                            return (

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__fadeIn'
                                    animateOnce={true}>

                                    <tr key={index} className='table-row'>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInLeft'
                                            duration={1}
                                            animateOnce={true}>

                                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                            }</td>

                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInRight'
                                            duration={2}
                                            animateOnce={true}>

                                            <td className='table-item'>{item.name}

                                            </td>

                                        </ScrollAnimation>
                                    </tr>
                                </ScrollAnimation>
                            )
                        }
                        )}
                    </tbody>
                </table >

                {/* MOBILE SECTION */}
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr key='tablehead'>
                            <th>
                                Mobile Experience
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {mobile.map((item, index) => {
                            return (

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__fadeIn'
                                    animateOnce={true}>

                                    <tr key={index} className='table-row'>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInLeft'
                                            duration={1}
                                            animateOnce={true}>

                                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                            }</td>

                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInRight'
                                            duration={2}
                                            animateOnce={true}>

                                            <td className='table-item'>{item.name}

                                            </td>

                                        </ScrollAnimation>
                                    </tr>
                                </ScrollAnimation>
                            )
                        }
                        )}
                    </tbody>
                </table >

                {/* TESTING SECTION */}
                <table style={{ border: '1px solid black' }}>
                    <thead>
                        <tr key='tablehead'>
                            <th>
                                Testing Experience
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {testing.map((item, index) => {
                            return (

                                <ScrollAnimation
                                    offset={10}
                                    animateIn='animate__fadeIn'
                                    animateOnce={true}>

                                    <tr key={index} className='table-row'>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInLeft'
                                            duration={1}
                                            animateOnce={true}>

                                            <td className='table-item' style={{ color: `${item.color}` }}>{
                                                item.icon ? item.icon : <img src={item.img} alt={item.name} style={{ height: "6vh" }} />
                                            }</td>

                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            offset={10}
                                            animateIn='animate__bounceInRight'
                                            duration={2}
                                            animateOnce={true}>

                                            <td className='table-item'>{item.name}

                                            </td>

                                        </ScrollAnimation>
                                    </tr>
                                </ScrollAnimation>
                            )
                        }
                        )}
                    </tbody>
                </table >


            </div>
        </>
    )
} 