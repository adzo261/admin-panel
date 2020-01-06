import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  taskBody: {
    type: String,
    required: true
  },
  mentor: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  completion: {
    type: Number,
    default: 0
  }
});

export default TaskSchema;
