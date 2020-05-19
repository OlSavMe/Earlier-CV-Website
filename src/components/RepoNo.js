import React from "react";
import { colorWhite } from "../styles/centralStyles";

function RepoNo(props) {
  const length = props.length;
  return (
    <>
      {length ? (
        <h2 style={{ color: colorWhite, margin: 0, paddingLeft: "1rem" }}>
          {length} repositories
        </h2>
      ) : null}
    </>
  );
}

export default RepoNo;
