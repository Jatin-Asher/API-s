const express = require('express');
const app = express();
const path = require('path');
const port = 5959;

app.use(express.json())
app.use(express.static(path.join(__dirname)));

app.get('/hello',(req,res) =>
{
    
    res.sendFile(path.join(__dirname, 'try.html'));
})
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}/hello`)
})