import React from "react";

const Field = ({ type, id, value }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input type={type} id={id} value={value}></input>
    </>
  );
};

export default Field;
