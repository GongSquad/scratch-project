const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const entrySchema = new Schema({
  title: {type: String, required: false},
  date: {type: String, required: true},
  category: {type: String, required: true},
  text: {type: String, required: false}
})

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = mongoose.model('entry', entrySchema);