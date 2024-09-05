

export default function Resume() {
    return (
        <>
            <h1>Download My Resume</h1>
            <a href='public/pdfs/resume.pdf' download='resume.pdf'>
                <img src='public/pngs/resume.png' alt='resume' className='border rounded-4 shadow-lg p-5 m-5' />
            </a>
        </>
    )
}