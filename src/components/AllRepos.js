import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";
import RepoNo from "./RepoNo";
import { allRepos } from "../Constants";
import "../styles/repoStyles.scss";

export default function AllRepos() {
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
  const length = nofork.length;

  return (
    <div className="outer">
      <RepoNo length={length} />
      <div className="inner">
        {nofork.map((repo) => (
          <div key={repo.id} className="single">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
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
          </div>
        ))}
        {loading && <Loader />}
      </div>
      {/* <section style={{ minHeight: "500px" }}></section> */}
    </div>
  );
}
