import {validate} from 'validate.js';

export const formHandler = (inputId, inputValue) => {
  const consntraints = {
    presence: {allowEmpty: false},
    format: {
      pattern: '[a-z]+',
      flags: 'i',
      message: 'can only contain letters',
    },
    email: true,
  };

  const validationResult = validate(
    {[inputId]: inputValue},
    {[inputId]: consntraints},
  );
  return validationResult && validationResult[inputId];
};
