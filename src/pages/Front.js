import React from 'react';
import '../styles/Front.scss';
import bannervideo from '../images/ducks.mp4';
// import photo from '../images/phto.jpeg';
import photo from '../images/photosq.jpeg';
import { Link } from "react-router-dom";
import Navbar from '../components/Navigation';



export default function Front() {

    return (
        <div className='front'>

            <video
                autoPlay
                muted
                loop>
                <source src={bannervideo} type="video/mp4" />
            </video>

            {/* <header class="viewport-header">
                <h1>
                    Hello! I am Olga
   
                </h1>
            </header> */}
            <Navbar />
            <div className='container'>
                {/* <nav>
                    <Link to="/edu" className="nav-link">
                        Experience
                    </Link>
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                    <Link to="/edu" className="nav-link">
                        Education
                    </Link>
                </nav> */}
                <div className='profile'>
                    <div className="visual">
                        <div class="frame">
                            <img
                                src={photo}
                                alt="photo"
                            ></img>

                        </div>

                    </div>
                    <div className="desc">
                        <h2>Hello! I am Olga</h2>
                        <h2>Frontend Developer</h2>
                        {/* <h3>JavaScript/React/SASS</h3> */}
                        <h3>My adress: Helsinki</h3>
                        <h3>Email: olga_savka.os@mail.ru</h3>
                        <footer>

                            <a
                                href="https://www.linkedin.com/in/olga-savka-2a1a988a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("../images/linkedin.png")}
                                    alt="linkedin-icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/theshortcut/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("../images/github.png")}
                                    alt="linkedin-icon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/theshortcut/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("../images/instagram.png")}
                                    alt="linkedin-icon"
                                />
                            </a>
                        </footer>
                    </div>

                </div>
                {/* <footer>

                    <a
                        href="https://www.linkedin.com/in/olga-savka-2a1a988a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("../images/linkedin-icon.png")}
                            alt="linkedin-icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/theshortcut/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("../images/github-icon.png")}
                            alt="linkedin-icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/theshortcut/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require("../images/instagram-icon.png")}
                            alt="linkedin-icon"
                        />
                    </a>
                </footer> */}

            </div>
        </div>



    );
}


