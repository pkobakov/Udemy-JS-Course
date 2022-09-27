// Sets ----------------------------

// const ids = new Set([1, 2, 3, 4]);
// console.log(ids);

// const mySet = new Set(['Hi', 'from the', 'set']);

// mySet.add('!');

// if (mySet.has('Hi')) {
//     mySet.delete('Hi');
// }


// for (const entry of mySet.entries()) {
//     console.log(entry[0]);
// }


// Maps ------------------------------


const max = {name: 'Max'};
const anna = {name: 'Anna'};

// const info = new Map ();
// info.set(max.name, [{personalName: 'Max'}, {birthDay: '12/04/2009'},{hobbies: ['ski', 'tennis']}]);

// console.log(info);

// info.set(anna.name, [{personalName: 'Anna'}, {birthDay: '09/11/2007'}, {hobbies: ['dancing', 'coocking']}]);

// for (const [key, value] of info.entries()) {
//     console.log(key, value);
// }

// console.log(info.get(anna.name));


const info = new Map ([[max.name, [{person: 'Max', birthDay: '11/12/1976'}]]]);

console.log(info);

info.set(anna.name, [{person: 'Anna', birthDay: '23/11/1988'}]);

console.log(info.get(anna.name));





for (const [key, value] of info.entries()) {
    console.log(key, value);
}

for (const key of info.keys()) {
    console.log(key);
}

for (const value of info.values()) {
    console.log(value);
}


