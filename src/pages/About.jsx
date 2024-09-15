import Experience from '../components/Experience';
import ScrollAnimation from 'react-animate-on-scroll';
import { RiReactjsLine } from "react-icons/ri";

export default function About() {
    return (
        <>
            <div className="container intro-container p-5">

                <h1 id='intro-name'>Morgan Clarke</h1>

                <h3 id='intro-1'>
                    I am a Full Stack Software Developer with experience in extensive Front End and Back End languages, frameworks, and libraries.  I create elegant yet powerful code that utilizes cutting edge tools to deploy intuitive software applications.
                </h3>
                <h5 id='intro-2'>
                    Having worked as an audio engineer for the last decade plus, I am fascinated by the inventive component of coding; in conjunction, I am also methodical in leveraging the necessary tools to solve tricky problems.
                </h5>
                <ul id='intro-ul'>
                    This extensive experience combining creative solutions with effective communication and organization allows me to:
                </ul>
                <li id='intro-li-1'>
                    Keep up in fast-paced work environments
                </li>
                <li id='intro-li-2'>
                    Handles stressful situations with the end goal always in mind
                </li>
                <li id='intro-li-3'>
                    Quickly adapt to cutting edge technologies
                </li>
                <li id='intro-li-4'>
                    Approach each problem with a combination of logical understanding and creative flair
                </li>

            </div>

            <div className='container exp-container p-5'>
                <Experience />

                <div id='exp-backend'>
                    <ScrollAnimation
                        animateIn='animate__fadeIn'
                        duration={2}>
                        <h2>Back End Experience</h2>
                    </ScrollAnimation>
                    <ul>
                        <ScrollAnimation animateIn='animate__bounceInRight'>
                            <li>
                                <RiReactjsLine style={{ color: 'cyan', fontSize: '5em' }} />
                                React
                            </li>
                        </ScrollAnimation>
                        <li>Node JS and Express JS</li>
                        <li>Python / Django</li>
                        <li>C++</li>
                        <li>RESTful and SOAP APIs</li>
                        <li>Sanity IO CMS</li>
                        <li>GraphQL and GROQ</li>
                    </ul>
                </div>


                <div id='exp-frontend'>
                    <h2>Front End Experience</h2>
                    <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Next JS</li>
                        <li>CSS (Bootstrap, Tailwind, Bulma, etc.)</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div id='exp-database'>
                    <h2>Database Experience</h2>
                    <ul>
                        <li>MongoDB (NoSQL)</li>
                        <li>MySQL (SQL)</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div id='exp-devops'>
                    <h2>DevOps Experience</h2>
                    <ul>
                        <li>Github / Gitlab</li>
                        <li>Jira</li>
                        <li>Figma</li>
                        <li>Vercel / Heroku / Netlify</li>
                        <li>Agile Development</li>
                        <li>OOP</li>
                        <li>MVC</li>
                        <li>CI/CD Pipelines</li>
                        <li>AWS / GCP / Firebase</li>
                        <li>Kubernetes / Docker</li>
                    </ul>
                </div>
                <div id='exp-mobile'>
                    <h2>Mobile Development Experience</h2>
                    <ul>
                        <li>React Native</li>
                        <li>Swift</li>
                        <li>XCode</li>
                    </ul>
                </div>
                <div id='exp-testing'>
                    <h2>Testing Experience</h2>
                    <ul>
                        <li>Pytest</li>
                        <li>Mocha</li>
                        <li>Jest</li>
                        <li>ESLint</li>
                    </ul>
                </div>
            </div >
        </>
    )
}