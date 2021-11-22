const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const entrySchema = new Schema({
  title: {type: String, required: false},
  date: {type: Date, default: Date.now},
  // date: {type: String, required: true},
  category: {type: String, required: true},
  text: {type: String, required: false}
})

module.exports = mongoose.model('entry', entrySchema);