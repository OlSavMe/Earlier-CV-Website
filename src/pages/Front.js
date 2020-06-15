import React from "react";
import "../styles/FrontStyles.scss";

export default function Front() {
  return (
    <div className="front">
      <img className="descimage" src={require("../images/se.png")} alt="sea" />

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
          <div>
            <p>
              Hi! My name is Olga Savka and{" "}
              <a
                href="https://github.com/OlSavMe/Current-CV-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                this website
              </a>{" "}
              is my pet project.
            </p>
            <p>
              I am a web developer with hands-on experience in JavaScript and
              ReactJS development team projects. This includes: creating
              responsive interfaces, configuring API requests, working with
              headless CMS. Through my university studies I have also gained
              knowledge of Node.js, Java, C/C++ and Azure DevOps. In 2020, I
              will be graduating as a software developer from Haaga-Helia UAS,
              Helsinki.
            </p>
            <p>
              {" "}
              Before my IT career I worked as an English technical translator.
              For further information surrounding my portfolio, career and
              education please click the relevant section above...
            </p>
          </div>
        </section>
        <section className="empty"></section>
      </div>
    </div>
  );
}
