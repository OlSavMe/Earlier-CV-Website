import React from 'react';
import '../styles/Front.scss';
import '../App.scss';
import bannervideo from '../images/ducks.mp4';
import poster from '../images/backimg.jpeg';
import { Link } from "react-router-dom";



export default function Front() {

    return (
        <div className='front'>

            <video
                autoPlay
                muted
                loop
                poster={poster}>
                <source src={bannervideo} type="video/mp4" />
            </video>

            <div className='container'>

                <menu>
                    <div><img
                        src={require("../images/workers.png")} />
                        <Link to="/edu">
                            Career
                    </Link></div>
                    <div><img
                        src={require("../images/web.png")} />
                        <Link to="/portfolio">
                            Portfolio
                    </Link></div>
                    <div><img
                        src={require("../images/brain.png")} />
                        <Link to="/edu">
                            Education
                    </Link></div>
                </menu>


                <div className='profile'>
                    <div className="visual">
                    </div>

                    <div className="desc">
                        <h2>Hello! I am Olga</h2>
                        <h2>Frontend Developer</h2>
                        {/* <h3>JavaScript/React/SASS</h3> */}
                        <h3> <img
                            src={require("../images/marker.png")}
                            alt="location"
                        />Helsinki</h3>
                        <h3><img
                            src={require("../images/at.png")}
                            alt="at"
                        />savkao@hotmail.com</h3>
                        <footer>

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
                                href="https://github.com/OlSavMe"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("../images/github-icon.png")}
                                    alt="github-icon"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/olovok33/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={require("../images/instagram-icon.png")}
                                    alt="insta-icon"
                                />
                            </a>
                        </footer>
                    </div>

                </div>
                <section className='hash'>
                    <h2>#JavaScript</h2>
                    <h2>#React</h2>
                    <h2>#Redux</h2>
                    <h2>#SASS/SCSS</h2>
                    <h2>#ES6/JSX</h2>
                    <h2>#Material UI</h2>
                    <h2>#Azure DevOps</h2>
                    <h2>#Circle CI</h2>
                    <h2>#WordPress</h2>
                    <h2>#Java</h2>
                </section>

            </div>
        </div >



    );
}


