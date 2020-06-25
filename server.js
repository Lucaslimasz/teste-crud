const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
mongoose.set('debug', true)
mongoose.connect("mongodb+srv://bancotest:novasenha@cluster0.dlbms.mongodb.net/Posts?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( () => {
  console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch((err) => console.error(err));

requireDir('./src/models');

//Body parser
app.use(express.json())
// separando rotas
app.use('/api', require('./src/routes'));


app.listen(3001)

// onde ta "omnistack" tem que ser o login ? sim suas credenciais de usuario e senha
// onde estava <dbname> eu já alterei para um banco qualquer
// vc não esta usando o body parser, que converte o corpo da request em um objeto javascript
// na web tudo é string
