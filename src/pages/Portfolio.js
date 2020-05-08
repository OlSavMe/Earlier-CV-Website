import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/PortfolioStyles.scss";
import "../App.scss";
import Select from "react-select";
import AllRepos from ".././components/AllRepos";
import ByLangRepos from ".././components/ByLangRepos";
import SortedUpdateRepos from ".././components/SortedUpdateRepos";
import DeployedRepos from ".././components/DeployedRepos";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px #040404",
    color: state.isSelected ? "green" : "#040404",
    padding: 10,
    fontSize: "1.2rem",
    backgroundColor: state.isSelected ? "#dfd8c8" : "white",
  }),
  control: (base, state) => ({
    ...base,
    fontSize: "1.2rem",
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
      value: "By latest update",
      label: "By latest update",
    },
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

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

  return (
    <div className="portfolio">
      <div className="container">
        <div className="repos">
          <h1>
            My GitHub (
            <a
              href="https://github.com/OlSavMe"
              target="_blank"
              rel="noopener noreferrer"
            >
              OlSavMe
            </a>
            )
          </h1>
          <div className="select">
            <Select
              styles={customStyles}
              placeholder="Search by type..."
              value={data.selectedValue} // set selected value
              options={data} // set list of the data
              onChange={handleChange}
            />
          </div>
          {(() => {
            switch (selectedValue) {
              case "By latest update":
                return <SortedUpdateRepos />;
              case "All repositories":
                return <AllRepos />;
              case "Java":
                return <ByLangRepos selectedValue={selectedValue} />;
              case "JavaScript":
                return <ByLangRepos selectedValue={selectedValue} />;
              case "HTML":
                return <ByLangRepos selectedValue={selectedValue} />;
              case "Only deployed":
                return <DeployedRepos />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
