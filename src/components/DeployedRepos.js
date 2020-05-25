import React from "react";
import RepoNo from "./RepoNo";
import RepoLayout from "./RepoLayout";
import "../styles/repoStyles.scss";

export default function DeployedRepos(props) {
  const nofork = props.nofork;

  const filtered = nofork.filter(
    (repo) => repo.homepage !== null && repo.homepage !== ""
  );
  const length = filtered.length;

  return (
    <div className="outer">
      <RepoNo length={length} />
      <div className="inner">
        {filtered.map((repo) => (
          <RepoLayout key={repo.id} {...repo} />
        ))}
      </div>
      <section style={{ minHeight: "300px" }}></section>
    </div>
  );
}
