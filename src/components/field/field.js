import React from "react";

const Field = ({ type, id, value, labelText, onChange, info }) => {

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={e => onChange(info, e.target.value)}
      ></input>
    </>
  );
};

export default Field;
