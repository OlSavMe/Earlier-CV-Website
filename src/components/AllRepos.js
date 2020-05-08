import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";

export default function AllRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRepos();
  }, []);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const getAllRepos = async (milliseconds = 200) => {
    await sleep(milliseconds);
    Axios.get("https://api.github.com/users/OlSavMe/repos?per_page=100").then(
      (response) => {
        setRepos(response.data);
        setLoading(false);
      }
    );
  };

  const nofork = repos.filter((repo) => repo.fork == false);

  return (
    <>
      <ul>
        {nofork.map((repo) => (
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
