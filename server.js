
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

app.use(morgan('dev'));
app.use(cors());

app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});