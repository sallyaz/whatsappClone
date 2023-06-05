export const reducer = (state, action) => {
  const {validationResult, id} = action;

  let isValid = true;

  const updateValidities = {
    ...state.inputValidities,
    [id]: validationResult,
  };

  for (const key in updateValidities) {
    if (updateValidities[key] !== undefined) {
      isValid = false;
      break;
    }
  }
  return {
    inputValidities: updateValidities,
    formIsValid: isValid,
  };
};
