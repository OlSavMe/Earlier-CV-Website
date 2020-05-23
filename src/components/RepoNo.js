import React from "react";
import { colorWhite } from "../styles/centralStyles";

function RepoNo(props) {
  const length = props.length;
  return (
    <>
      {length ? (
        <h2 style={{ color: "#8b8c93", margin: 0 }}>{length} repositories</h2>
      ) : null}
    </>
  );
}

export default RepoNo;
