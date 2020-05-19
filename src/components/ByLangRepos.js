import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";
import RepoNo from "./RepoNo";
import { allRepos } from "../Constants";

export default function ByLangRepos(props) {
  const selectedValue = props.selectedValue;
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
    (repo) => repo.language === `${selectedValue}`
  );

  const length = filtered.length;

  return (
    <>
      <ul>
        <RepoNo length={length} />
        {filtered.map((repo) => (
          <li key={repo.id}>
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
          </li>
        ))}
        {loading && <Loader />}
      </ul>
      <section style={{ minHeight: "500px" }}></section>
    </>
  );
}
