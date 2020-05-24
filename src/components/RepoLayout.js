import React from "react";
import "../styles/repoStyles.scss";

const RepoLayout = (props) => {
  const { html_url, name, description, homepage } = props;

  return (
    <div className="single">
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        {" "}
        {name}
      </a>
      <p>{description}</p>
      {homepage ? (
        <span>
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
        </span>
      ) : null}
    </div>
  );
};
export default RepoLayout;
