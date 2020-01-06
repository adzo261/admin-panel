import mongoose from 'mongoose';

const { Schema } = mongoose;

const MentorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  qualification: {
    type: Array,
    default: ['Computer Science Engineer']
  }
});

export default MentorSchema;
