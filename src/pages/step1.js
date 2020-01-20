import React from "react";
import Title from "../components/title";
import Field from "../components/field/field";

const Step1 = ({ options, type }) => {
  return (
    <>
      <Title title="Step1"></Title>
      <Field type={type} labelText="Card Number"></Field>

      <label forHtml="country-select">Country Name</label>
      <select id="country-select" value={options}>
        {options.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </>
  );
};

export default Step1;
