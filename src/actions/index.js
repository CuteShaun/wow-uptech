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

const decreaseStep = payload => {
  return {
    type: "DECREASE_STEP",
    payload
  };
};

export { updateField, increaseStep, decreaseStep };