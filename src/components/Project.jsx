import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { Paper } from '@mui/material';

function Project({ project, index }) {
    const openPage = (deployUrl) => {
        window.open(deployUrl, "_blank");
    };

    const handleRepoIcon = (repoUrl) => {
        window.open(repoUrl, "_blank");
    };

    return (
        <>
            <div key={index}>
                <Paper
                    elevation={12}
                    className='projectcard p-3 m-3 d-flex flex-column align-items-center justify-content-center'
                >
                    {project.photo && (
                        <img
                            className='p-3 m-3'
                            src={project.photo}
                            alt={project.name}
                            onClick={() => openPage(project.deploy)}
                        />
                    )}
                    <h3>
                        {project.name}{' '}
                        {/* <RiExternalLinkFill
                            onClick={() => openPage(project.deploy)}
                        /> */}
                        <FaGithub
                            onClick={() => handleRepoIcon(project.repo)}
                        />
                    </h3>
                </Paper>
            </div>
        </>
    )
}

export default Project;