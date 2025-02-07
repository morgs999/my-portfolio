import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { Card } from '@mui/joy';
import { Paper, Typography } from '@mui/material';
import { projects } from "../constants/projects";

function Project({ project, index }) {
    const [toolsVisible, setToolsVisible] = useState(false);
    const toggleToolsVisibility = () => {
        setToolsVisible(!toolsVisible);
    };
    const openPage = (deployUrl) => {
        window.open(deployUrl, "_blank");
    };
    const handleRepoIcon = (repoUrl) => {
        window.open(repoUrl, "_blank");
    };

    // return (
    //     <>
    //         <div key={index}>
    //             <Paper
    //                 elevation={12}
    //                 className='projectcard p-3 m-3 d-flex flex-column align-items-center justify-content-center'
    //             >
    //                 {project.photo && (
    //                     <img
    //                         className='p-3 m-3'
    //                         src={project.photo}
    //                         alt={project.name}
    //                         onClick={() => openPage(project.deploy)}
    //                     />
    //                 )}
    //                 <h3>
    //                     {project.name}{' '}
    //                     {/* <RiExternalLinkFill
    //                         onClick={() => openPage(project.deploy)}
    //                     /> */}
    //                     <FaGithub
    //                         onClick={() => handleRepoIcon(project.repo)}
    //                     />
    //                 </h3>
    //             </Paper>
    //         </div>
    //     </>
    // )
    return (
        <>
            <div key={index}>
                <Paper
                    elevation={12}
                    className='projectcard p-3 m-3 d-flex flex-column align-items-center justify-content-center'
                    sx={{ flexGrow: 1 }}

                >
                    <Typography variant='h4' className='p-3 m-3'>
                        {project.name}
                    </Typography>
                    <h4 onClick={toggleToolsVisibility} style={{ cursor: 'pointer' }}
                    >Tools Used</h4>

                    {toolsVisible && project.tools.frontend.map((tool, index) =>
                        <Typography key={index} variant='h6' className='p-3 m-3'>
                            {tool}
                        </Typography>
                    )}
                </Paper>
                {toolsVisible && (
                    <Card
                        variant="outlined"
                        className='p-3 m-3'
                        sx={{ width: '100%', maxWidth: 400 }}
                    >
                        <Typography variant='h5' className='p-3 m-3'>
                            Project Details
                        </Typography>
                        <Typography variant='body1' className='p-3 m-3'>
                            {project.description}
                        </Typography>
                        <div className='d-flex justify-content-between'>
                            <FaGithub onClick={() => handleRepoIcon(project.repo)} style={{ cursor: 'pointer' }} />
                            <RiExternalLinkFill onClick={() => openPage(project.deploy)} style={{ cursor: 'pointer' }} />
                        </div>
                    </Card>
                )}
            </div>
        </>
    )
}

export default Project;