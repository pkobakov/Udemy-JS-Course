const generateText = (inputName, inputAge) => {
  // Returns output text
  return `${inputName} (${inputAge} years old)`;
};

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.checkAndGenerate = (inputName, inputAge) => {
  
  if (
    !validateInput(inputName, true, false) ||
    !validateInput(inputAge, false, true)
  ) {
    return false;
  }

  return generateText(inputName, inputAge);
}

exports.generateText = generateText;
exports.validateInput = validateInput;
