import { useState } from "react";
import Project from "../components/Project";
import { projects } from "../constants/projects";
import Carousel from 'react-material-ui-carousel';

export default function Portfolio() {
    const [hideTools, setHideTools] = useState(false);

    const handleSlideChange = () => {
        setHideTools(true);
        setTimeout(() => setHideTools(false), 0);
    };

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <Carousel className='projectcarousel'
                    onChange={handleSlideChange}
                    sx={{
                        padding: '5em',
                        margin: '2em',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'visible',
                        // minHeight: '100vh'
                    }}
                    autoPlay={false}
                    // stopAutoPlayOnHover={true}
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'grey',
                            borderRadius: 10,
                            position: "sticky",
                            opacity: 0.5,
                            top: '50%',
                        }
                    }}
                // indicatorIconButtonProps={{
                //     style: { padding: '10px' }
                // }}
                // indicatorContainerProps={{
                //     style: { marginTop: '3rem' }
                // }}
                >
                    {Object.entries(projects).map(([index, project]) => (
                        <Project key={index} project={project} hideTools={hideTools} />
                    ))}
                </Carousel >
            </div >
        </>
    );
};