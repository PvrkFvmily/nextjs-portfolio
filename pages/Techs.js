import styles from "../styles/About.module.css"

export default function Techs() {
    return (
        <div className="techs">
            <div className="title">
                <h2>Techs</h2>
            </div>
            {/* add green border */}
            <div className="techBox">
                <p className="tech-list">JavaScript</p>
                <p className="tech-list">HTML5</p>
                <p className="tech-list">CSS</p>
                <p className="tech-list">Python</p>
                <p className="tech-list">Node</p>
                <p className="tech-list">Express</p>
                <p className="tech-list">React</p>
                <p className="tech-list">Full-Stack Development</p>
                <p className="tech-list">SQL</p>
                <p className="tech-list">MongoDB</p>
                <p className="tech-list">Github</p>
                <p className="tech-list">Autodesk Maya</p>
                <p className="tech-list">Unreal Engine</p>
                <p className="tech-list">Adobe Illustrator</p>
                <p className="tech-list">Adobe Photoshop</p>
            </div>
            <style jsx>{`
                p {
                    color: rgb(51,255,51);
                    margin: 20px 1px; 
                }
            `}</style>
        </div>
    )
}