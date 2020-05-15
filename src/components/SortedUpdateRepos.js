import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";

export default function SortedUpdateRepos() {
  const [sorted, setSorted] = useState([]);
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getSorted();
  }, []);

  const getSorted = async (milliseconds = 500) => {
    await sleep(milliseconds);
    Axios.get(
      "https://api.github.com/users/OlSavMe/repos?sort=updated&direction=desc&per_page=100"
    ).then((response) => {
      setSorted(response.data);
      setLoading(false);
    });
  };

  const nofork = sorted.filter((repo) => repo.fork == false);

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
