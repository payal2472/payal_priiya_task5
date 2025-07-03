const express = require('express');

const app = express();
app.get('/hello', (req, res) => {
    res.status(200).json({msg:"hello world"})
});
const 

