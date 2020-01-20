import React from "react";

const Button = ({ text, handler }) => (
  <button type="button" onClick={handler}>
    {text}
  </button>
);

export default Button;
