import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";
import RepoNo from "./RepoNo";
import { sortedRepos } from "../Constants";
import RepoLayout from "./RepoLayout";
import "../styles/repoStyles.scss";

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
    <div className="outer">
      <RepoNo length={length} />
      <div className="inner">
        {nofork.map((repo) => (
          <RepoLayout key={repo.id} {...repo} />
        ))}
        {loading && <Loader />}
      </div>
      <section style={{ minHeight: "300px" }}></section>
    </div>
  );
}
