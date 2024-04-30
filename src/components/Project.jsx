import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

function Project({ project, index }) {
    const openPage = (deployUrl) => {
        window.open(deployUrl, "_blank");
    };

    const handleRepoIcon = (repoUrl) => {
        window.open(repoUrl, "_blank");
    };

    return (
        <>
            {/* Individual project card */}
            <div key={index} className="project-card">
                {project.photo && (
                    <img
                        src={project.photo}
                        alt={project.name}
                        className="project-image"
                        onClick={() => openPage(project.deploy)}
                    />
                )}
                <h3 className="project-title">
                    {project.name}{" "}
                    <RiExternalLinkFill
                        className="project-icon"
                        onClick={() => openPage(project.deploy)}
                    />
                    <FaGithub
                        className="project-icon"
                        onClick={() => handleRepoIcon(project.repo)}
                    />
                </h3>
            </div>
        </>
    )
}

export default Project;