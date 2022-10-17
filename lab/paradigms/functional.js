const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }

    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue
    }
}


function getUserInput(inputElementId) {
    return document.getElementById(inputElementId).value;
}

function createUser(username, password) {
    if (!validate(username, REQUIRED) || !validate(password, MIN_LENGTH, 6)) {
        throw new Error('Invalid input - wrong credentials');  
    }

    return {
        username: username,
        password: password
    };
}

function greet(user) {
    console.log('Hi, I am  ' + user.username);
}

function signupHandler(event) {
 event.preventDefault();
 const username = getUserInput('username');
 const password = getUserInput('password');

 try {
     const newUser = createUser(username, password);
     greet(newUser);

 } catch(err) {
    alert(err.message);
 }

}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);