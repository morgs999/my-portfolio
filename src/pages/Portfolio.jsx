import Project from "../components/Project";
import Carousel from 'react-material-ui-carousel';


export default function Portfolio() {
    // Array of project data

    const projects = [
        {
            name: "What's Up Doc",
            deploy: "https://linkedin.com/in/morgandclarke/",
            repo: "https://github.com/morgs999/Whats-Up-Doc",
            photo: "gifs/whatsupdoc.gif",
        },
        {
            name: "Anyways, Here's Wonderwall",
            deploy: "https://wonderwall-196032f35f7e.herokuapp.com/",
            repo: "https://github.com/Levi-Man/Wonderwall",
            photo: "gifs/anywayhereswonderwall.gif",
        },
        {
            name: "Leftover Lover",
            deploy: "https://damirfm.github.io/leftover/",
            repo: "https://github.com/DamirFM/The-Leftover-Lover",
            photo: "gifs/leftoverlover.gif",
        },
        {
            name: "Stock Portfolio Generator",
            deploy: "https://github.com/sheridan-python/assignment-7-portfolio-generator-morgs999",
            repo: "https://github.com/sheridan-python/assignment-7-portfolio-generator-morgs999",
            photo: "gifs/stockportfolio.gif",
        },
        {
            name: "Tech Blog",
            deploy: "https://github.com/morgs999/Tech-Blog",
            repo: "https://github.com/morgs999/Tech-Blog",
            photo: "gifs/techblog.gif",
        },
        {
            name: "Weather Dashboard",
            deploy: "https://morgs999.github.io/Weather-Dashboard/",
            repo: "https://github.com/morgs999/Weather-Dashboard",
            photo: "gifs/weatherdashboard.gif",
        },

    ];

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <Carousel className='projectcarousel'
                sx={{ padding: '4rem', margin: '2rem' }}
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
                    style: {
                        padding: '10px',    // 1

                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '3rem', // 5

                    }

                }}
            >
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </Carousel >
        </div >
    );
}