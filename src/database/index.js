const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dev-8veol.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(err => {
  console.log(err);
});

module.exports = mongoose