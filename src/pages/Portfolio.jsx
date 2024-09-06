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
            deploy: "",
            repo: "",
            photo: "gifs/anywayhereswonderwall.gif",
        },
        {
            name: "Leftover Lover",
            deploy: "",
            repo: "",
            photo: "gifs/leftoverlover.gif",
        },
        {
            name: "Stock Portfolio Generator",
            deploy: "",
            repo: "",
            photo: "gifs/stockportfolio.gif",
        },
        {
            name: "Tech Blog",
            deploy: "",
            repo: "",
            photo: "gifs/techblog.gif",
        },
        {
            name: "Weather Dashboard",
            deploy: "",
            repo: "",
            photo: "gifs/weatherdashboard.gif",
        },

    ];

    return (
        <div>
            <Carousel
                sx={{ padding: '4rem', margin: '2rem', justifyContent: 'center' }}
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