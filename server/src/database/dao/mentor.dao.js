import mongoose from 'mongoose';
import MentorSchema from '../../models/Mentor';

MentorSchema.statics = {
  create(data, cb) {
    const mentor = new this(data);
    mentor.save(cb);
  },

  get(query, cb) {
    this.find(query, cb);
  },

  getById(query, cb) {
    this.find(query, cb);
  },

  update(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete(query, cb) {
    this.findOneAndDelete(query, cb);
  }
};

const mentorsModel = mongoose.model('mentors', MentorSchema);
module.exports = mentorsModel;
