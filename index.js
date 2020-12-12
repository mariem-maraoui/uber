const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');
const contrUser = require('./controllers/user');

const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.post('/api/login', contrUser.login);

mongoose.connect('mongodb://localhost:27017/uber9', {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true});


app.use('/api/user', userRouter);


app.listen(port, () => { 
    console.log('Server app listening on port ' + port);
});
