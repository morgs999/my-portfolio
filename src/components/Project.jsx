import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { Paper, Typography, Box, Button } from '@mui/material';

export default function Project({ project }) {
    const [toolsVisible, setToolsVisible] = useState(false);

    const toggleToolsVisibility = () => {
        setToolsVisible(!toolsVisible);
    };

    const openPage = (deploy) => {
        if (!deploy.startsWith("http")) {
            alert("Unfortunately, this project has not been deployed yet.");
            return;
        }
        window.open(deploy, "_blank");
    };

    const handleRepoIcon = (repo) => {
        if (!repo.startsWith("http")) {
            alert("Unfortunately, this repository is private.");
            return;
        }
        window.open(repo, "_blank");
    };

    return (
        <div className='position-relative d-flex flex-column align-items-center justify-content-center'>

            {/* INITIAL CARD */}
            <Paper
                elevation={12}
                className='projectcard p-3 m-3 d-flex flex-column align-items-center justify-content-center'
                sx={{
                    flexGrow: 1,
                    position: 'relative',
                    overflow: 'hidden',
                    width: '25rem',
                    height: '25rem',
                    // width: '100%',
                    // height: '100%',
                }}
            >
                <img
                    src={project.photo}
                    alt={project.name}
                    style={{ 
                        maxHeight: '10rem',
                        // width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Typography variant='h4' className='p-3 m-3'>
                    {project.name}
                </Typography>
                <h4 onClick={toggleToolsVisibility} style={{ cursor: 'pointer' }}>
                    More Info
                </h4>
            </Paper>

            {/* OVERLAY CARD */}
            {toolsVisible && (
                <Box
                    className='position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-dark bg-opacity-90'
                    sx={{ zIndex: 10, color: 'white', padding: '2rem' }}
                >
                    <Typography variant='body1' className='p-3 m-3' >
                        {project.description}
                    </Typography>
                    {/* <Typography variant='h5' className=''>
                        Tools Used
                    </Typography> */}
                    <Box className='d-flex flex-wrap justify-content-center align-items-center'>
                        <Typography variant='h6' className='p-2'>
                            Front End Tools =&gt;
                        </Typography>
                        {project.icons.frontend.map((icon, index) => (
                            <Typography key={index} variant='body1' className='p-2' fontSize='2.5rem'>
                                {icon}
                            </Typography>
                        ))}
                        <Box className='w-100' sx={{ my: 2, borderBottom: '1px solid white' }} />
                        <Typography variant='h6' className='p-2'>
                            Back End Tools =&gt;
                        </Typography>
                        {project.icons.backend.map((icon, index) => (
                            <Typography key={index} variant='body2' className='p-2' fontSize='2.5rem'>
                                {icon}
                            </Typography>
                        ))}
                    </Box>

                    <Button
                        onClick={toggleToolsVisibility}
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }}
                    >
                        Close
                    </Button>
                </Box>
            )}

            {/* LINKS TO REPO AND DEPLOY */}
            <Box className='d-flex justify-content-center mt-3'>
                <Button
                    onClick={() => handleRepoIcon(project.repo)}
                    variant="contained"
                    startIcon={<FaGithub />}
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        },
                        marginRight: '1rem'
                    }}
                >
                    GitHub Repo
                </Button>
                <Button
                    onClick={() => openPage(project.deploy)}
                    variant="contained"
                    startIcon={<RiExternalLinkFill />}
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }}
                >
                    Website
                </Button>
            </Box>
        </div>
    );
}