// https://jsonplaceholder.typicode.com/

const listOfElements = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');



function sendHttpRequest(method, url) {

    const promise = new Promise ((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';  
            
        xhr.onload = function () {
            resolve(xhr.response);
            
        }
        xhr.send();
    });
    
    return promise;
};

async function fetchPosts() {
    const responseData = await sendHttpRequest(
        'GET', 
        'https://jsonplaceholder.typicode.com/posts');
    const listOfPosts = responseData;
            // const listOfPosts = JSON.parse(xhr.response); - another way to configure the response data from json to js
            // console.log(listOfPosts);
            
    for (const post of listOfPosts) {
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                listOfElements.append(postEl);
    }
}
    
fetchPosts();
 


const myObj = {
    name: 'Petar',
    age: 47,
    hobbies: ['Hockey', 'Ski', 'Coding']
}

const jsonObj = JSON.stringify(myObj);
console.log(jsonObj);
console.log(typeof jsonObj);


