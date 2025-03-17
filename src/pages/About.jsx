import Experience from '../components/Experience';
import 'animate.css';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Portfolio from './Portfolio';
import { Typography } from '@mui/material';

export default function About() {
    return (
        <>
            <div className="container intro-container pt-5 d-flex flex-column justify-content-center align-items-center">

                <div id="intro-1">
                    <Typography variant='h5' className=''>
                        I am a Full Stack Software Developer with experience in extensive Front End and Back End languages, frameworks, and libraries.  I create elegant yet powerful code that utilizes cutting edge tools to deploy intuitive software applications.
                    </Typography>
                </div>

                <div id='intro-2'>
                    <Typography variant='h6' className=' mt-2 p-3'>
                        Having worked as an audio engineer for the last decade plus, I am fascinated by the inventive component of coding; in conjunction, I am also methodical in leveraging the necessary tools to solve tricky problems.
                    </Typography>
                </div>

                <ul id='intro-ul' className='list-unstyled'>
                    <Typography variant='h5' className=' p-3'>
                        This extensive experience combining creative solutions with effective communication and organization allows me to:
                    </Typography>

                    <li id='intro-li-1' className='mb-2 pixelify-sans'>
                        Keep up in fast-paced work environments
                    </li>

                    <li id='intro-li-2' className='mb-2 pixelify-sans'>
                        Handles stressful situations with the end goal always in mind
                    </li>

                    <li id='intro-li-3' className='mb-2 pixelify-sans'>
                        Quickly adapt to cutting edge technologies
                    </li>

                    <li id='intro-li-4' className='mb-2 pixelify-sans'>
                        Approach each problem with a combination of logical understanding and creative flair
                    </li>
                </ul>


            </div>

            <div className='container exp-container mt-5'>
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
                    <Experience />
                </ScrollAnimation>
            </div >

        </>
    )
}