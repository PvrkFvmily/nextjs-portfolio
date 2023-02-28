// import Link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                {/* links take any child components */}
                Home
            </Link>

            <Link href="/about">
                About Me
            </Link>
            
            <Link href="/portfolio">
                Portfolio
            </Link>
            
            <Link target="_blank" href="https://docs.google.com/document/d/1xWhjeHxYRFYAVxVNPQBtWaKZqFR_0V2R55OivuMH3WQ/edit?usp=sharing">
                Resume
            </Link>
            
            {/* outside sources use regular a tags */}
            <a target="_blank" href="https://github.com/PvrkFvmily">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={20} height={20}/>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/parkfamily/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={20} height={20}/>
            </a>
        </nav>
    )
}