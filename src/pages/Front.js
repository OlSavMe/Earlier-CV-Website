import React from "react";
import "../styles/FrontStyles.scss";
import "../App.scss";
import bannervideo from "../images/ducks.mp4";
import poster from "../images/backimg.jpeg";

export default function Front() {
  return (
    <div className="front">
      <video autoPlay muted loop poster={poster}>
        <source src={bannervideo} type="video/mp4" />
      </video>

      <div className="container">
        <div className="profile">
          <div className="visual"></div>

          <div className="desc">
            <h2>Olga Savka</h2>
            <h2>Web Developer</h2>
            <h3>
              {" "}
              <img src={require("../images/marker.png")} alt="location" />
              Helsinki
            </h3>
            <h3>
              <img src={require("../images/at.png")} alt="at" />
              savkao@hotmail.com
            </h3>
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
        <section className="hash">
          <p>
            Hi! I am a web developer with hands-on experience in JavaScript and
            ReactJS frontend development in team projects.{" "}
            <a
              href="https://github.com/OlSavMe/Current-CV-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              This website
            </a>{" "}
            is my pet project. I've gained basic knowledge of Node.js, Java,
            C/C++, SQL, Azure DevOps through my university studies. In 2020, I
            am graduating as a software developer from Haaga-Helia UAS,
            Helsinki. In my pre-IT career I worked as an English technical
            translator. Find the details in the Portfolio, Career and Education
            sections of this site.
          </p>
          <p>...or scroll down to watch the ducks.</p>
        </section>
        <section className="empty"></section>
      </div>
    </div>
  );
}
