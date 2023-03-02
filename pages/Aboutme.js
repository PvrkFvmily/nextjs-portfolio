import styles from "../styles/About.module.css"

export default function Aboutme() {
    return (
        <div className="aboutMe">
            <div>
                {/* my pic */}
                <img src="https://i.imgur.com/qwsAwsT.png" alt="I'm Daniel and I like dank memes" ></img>
            </div>

            <div>
                <h2>About Me</h2>
                <p>Hi there, I'm Daniel Park, and I'm a software engineer with a passion for motorcycles and video games. When I'm not working, you can often find me out on my bike exploring new roads and enjoying the thrill of the ride, or competing with friends in multiplayer video games where I consistently rank in the 95th percentile or higher. In first-person shooter games, I'm proud to say that I'm in the top 1%. These hobbies help me stay focused and energized when I'm working on coding projects. I'm eager to learn and collaborate with everyone on the team.</p>
                <style jsx>{`
                    h2 {
                        margin-top: 30px;
                        text-indent: 15%;
                        font-size: 2rem;
                    }
                    p {
                        padding: 20px;
                        font-size: 2rem;
                    }
                `}</style>
            </div>
        </div>
    )
}