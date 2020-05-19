import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";
import RepoNo from "./RepoNo";
import { sortedRepos } from "../Constants";

export default function SortedUpdateRepos() {
  const [sorted, setSorted] = useState([]);
  const [loading, setLoading] = useState(true);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    getSorted(); // eslint-disable-next-line
  }, []);

  const getSorted = async (milliseconds = 200) => {
    await sleep(milliseconds);
    Axios.get(`${sortedRepos}`).then((response) => {
      setSorted(response.data);
      setLoading(false);
    });
  };

  const nofork = sorted.filter((repo) => repo.fork === false);
  const length = nofork.length;

  return (
    <>
      <ul>
        <RepoNo length={length} />
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
