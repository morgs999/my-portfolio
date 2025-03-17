export default function Resume() {
    return (
        <>
            <div id='resume' className="container p-5">
                <a href='/pdfs/Morgan_Clarke_Resume.pdf' download='Morgan_Clarke_Resume.pdf'>
                    {/* <h3 id="resumeText">Download My Resume</h3> */}
                    <img id='resumePic' src='/pngs/resume.png' alt='Morgan Clarke Resume' className='border rounded-4 shadow-lg p-5 m-5' />
                    <div id="resumeText">Download My Resume</div>
                </a>
            </div>
        </>
    )
};