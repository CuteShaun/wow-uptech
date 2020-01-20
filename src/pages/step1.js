import React from "react";
import Title from "../components/title";
import Field from "../components/field/field";

const Step1 = ({ options, type, onChange, value, info }) => {
  return (
    <>
      <Title title="Step1"></Title>
      <Field
        value={value}
        type={type}
        labelText="Card Number"
        onChange={onChange}
        info={info}
      ></Field>

      <label forHtml="country-select">Country Name</label>
      <select
        id="country-select"
        onChange={e => onChange("countryName", e.target.value)}
      >
        {options.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </>
  );
};

export default Step1;
