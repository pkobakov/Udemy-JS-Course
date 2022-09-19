


function myPromise() {
    return new Promise((resolve, reject) => {
        const num1= 2;
        const num2= 4;

        if (num1+num2 == 6) {
            resolve('Success');
        } else {
            reject('The Promise Failed');
        }
    });
}

myPromise().then(data => {

    console.log(data);
})

const testName = 'Petar';
const age = 47;


function person(username, age) {

    return new Promise((resolve, reject) => {
        
        if (username.length == 5 && age > 40) {
            const person = {name: username, age: age};
            resolve(`The person is: ${JSON.stringify(person)}`)
        } else {
            reject('Something wrong. Try again');
        }
    });
}

person(testName, age).then(data => {
    console.log(data);
}
    );