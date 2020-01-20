const initialState = {
  step: 1,
  cardNumber: "",
  postalCode: "",
  zipCode: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
