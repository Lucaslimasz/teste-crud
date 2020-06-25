const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb+srv://<name>:<password>@cluster0.dlbms.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models');

// separando rotas
app.use('/api', require('./src/routes'));


app.listen(3001)