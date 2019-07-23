const express = require('express')
const app = express();
const port = 7000

app.get('/style.css', (req, res) => {
  console.log('serving css')
  res.sendFile(__dirname + '/style.css')
})

app.get('*', (req,res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})

