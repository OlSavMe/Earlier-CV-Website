import React from "react";
import "../styles/CareerStyles.scss";
import { colorWhite } from "../styles/centralStyles";
import { backgroundColorDark } from "../styles/centralStyles";
import { careerData } from "./PagesData";
import Position from "../components/Position";

export default function Career() {
  return (
    <div className="career">
      <div className="container">
        <h3 style={{ color: colorWhite, backgroundColor: backgroundColorDark }}>
          WORK EXPEREINCE
        </h3>
        <section>
          <span>
            <p>
              {" "}
              During 2019 - 2020, I've worked in several team projects as a
              React/JavaScript developer.
            </p>
            <p>
              {" "}
              Tools I've used at work include: ReactJS and other JavaScript
              libraries, SASS/SCSS, SQL, Axios, git version control, WordPress
              as a headless CMS, Figma for wireframes.
            </p>
          </span>
          <span>
            In my pre-IT career I was an English technical translator for 7
            years. I have experience in SEO copywriting and digital marketing.
          </span>
        </section>
        {careerData.map((item, index) => (
          <Position key={index} {...item} index={index} />
        ))}

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
