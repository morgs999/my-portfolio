import { useState } from "react";
import Project from "../components/Project";
import Carousel from 'react-material-ui-carousel';
import { projects } from "../constants/projects";


export default function Portfolio() {
    const [hideTools, setHideTools] = useState(false);

    const handleSlideChange = () => {
        setHideTools(true);
        setTimeout(() => setHideTools(false), 0);
    };

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <Carousel className='projectcarousel'
                sx={{
                    padding: '4rem',
                    margin: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    // minHeight: '100vh'
                }}
                navButtonsAlwaysVisible={true}
                stopAutoPlayOnHover={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'grey',
                        borderRadius: 10,
                        position: "sticky",
                        opacity: 0.5,
                    }
                }}
                indicatorIconButtonProps={{
                    style: { padding: '10px' }
                }}
                indicatorContainerProps={{
                    style: { marginTop: '3rem' }
                }}
                onChange={handleSlideChange}
            >
                {Object.entries(projects).map(([index, project]) => (
                    <Project key={index} project={project} hideTools={hideTools} />
                ))}
            </Carousel >
        </div >
    );
}