import React from "react";
import ".././styles/LoaderStyles.scss";

function Loader() {
  return (
    <div className="loader">
      <i className="fa fa-ring fa-spin"></i>
      <p>I'm loading...</p>
    </div>
  );
}

export default Loader;
