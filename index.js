const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send({Hola: 'Mundo  Cruel'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);


// https://glacial-eyrie-07817.herokuapp.com/ 
//  https://git.heroku.com/glacial-eyrie-07817.git