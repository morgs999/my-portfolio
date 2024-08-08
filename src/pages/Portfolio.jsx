import Project from "../components/Project";

export default function Portfolio() {
    // Array of project data
    const projects = [
        {
            name: "What's Up Doc",
            deploy: "",
            repo: "",
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
        <>
            <div className="container">
                {/* <h2 className="typewriter">Portfolio</h2> */}
                <div className="project-container">
                    {projects.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}