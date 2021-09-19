const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

let uri = 'mongodb+srv://pratiknew:pratik@pratik.7m6lk.mongodb.net/iplpredictor?retryWrites=true&w=majority'

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true});

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tweet'
  }]
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);