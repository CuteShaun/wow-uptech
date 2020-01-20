import React from "react";
import { Step1, Step2, Success } from "../../pages";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "../button";
import { increaseStep, updateField, submit, success } from "../../actions";

const options = ["Ukraine", "United States"];

const Form = props => {
  const {
    cardNumber,
    postalCode,
    zipCode,
    step,
    help,
    success,
    countryName,
    saveFormField,
    nextStep,
    submitData,
    history,
    setSuccess
  } = props;

  const next = () => {
    history.push("/pages/2");
    nextStep();
  };

  const submit = () => {
    history.push("/pages/success");

    submitData();
    setSuccess(true);
  };

  const renderSteps = () => {
    if (success) {
      return <Success />;
    } else if (help) {
    } else if (step === 1) {
      return (
        <>
          <Step1
            value={cardNumber}
            type="number"
            options={options}
            onChange={saveFormField}
            info="cardNumber"
          ></Step1>
          <Button
            text="Next"
            handler={cardNumber && countryName ? next : null}
          ></Button>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <Step2
            value={countryName === "Ukraine" ? postalCode : zipCode}
            info={zipCode ? "zipCode" : "postalCode"}
            labelText={countryName === "Ukraine" ? "postalCode" : "zipCode"}
            onChange={saveFormField}
          ></Step2>

          <Button
            text="Submit"
            handler={postalCode || zipCode ? submit : null}
          ></Button>
        </>
      );
    }
  };
  return <form>{renderSteps()}</form>;
};

const mapStateToProps = state => {
  return {
    step: state.step,
    success: state.success,
    help: state.help,
    cardNumber: state.cardNumber,
    postalCode: state.postalCode,
    zipCode: state.zipCode,
    countryName: state.countryName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFormField: (field, payload) => dispatch(updateField(field, payload)),
    nextStep: () => dispatch(increaseStep()),
    submitData: () => dispatch(submit()),
    setSuccess: payload => dispatch(success(payload))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
