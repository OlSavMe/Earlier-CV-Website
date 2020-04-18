import React from "react";
import '../styles/Front.scss';
import '../App.scss';
import bannervideo from '../images/ducks.mp4';
// import photo from '../images/phto.jpeg';
// import photo from '../images/phbig.jpeg';
import { Link } from "react-router-dom";

import BottomNav from '../components/BottomNavigation';



export default function Career() {

    return (
        <div className='front'>

            <video
                autoPlay
                muted
                loop>
                <source src={bannervideo} type="video/mp4" />
            </video>
            <div className='container'>

                <div className='profile'>
                    <a
                        href="https://github.com/OlSavMe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2> To GitHub Profile =>  </h2>
                    </a>
                </div>


            </div>
        </div>
    );
}
