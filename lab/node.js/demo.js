//Pure Node.js --------------

// const http = require('http');

// const server = http.createServer((request, response) => {
//  let body = [];
//  console.log(request.method, request.url);
//  request.on('data', (data) => {
//     body.push(data);
//  });
//  request.on('end', () => {
//  body = Buffer.concat(body).toString();
//  console.log(body);
//  let username = 'Unknown User';
 
//  if (body) {
//     username = body.split('=')[1];
//  }

//  response.setHeader('Content-Type','text/html'); 
//  response.write(`
//  <h1>Hello ${username}!</h1>
//  <form method="POST" action="/">
//    <label for="username">Username</label>
//    <input type="text" id="username" name="username"/>
//    <button type="submit" style="background-color:blue; color: white;">Send</button>
// </form>`);
//  response.end();
//  });   
 
// });

// server.listen(3000);

//Express.js --------------------

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use('view-engine', 'ejs');
app.use('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
    const username = req.body.username || 'Unknown User';
    res.render('index', {
        user: username
    });
    // res.send(`
    // <h1>Hello ${username}!</h1>
    // <form method="POST" action="/">
    //    <label for="username">Username</label>
    //    <input type="text" id="username" name="username"/>
    //    <button type="submit" style="background-color:blue; color: white;">Send</button>
    // </form>`);
});

app.listen(3000);
