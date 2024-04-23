const express = require('express')
const app = express()

app.get('/homepage', function (req, res) {
  res.send('My name is mary')
})


app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
});