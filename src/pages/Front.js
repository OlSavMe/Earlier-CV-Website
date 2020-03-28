import React from 'react';
import '../styles/FrontStyles.scss';
import bannervideo from '../images/ducks.mp4';



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
                <h1>Welcome to my website!</h1>

                <p>My name is Olga <br /> I am a frontend developer</p>
                <button>Learn about me</button>
                <p>or</p>
                <button>Enjoy the nature</button>
            </div>

        </div>



    );
}


