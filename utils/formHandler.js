import {validate} from 'validate.js';

export const formHandler = (inputId, inputValue) => {
  const consntraints = {
    presence: {allowEmpty: false},
  };

  if (inputId == 'First Name' || inputId == 'Last Name') {
    consntraints.format = {
      pattern: '[a-z]+',
      flags: 'i',
      message: 'can only contain letters',
    };
  } else if (inputId == 'Email') {
    consntraints.email = true;
  } else if (inputId == 'Password') {
    consntraints.length = {
      minimum: 6,
      message: 'Password must be more than 6 charecters',
    };
  }

  const validationResult = validate(
    {[inputId]: inputValue},
    {[inputId]: consntraints},
  );

  return validationResult && validationResult[inputId];
};
