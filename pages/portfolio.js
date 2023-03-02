import Link from "next/link"

export default function Portfolio() {
    return (
        <div className='projects'>
            <div className='title'>
                <h2>Projects</h2>
            </div>
            <div className='project-item'>
                <h1>ecIN-stagram</h1>
                {/* image */}
                <img className="img" src="https://imgur.com/utMg6tb.png" />
                {/* description */}
                <div>
                    <p>Created a Full-stack application using Express, React, Node.js and PostgreSQL. Made it look like Instagram. We incorporated Machine learning software called TensorFlow to detect if the sentence is hurtful and toxic. I was in charge of making users be able to post pictures and captions using cloudinaryAPI. Created a basic framework for backend routes.</p>
                </div>
                <Link target="_blank" href="https://github.com/tbfrobinson/eciN-Stagram-client"><h3>Check it out on GitHub!</h3></Link>
            </div> 
            <div className='project-item'>
                <h1>McFacebook</h1>
                {/* image */}
                <img className="img" src="https://imgur.com/CHxU67Q.png" />
                {/* description */}
                <div>
                    <p>Created a Full-stack application using MongoDB, Express, React, and Node.js in a group of 4. Made it look like Facebook. I was in charge of making the homepage and posts detail to conditionally render the edit button. Backend routes to the things that I worked on.</p>
                </div>
                <Link target="_blank" href="https://github.com/PvrkFvmily/domino-client"><h3>Check it out on GitHub!</h3></Link>
            </div>
            <div className='project-item'>
                <h1>ACvillagercritic</h1>
                {/* image */}
                <img className="img" src="https://imgur.com/JkQwFcP.png" />
                {/* description */}
                <div>
                    <p>Created a website using Animal Crossing api. I was in charge of creating a full stack application that is deployed on the internet. Using acnhapi's document to get information of villagers and saving that data in the database. Users being able to make accounts and favoriting and comment on their favorite villagers.</p>
                </div>
                <Link target="_blank" href="https://github.com/PvrkFvmily/project-2-ACvillagercritic"><h3>Check it out on GitHub!</h3></Link>
            </div>
            <div className='project-item'>
                <h1>Pool cleaners R us</h1>
                {/* image */}
                <img className="img" src="https://imgur.com/Ter9I5Q.png" />
                <img className="img" src="https://imgur.com/Tmn669T.png" />
                {/* description */}
                <div>
                    <p>Game using HTML canvas. I used Class components for my user character and mapped out the stage with an array so that multimaps can be loaded in later.</p>
                </div>
                <Link target="_blank" href="https://github.com/PvrkFvmily/project-1-Pool-Cleaners-R-Us"><h3>Check it out on GitHub!</h3></Link>
            </div>
            <style jsx>{`
                p {
                    margin: 2% 15%;
                }
                img {
                    margin-top: 15px;
                }
            `}</style>
        </div>
    )
  }
  