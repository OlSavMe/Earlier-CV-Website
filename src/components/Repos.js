import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function All() {
  const [xs, setXs] = useState([]);

  useEffect(() => {
    getXs();
  }, []);

  const getXs = async () => {
    await Axios.get("https://api.github.com/users/OlSavMe/repos").then(
      (response) => {
        setXs(response.data);
      }
    );
  };

  const filtered = xs.filter((repo) => repo.fork == false);

  return (
    <>
      <ul>
        {filtered.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">
              {" "}
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
