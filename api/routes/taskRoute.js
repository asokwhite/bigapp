'use strict';
module.exports = function(app) {
  var appList = require('../controllers/taskController');

  // todoList Routes
  app.route('/tasks')
    .get(appList.list_all_tasks)
    .post(appList.create_a_task);


  app.route('/tasks/:taskId')
    .get(appList.read_a_task)
    .put(appList.update_a_task)
    .delete(appList.delete_a_task);

  app.route('/autosearch').get(appList.autosearch_tasks)
};
