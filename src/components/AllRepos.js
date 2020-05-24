import React from "react";
import RepoNo from "./RepoNo";
import RepoLayout from "./RepoLayout";
import "../styles/repoStyles.scss";

export default function AllRepos(props) {
  const nofork = props.nofork;
  const length = nofork.length;

  return (
    <div className="outer">
      <RepoNo length={length} />
      <div className="inner">
        {nofork.map((repo) => (
          <RepoLayout key={repo.id} {...repo} />
        ))}
      </div>
      <section style={{ minHeight: "300px" }}></section>
    </div>
  );
}
