// import Link from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                {/* links take any child components */}
                <p>home</p>
            </Link>
            
            <Link href="/about">
                <p>about</p>
            </Link>
            
            {/* <Link href="/portfolio">
                <p>portfolio</p>
            </Link> */}
            
            <Link target="_blank" href="https://docs.google.com/document/d/1xWhjeHxYRFYAVxVNPQBtWaKZqFR_0V2R55OivuMH3WQ/edit?usp=sharing">
                <p>resume</p>
            </Link>
            
            {/* outside sources use regular a tags */}
            <div>
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