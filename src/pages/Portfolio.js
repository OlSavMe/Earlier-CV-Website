import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/PortfolioStyles.scss";
import "../App.scss";
import Select from "react-select";
import Loader from "../components/Loader";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px #040404",
    color: state.isSelected ? "green" : "#040404",
    padding: 10,
    backgroundColor: state.isSelected ? "#dfd8c8" : "white",
  }),
  control: (base, state) => ({
    ...base,
    background: "white",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: state.isFocused ? "#49494b" : "#040404",
    boxShadow: state.isFocused ? "#dfd8c8" : "#040404",
    "&:hover": {
      borderColor: state.isFocused ? "#49494b" : "#040404",
    },
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: 3,
  }),
};

export default function Portfolio() {
  const data = [
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
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getXs();
  }, []); // eslint-disable-line

  const getXs = async (milliseconds = 500) => {
    await sleep(milliseconds);
    Axios.get("https://api.github.com/users/OlSavMe/repos?per_page=100").then(
      (response) => {
        setRepos(response.data);
        setLoading(false);
      }
    );
  };

  const forksout = repos.filter((repo) => repo.fork === false);
  console.log(Object.getOwnPropertyNames(repos));
  console.log(forksout);

  console.log(`${selectedValue}`);
  const filtered = forksout.filter(
    (repo) => repo.language === `${selectedValue}`
  );
  console.log(filtered);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="repos">
          <h1>My GitHub (OlSavMe)</h1>
          <div className="select">
            <Select
              styles={customStyles}
              placeholder="Search by type..."
              value={data.selectedValue} // set selected value
              options={data} // set list of the data
              onChange={handleChange}
            />
          </div>
          {selectedValue !== "All repositories" ? (
            <ul>
              {filtered.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                  {repo.homepage ? (
                    <span>
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.homepage}
                      </a>
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {" "}
              {forksout.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                  {repo.homepage ? (
                    <span>
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.homepage}
                      </a>
                    </span>
                  ) : null}
                </li>
              ))}
              {loading && <Loader />}
            </ul>
          )}
        </div>
        <section className="empty"></section>
      </div>
    </div>
  );
}
