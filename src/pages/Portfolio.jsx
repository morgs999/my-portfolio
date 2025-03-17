import { useState } from "react";
import { Typography, Button } from "@mui/material";
import Project from "../components/Project";
import { projects } from "../constants/projects";

export default function Portfolio() {
    const [tool, setTool] = useState('');

    const filteredProjects = tool
        ? projects.filter(project =>
            project.tools.frontend.includes(tool) || project.tools.backend.includes(tool)
        )
        : projects;

    return (
        <>
            <div className='portfolio-container'>

                {/* FILTER BUTTONS */}
                <div className='buttons-column'>
                    <Typography variant='h5' className='w-100 text-center mb-3'>
                        Projects using:
                    </Typography>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('React')}>React</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('JavaScript')}>JavaScript</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('Python')}>Python</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('Firebase')}>Firebase</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('MongoDB')}>Mongo DB</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('MySQL')}>MySQL</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('MUI')}>MUI</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('Bootstrap')}>Bootstrap</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'black'
                        }
                    }} className='m-2' onClick={() => setTool('TailwindCSS')}>Tailwind</Button>
                    <Button variant='outlined' sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'white'
                        }
                    }} className='m-2' onClick={() => setTool('')}>Show All</Button>
                </div>

                {/* PROJECTS */}
                <div className='projects-column'>
                    {filteredProjects.map((project, index) => (
                        <div key={index} className='d-flex col-12 col-md-6 p-3'>
                            <Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};