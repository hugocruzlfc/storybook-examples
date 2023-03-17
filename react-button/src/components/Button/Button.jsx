import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const gestStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");

export default function Button({ children, type }) {
  return <button className={gestStyles(type)}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};
