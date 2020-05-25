import React, { useState, useEffect } from "react";
import "../styles/PortfolioStyles.scss";
import "../App.scss";
import Axios from "axios";
import Loader from "../components/Loader";
import Select from "react-select";
import AllRepos from "../components/AllRepos";
import { sortedRepos } from "../Constants";
import ByLangRepos from ".././components/ByLangRepos";
import DeployedRepos from ".././components/DeployedRepos";
import selectStyles from "../styles/selectStyles";

export default function Portfolio() {
  const data = [
    {
      value: "Only deployed",
      label: "Only deployed",
    },
    {
      value: "Java",
      label: "Java",
    },
    {
      value: "JavaScript",
      label: "JavaScript | ReactJS | React Native",
    },
    {
      value: "HTML",
      label: "HTML | CSS | JQuery | BootStrap",
    },
    {
      value: "All repositories",
      label: "All repositories",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("All repositories");

  const [sorted, setSorted] = useState([]);
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getSorted(); // eslint-disable-next-line
  }, []);

  const getSorted = async (milliseconds = 200) => {
    await sleep(milliseconds);
    Axios.get(`${sortedRepos}`).then((response) => {
      setSorted(response.data);
      setLoading(false);
    });
  };

  const nofork = sorted.filter((repo) => repo.fork === false);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  const getRepo = () => {
    // eslint-disable-next-line
    switch (selectedValue) {
      case "All repositories":
        return <AllRepos nofork={nofork} />;
      case "Java":
        return <ByLangRepos selectedValue={selectedValue} nofork={nofork} />;
      case "JavaScript":
        return <ByLangRepos selectedValue={selectedValue} nofork={nofork} />;
      case "HTML":
        return <ByLangRepos selectedValue={selectedValue} nofork={nofork} />;
      case "Only deployed":
        return <DeployedRepos nofork={nofork} />;
    }
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="headbar">
          <h1>
            My GitHub Repos
            <a
              href="https://github.com/OlSavMe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>OlSavMe</span>
            </a>
          </h1>
          <div className="select">
            <Select
              styles={selectStyles}
              placeholder="Search by type..."
              value={data.selectedValue} // set selected value
              options={data} // set list of the data
              onChange={handleChange}
            />
          </div>
        </div>
        {loading ? <Loader /> : <div className="repos">{getRepo()}</div>}
      </div>
    </div>
  );
}
