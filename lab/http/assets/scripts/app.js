// https://jsonplaceholder.typicode.com/

const listOfElements = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.responseType = 'json'; - another way to configure the response data from json to js

xhr.onload = function () {
    const listOfPosts = JSON.parse(xhr.response);
    console.log(listOfPosts);

    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listOfElements.append(postEl);
    }

}

xhr.send();
