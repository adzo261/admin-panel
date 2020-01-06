import Mentors from '../database/dao/mentor.dao';

exports.addMentor = (req, res) => {
  const mentor = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    qualification: req.body.qualification
  };
  Mentors.create(mentor, err => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      message: 'Mentor added successfully'
    });
  });
};

exports.getMentors = (req, res) => {
  Mentors.get({}, (err, mentors) => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      mentors
    });
  });
};

exports.getMentor = (req, res) => {
  Mentors.get({ _id: req.params.id }, (err, mentors) => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      mentors
    });
  });
};

exports.updateMentor = (req, res) => {
  const mentor = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    qualification: req.body.qualification
  };
  Mentors.update({ _id: req.params.id }, mentor, err => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      message: 'Mentor updated successfully'
    });
  });
};

exports.removeMentor = (req, res) => {
  Mentors.delete({ _id: req.params.id }, err => {
    if (err) {
      res.json({
        error: err
      });
      return;
    }
    res.json({
      message: 'Mentor deleted successfully'
    });
  });
};
