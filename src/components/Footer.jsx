import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function Footer() {
    return (
        <div className='bg-black pb-3'>
            <hr></hr>
            <div container className='d-flex justify-content-center'>
                <a href='https://linkedin.com/in/morgandclarke' target='_blank' rel='noreferrer'>
                    <LinkedInIcon id='footerIcon' className='text-white m-1' fontSize='large' />
                </a>
                <a href='https://github.com/morgs999' target='_blank' rel='noreferrer'>
                    <GitHubIcon id='footerIcon' className='text-white m-1' fontSize='large' />
                </a>
                <a href='https://open.spotify.com/artist/3B9orqUJOAa42fvR0TqtP5?si=5TZtj9bgTeiCyTmJxiflfQ' target='_blank' rel='noreferrer'>
                    <LibraryMusicIcon id='footerIcon' className='text-white m-1' fontSize='large' />
                </a>
            </div>
        </div>
    )
};