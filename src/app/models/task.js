const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: { 
  	type:String,
  	required: true,
  },
  description: {
  	type:String,
  	required: true,
  },
  title2: {
  	type:String,
    required: true,
  },
  //second crud
});



module.exports = mongoose.model('tasks', TaskSchema);
