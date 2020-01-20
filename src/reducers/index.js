const initialState = {
  step: 1,
  cardNumber: "",
  postalCode: "",
  zipCode: "",
  success: null,
  countryName: "Ukraine"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.payload
      };
    case "INCREASE_STEP":
      return {
        ...state,
        step: state.step + 1
      };
    case "SUBMIT":
      return {
        cardNumber: state.cardNumber,
        postalCode: state.postalCode,
        zipCode: state.zipCode,
        countryName: state.countryName
      };
    case "SUCCESS":
      return {
        ...state,
        success: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
