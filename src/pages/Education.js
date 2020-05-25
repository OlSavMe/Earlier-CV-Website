import React, { useState, useEffect } from "react";
import "../styles/EducationStyles.scss";
import Courses from "../components/Courses";
import Loader from "../components/Loader";
import Axios from "axios";

export default function Education() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getSections();
  }, []); // eslint-disable-line

  const getSections = async (milliseconds = 200) => {
    await sleep(milliseconds);
    Axios.get("../../Edu.json").then((response) => {
      setSections(response.data.sections);
      setLoading(false);
    });
  };

  return (
    <div className="edu">
      <div className="container">
        <section className="uni">
          <h2>
            Business Information Technologies, <br /> Haaga Helia UAS, Helsinki{" "}
            <br />
            2017-2020 (257 cr GPA 4.08/5)
          </h2>
          <h2>
            Linguistics and Intercultural Communication, <br /> Tver State
            University, Russia
            <br />
            2002 - 2008 (GPA 4.8/5)
          </h2>
        </section>
        <section className="courses">
          <h2>...some of Haaga Helia completed courses:</h2>
          {loading ? <Loader /> : <Courses sections={sections} />}
        </section>
        <section className="empty"></section>
      </div>
    </div>
  );
}
