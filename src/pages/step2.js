import React from "react";
import Title from "../components/title";
import Field from "../components/field/field";

const Step2 = ({ value, options, type, labelText }) => {
  return (
    <>
      <Title title="Step2"></Title>
      <Field value={value} type={type} labelText={labelText}></Field>
    </>
  );
};

export default Step2;
