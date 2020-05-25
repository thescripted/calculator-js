import React from "react";

const isZero = (val) => {
  return val === "0";
};

const Button = ({ children, handleClick }) => {
  return (
    <div
      className={`button-wrapper ${isZero(children) ? "zero-button" : null}`}
      onClick={() => handleClick(children)}
    >
      {children}{" "}
    </div>
  );
};

export default Button;
