import React from "react";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <nav open={open} className={open ? "" : "closed"}>
      <Link to="/">HOME</Link>
      <Link to="/all">SEARCH</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
