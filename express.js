const express = require('express');
// const nunjucks = require('nunjucks');
const path = require('path');
// const fs = require('fs');

let app = express(); //

// nunjucks.configure({
// autoescape:true,
// express:app
// });

// app.set('view engine', 'nunjucks');

app.get('/',(req,res) => {
res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(9000, () => {
console.log('hello express');
});