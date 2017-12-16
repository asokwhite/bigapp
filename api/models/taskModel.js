'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  task_name: {
    type: String
  },
  task_end_date: {
    type: Date    
  },
  task_description: {
    type: String    
  },
  task_created_date: { type: Date, default: Date.now },
  task_created_by : { type: String }
});

module.exports = mongoose.model('Tasks', TaskSchema);