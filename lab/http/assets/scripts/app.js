// https://jsonplaceholder.typicode.com/

const listOfElements = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postsList = document.querySelector('ul'); 

function sendHttpRequest(method, url, data) {

//     const promise = new Promise ((resolve, reject) => {

//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json';  
            
//         xhr.onload = function () {

//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.response);
//             } else{
//                 reject(new Error('Something went wrong'))
//             }
            
//         };

//         xhr.onerror = () =>{
//            reject(new Error('Failed to send request'));
//         };

//         xhr.send( JSON.stringify(data));
//     });
    
//     return promise;
// };

    return fetch(url, {
        method: method,
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status >= 200 && response.status <300) {
            return response.json();
        } else {
            return response.json().then(err => {
            console.log(err); 
            throw new Error('Something went wrong - server-side.');   
            });
        }
 })
 .catch(error => {
    console.log(error);
    throw new Error('Something went wrong!');
 });
}

async function fetchPosts() {
    try{

        const responseData = await sendHttpRequest('GET',
            'https://jsonplaceholder.typicode.com/posts');
    
        const listOfPosts = responseData;
                // const listOfPosts = JSON.parse(xhr.response); - another way to configure the response data from json to js
                // console.log(listOfPosts);
                
        for (const post of listOfPosts) {
                    const postEl = document.importNode(postTemplate.content, true);
                    postEl.querySelector('h2').textContent = post.title.toUpperCase();
                    postEl.querySelector('p').textContent = post.body;
                    postEl.querySelector('li').id = post.id;
                    listOfElements.append(postEl);
        }
    } catch(error) {
        alert(error.message);
    }
}

async function createPost(title, content) {
    const userId = Math.random();

    const post = {
        title: title,
        body: content,
        userId: userId
    };

    const formData = new FormData(form);
    formData.append('userId', userId);

    await sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', formData);
}
    
fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event  => {
   event.preventDefault();
   const enteredTitle = event.currentTarget.querySelector('#title').value;
   const enteredContent = event.currentTarget.querySelector('#content').value;

   createPost(enteredTitle, enteredContent);
});


postsList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        
        const postId = event.target.closest('li').id;
        console.log(postId);
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});
 


const myObj = {
    name: 'Petar',
    age: 47,
    hobbies: ['Hockey', 'Ski', 'Coding']
}

const jsonObj = JSON.stringify(myObj);
console.log(jsonObj);
console.log(typeof jsonObj);