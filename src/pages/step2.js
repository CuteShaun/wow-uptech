import React from "react";
import Title from "../components/title";
import Field from "../components/field/field";

const Step2 = ({ value, type, labelText, onChange, info }) => {
  return (
    <>
      <Title title="Step2"></Title>
      <Field
        value={value}
        onChange={onChange}
        info={info}
        type={type}
        labelText={labelText}
      ></Field>
    </>
  );
};

export default Step2;
