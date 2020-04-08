import React from "react";
import '../styles/EducationStyles.scss';
import { Link } from "react-router-dom";


export default function Education() {

    return (
        <div className='edu'>
            <div className='container'>
                <nav>
                    <Link to="/edu" className="nav-link">
                        Experience
                    </Link>
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                    <Link to="/edu" className="nav-link">
                        Education
                    </Link>
                </nav>
                <div className='profile'>
                    <div className="desc">
                        <h1>Name: Olga Savka</h1>
                        <h3>Role: Frontend Dev</h3>
                        {/* <h3>JavaScript/React/SASS</h3> */}
                        <h3>Location: Helsinki</h3>
                    </div>

                </div>
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
                </footer>

            </div>

        </div >
    );
}
