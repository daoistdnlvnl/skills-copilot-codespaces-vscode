//create web server
const express = require('express');
const app = express();
const port = 3000;

//load the comments file
const comments = require('./comments');

//serve the comments file
app.get('/comments', (req, res) => {
    res.json(comments);
});

//listen for requests
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});