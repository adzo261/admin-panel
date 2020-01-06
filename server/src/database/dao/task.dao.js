import mongoose from 'mongoose';
import TaskSchema from '../../models/Task';

TaskSchema.statics = {
  create(data, cb) {
    const task = new this(data);
    task.save(cb);
  },

  get(query, cb) {
    this.find(query, cb);
  },

  update(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete(query, cb) {
    this.findOneAndDelete(query, cb);
  }
};

const tasksModel = mongoose.model('tasks', TaskSchema);
module.exports = tasksModel;
