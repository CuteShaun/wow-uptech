import React from "react";

const Field = ({ type, id, value, labelText }) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} value={value}></input>
    </>
  );
};

export default Field;
