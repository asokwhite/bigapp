# bigapp
Task work
[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)



Install dependencies:

```bash

$ npm install express --save
$ npm install mongodb --save

$ npm install
```

  Start the server:

```bash
$ npm start
```

```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

Api Documentation:
```js
exports.list_all_tasks = function(req, res) {  
  var data = req.query;
  var searchQuery = {};
  if(data.endcase == 1 && data.date)
    searchQuery.task_end_date = {$lt: new Date(data.date)};
  if(data.endcase == 2 && data.date)
    searchQuery.task_end_date = {$gt: new Date(data.date)};
  if(data.user)
    searchQuery.task_created_by = data.user;
  if(data.task_name)
    searchQuery.task_name = data.task_name;
  if(data.task_description)
    searchQuery.task_description = data.task_description;

  Task.find(searchQuery, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.autosearch_tasks = function(req, res) {  
  var data = req.query;
  var searchQuery = {};
  var regex = new RegExp(data.search, 'i');
  searchQuery.$or = [{task_name:regex },{task_description:regex },{task_created_by:regex}]; 
  var query = Task.find(searchQuery, function(err, task) {
  
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

