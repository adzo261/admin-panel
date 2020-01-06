import Tasks from '../database/dao/task.dao';

exports.addTask = (req, res) => {
  const task = {
    category: req.body.category,
    taskBody: req.body.taskBody,
    mentor: req.body.mentor,
    completion: req.body.completion
  };
  Tasks.create(task, err => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      message: 'Task added successfully'
    });
  });
};

exports.getAllTasks = (req, res) => {
  Tasks.get({}, (err, tasks) => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      tasks
    });
  });
};

exports.getTasks = (req, res) => {
  Tasks.get({ mentor: req.params.email }, (err, tasks) => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      tasks
    });
  });
};

exports.updateTask = (req, res) => {
  const task = {
    category: req.body.category,
    taskBody: req.body.taskBody,
    mentor: req.body.mentor,
    completion: req.body.completion
  };
  Tasks.update({ _id: req.params.id }, task, err => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      message: 'Task updated successfully'
    });
  });
};

exports.removeTask = (req, res) => {
  Tasks.delete({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      message: 'Task deleted successfully'
    });
  });
};
