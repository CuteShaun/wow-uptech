const updateField = (field, payload) => {
  return {
    type: "UPDATE_FIELD",
    field,
    payload
  };
};

const increaseStep = payload => {
  return {
    type: "INCREASE_STEP",
    payload
  };
};

const success = payload => {
  return {
    type: "SUCCESS",
    payload
  };
};

const submit = () => {
  return {
    type: "SUBMIT"
  };
};

export { updateField, increaseStep, submit, success };
