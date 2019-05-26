const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema2 = Schema({
  nombrecon: {
    type:String,
    required: true,
  },
    DUI: {
    type:String,
    required: true,
  },
  fechainit: {
    type:String,
    required: true,
  },
    telefono: {
    type:String,
    required: true,
  },
});


module.exports = mongoose.model('tasks2', TaskSchema2);
