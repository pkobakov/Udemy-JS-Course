function getName(){
    return prompt('Please write a name', '');
}

function greet(){
    const name = getName();
    console.log('Hello ' + name);

}

greet();