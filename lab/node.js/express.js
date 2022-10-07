const express = require('express');
const app = express();

app.use(logger); 

app.get('/', (req, res) => {
    res.send('Home page');
})

app.get('/users', (req, res) => {
    console.log('Users Page');
    res.send('Users page');
})

function logger(req, res, next) {
    console.log('before');
    next();
    console.log('after');
};

function auth(req, res, next){
    if (req.query.admin) {
        req.admin = true;
        next();
        return;     
    } 
      res.send('Not Authorized');
    
}

app.listen(3030);