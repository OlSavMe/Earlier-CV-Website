import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";
import RepoNo from "./RepoNo";
import RepoLayout from "./RepoLayout";
import { allRepos } from "../Constants";
import "../styles/repoStyles.scss";

export default function DeployedRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRepos(); // eslint-disable-next-line
  }, []);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const getAllRepos = async (milliseconds = 200) => {
    await sleep(milliseconds);
    Axios.get(`${allRepos}`).then((response) => {
      setRepos(response.data);
      setLoading(false);
    });
  };

  const nofork = repos.filter((repo) => repo.fork === false);
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
        {loading && <Loader />}
      </div>
      <section style={{ minHeight: "300px" }}></section>
    </div>
  );
}
