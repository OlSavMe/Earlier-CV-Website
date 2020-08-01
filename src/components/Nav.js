import React, { useEffect, useState } from "react";
import "../styles/Nav.scss";

import { Link } from "react-router-dom";

export default function Nav(props) {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPos);
  };

  return (
    <div className={show ? "active" : "hidden"}>
      <Link to="/">
        <span>OlgaSavka</span>
      </Link>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/career">
          <span>Career</span>
        </Link>
        <Link to="/portfolio">
          <span>Portfolio</span>
        </Link>
        <Link to="/edu">
          <span>Education</span>
        </Link>
      </nav>
    </div>
  );
}
