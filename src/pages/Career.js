import React from "react";
import "../styles/CareerStyles.scss";
import "../App.scss";
import { colorWhite } from "../styles/centralStyles";
import { backgroundColorDark } from "../styles/centralStyles";
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
            During 2019 - 2020 I worked in several team projects as a
            React/JavaScript developer; I also did digital prototyping for 2
            week-long sprints.
          </span>
          <span>
            In my pre-IT career I was an English technical translator for 7
            years. I have experience in SEO copywriting and digital marketing.
          </span>
        </section>
        <section>
          <h3
            style={{
              color: colorWhite,
              backgroundColor: backgroundColorDark,
            }}
          >
            FRONTEND DEVELOPER
          </h3>
          <h3 style={{ color: colorWhite }}>
            <strong>The Shortcut, Helsinki</strong>
          </h3>
          <h4>Jan 2020 - ongoing</h4>
          <p>
            Developing responsive user interface of the company's website with{" "}
            <strong>
              ReactJS and other JS libraries, SASS/SCSS, fetching data from
              WordPress and Eventbrite REST APIs through Axios client
            </strong>
            . Collaboration through <strong>git </strong> version control.
            Teamwork with designers and markerters using Agile approach and
            Trello boards. Deployment of MVPs on Firebase platform.
            <a
              href="https://github.com/OlSavMe/React-Shortcut-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              >>project
            </a>
          </p>
          <p>
            Creating JSON data and visual charts for the interface of the
            Database Management System with
            <strong> ReactJS, react-chartjs-2</strong>, using{" "}
            <strong> Docker Containers</strong> for local dev environment .
            Teamwork with the backend developer and data analysts.
          </p>
          <h3 style={{ color: colorWhite }}>
            <strong>Haaga-Helia & Webscale Oy, Helsinki</strong>
          </h3>
          <h4>Aug 2019 - Dec 2019</h4>
          <p>
            Developing user interface of a game web app with
            <strong>
              {" "}
              ReactJS, React Material-UI, qr scanner library, react-router,
              Axios client
            </strong>
            , using Docker Containers with pgAdmin for local dev environment.
            Team work with front- and backend developers, designers in{" "}
            <strong>
              Scrum sprints, using git version control and CircleCI
            </strong>{" "}
            for continuos delivery and automated testing.
          </p>
        </section>
        <section>
          <h3
            style={{ color: colorWhite, backgroundColor: backgroundColorDark }}
          >
            UX DESIGNER
          </h3>
          <h3 style={{ color: colorDarkBlue }}>
            <strong>DIGITAL PROTOTYPING WEEK by The Shortcut, Helsinki</strong>
          </h3>
          <h4>Oct 2019</h4>
          <p>
            Developing design and prototype of a volunteer matching mobile app
            with <strong>Figma</strong>. Teamwork with the other UX designer.{" "}
            <a
              href="https://www.figma.com/proto/P9IeRig2R8qgdylrxklhUC/Prototyping-UI-Kit-(Copy)?node-id=311%3A263&scaling=scale-down"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              >>project
            </a>
          </p>
          <h3 style={{ color: colorDarkBlue }}>
            <strong>The winner project of the RIGA MUDDIE WEEK, Riga</strong>
          </h3>
          <h4>Apr 2019</h4>
          <p>
            Developing design and prototype for a healthcare application with{" "}
            <strong>Figma</strong> in a multidisciplinary team.{" "}
            <a
              href="https://www.figma.com/proto/MXr37r7aAN7txw7QVJFY03/READY-migraine-map-vol2-(Copy)?node-id=29%3A6&scaling=scale-down"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              >>project
            </a>
          </p>
        </section>
        <section>
          <h3
            style={{ color: colorWhite, backgroundColor: backgroundColorDark }}
          >
            ENGLISH TECHNICAL TRANSLATOR
          </h3>
          <h3 style={{ color: colorWhite }}>
            <strong>
              Astaldi Ictas, Josef Gartner, Paroc, Lemminkäinen, Globus
              translation agency, freelance
            </strong>
          </h3>
          <h3 style={{ color: colorWhite }}>
            <strong>Tver - Saint-Petersburg, Russia</strong>
          </h3>
          <h4>2010 - 2016</h4>
          <p>
            Translation, interpreting, writing, proofreading in construction and
            manufacturing industries.
          </p>
        </section>
        <section>
          <h3
            style={{ color: colorWhite, backgroundColor: backgroundColorDark }}
          >
            SEO COPYWRITER
          </h3>
          <h3 style={{ color: colorDarkBlue }}>
            <strong>Online-marketing agencies</strong>
          </h3>
          <h4>2011 - 2012</h4>
          <p>
            Advertising, web-content creation, SEO copywriting, translation,
            editing, negotiations with clients, moderation of an online shoe
            store community in a social network
          </p>
        </section>
        <section className="white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#aba9bb"
              fillOpacity="1"
              d="M0,160L80,160C160,160,320,160,480,170.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section className="empty"></section>
      </div>
    </div>
  );
}
