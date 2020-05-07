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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="empty"></section>
      </div>
    </div>
  );
}
