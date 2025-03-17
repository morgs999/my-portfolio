import Experience from '../components/Experience';
import 'animate.css';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Portfolio from './Portfolio';

export default function About() {
    return (
        <>
            <div className="container intro-container p-5">
                {/* <h1 className="signature" id=''>Morgan Clarke</h1> */}

                <h3 id="intro-1">
                    I am a Full Stack Software Developer with experience in extensive Front End and Back End languages, frameworks, and libraries.  I create elegant yet powerful code that utilizes cutting edge tools to deploy intuitive software applications.
                </h3>

                <h5 id='intro-2'>
                    Having worked as an audio engineer for the last decade plus, I am fascinated by the inventive component of coding; in conjunction, I am also methodical in leveraging the necessary tools to solve tricky problems.
                </h5>

                <ul id='intro-ul'>
                    This extensive experience combining creative solutions with effective communication and organization allows me to:

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
                </ul>


            </div>

            <div className='container exp-container'>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <Experience />
                </ScrollAnimation>
            </div >

        </>
    )
}