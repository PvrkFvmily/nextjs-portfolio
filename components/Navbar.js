// import Link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-item'>
                <Link href="/">
                    {/* links take any child components */}
                    <p>Home</p>
                </Link>
            </div>
            
            <div className='nav-item'>
                <Link href="#aboutMe" scroll={false}>
                    {/* links take any child components */}
                    <p>About Me</p>
                </Link>
            </div>

            <div className='nav-item'>
                <Link href="#techs">
                    {/* links take any child components */}
                    <p>Techs</p>
                </Link>
            </div>
            
            <div className='nav-item'>
                <Link href="#projects">
                    {/* links take any child components */}
                    <p>Projects</p>
                </Link>
            </div>

            <div className='nav-item'>
                <Link target="_blank" href="https://docs.google.com/document/d/1xWhjeHxYRFYAVxVNPQBtWaKZqFR_0V2R55OivuMH3WQ/edit?usp=sharing">
                    <p>Resume</p>
                </Link>
            </div>
            
            <div className='nav-item'>
                {/* outside sources use regular a tags */}
                <a target="_blank" href="https://github.com/PvrkFvmily">
                    <img className='github' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={50} height={50} />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/parkfamily/">
                    <img className='linkedin' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" width={50} height={50}/>
                </a>
            </div>

        </nav>
    )
}