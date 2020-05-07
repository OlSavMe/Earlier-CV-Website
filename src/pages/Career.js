import React from "react";
import "../styles/CareerStyles.scss";
import "../App.scss";
import { colorWhite } from "../styles/centralStyles";
import { backgroundColorDark } from "../styles/centralStyles";
import { backgroundColorBlue } from "../styles/centralStyles";
import { colorDarkBlue } from "../styles/centralStyles";

export default function Career() {
  return (
    <div className="career">
      <div className="container">
        <h3 style={{ color: colorWhite, backgroundColor: backgroundColorDark }}>
          WORK EXPEREINCE
        </h3>
        <section>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
        </section>
        <section>
          <h3
            style={{ color: colorWhite, backgroundColor: backgroundColorDark }}
          >
            FRONTEND DEVELOPER
          </h3>
          <h3 style={{ color: colorWhite }}>
            <strong>The Shortcut</strong>
          </h3>
          <h4>Jan 2020 - present</h4>
          <p>
            Developing user interface of the company's website:{" "}
            <strong>
              ReactJS and libraries, SCSS, WordPress API, Eventbrite API
            </strong>
            . Teamwork with the other web developer and designers.{" "}
            <a href="#">link to project</a>
          </p>
          <p>
            Creating JSON data and visual charts for the Data Management System:
            <strong> ReactJS, react-chartjs-2, Docker Containers</strong>.
            Teamwork with the backend developer and data analysts.
          </p>
          <h3 style={{ color: colorWhite }}>
            <strong>Haaga-Helia & Webscale Oy</strong>
          </h3>
          <h4>Aug 2019 - Dec 2019</h4>
          <p>
            Developing user interface of a game web app:
            <strong> ReactJS, React Material-UI</strong>. Team work with front-
            and backend developers, designers.
          </p>
        </section>
        <section>
          <h3
            style={{ color: colorWhite, backgroundColor: backgroundColorDark }}
          >
            UX DESIGNER
          </h3>
          <h3 style={{ color: colorDarkBlue }}>
            <strong>The Shortcut Digital Prototyping Week</strong>
          </h3>
          <h4>Oct 2019</h4>
          <p>
            Developing design and prototype of a volunteer matching mobile app{" "}
            <strong>Figma</strong>. Teamwork with the other UX designer.{" "}
            <a href="#">link to project</a>
          </p>
          <h3 style={{ color: colorDarkBlue }}>
            <strong>The winner project of the RIGA MUDDIE WEEK</strong>
          </h3>
          <h4>Apr 2019</h4>
          <p>
            Developing design and prototype for a healthcare application:{" "}
            <strong>Figma</strong>. Team work with the other UX designer.{" "}
            <a href="#">link to project</a>
          </p>
        </section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
}
