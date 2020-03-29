import React from 'react';
import '../styles/FrontStyles.scss';
import bannervideo from '../images/ducks.mp4';
import { Link } from "react-router-dom";



export default function Front() {

    return (
        <div className='front'>
            <video
                autoPlay
                muted
                loop
            >
                <source src={bannervideo} type="video/mp4" />
            </video>


            <div className='box'>
                <nav>
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>
                    <Link to="/edu" className="nav-link">
                        Education
                    </Link>
                </nav>

                <p>My name is Olga <br /> I am a frontend developer</p>
                <button>Learn about me</button>
                <p>or</p>
                <button>Enjoy the nature</button>
            </div>

        </div>



    );
}


