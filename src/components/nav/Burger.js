import React from "react";
import { bool, func } from "prop-types";

const Burger = ({ open, setOpen }) => {
  return (
    <button
      open={open}
      onClick={() => setOpen(!open)}
      className={open ? "" : "closed"}
    >
      <div />
      <div />
      <div />
    </button>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;
