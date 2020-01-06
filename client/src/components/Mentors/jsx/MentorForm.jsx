import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '../css/MentorForm.css';
export default class MentorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.mentor && this.props.mentor._id,
      name: this.props.mentor && this.props.mentor.name,
      email: this.props.mentor && this.props.mentor.email,
      mobile: this.props.mentor && parseInt(this.props.mentor.mobile),
      qualification: this.props.mentor && this.props.mentor.qualification
    };
  }
  onChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  resetForm = event => {
    this.setState({
      id: '',
      name: '',
      email: '',
      mobile: '',
      qualification: ''
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const mentor = this.state;
    if (this.props.add) {
      axios
        .post('/api/mentors/create', { ...mentor })
        .then(res => console.log(res));
    } else if (this.props.edit) {
      axios
        .put('/api/mentors/update/' + mentor.id, { ...mentor })
        .then(res => console.log(res));
    }
    this.props.setAddMentorModal(false);
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Mentor's Name</Form.Label>
          <Form.Control
            type="name"
            id="name"
            placeholder="Name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mentor's Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={this.onChange}
            value={this.state.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mentor's Mobile No.</Form.Label>
          <Form.Control
            type="number"
            id="mobile"
            placeholder="Eg: 9941346738"
            onChange={this.onChange}
            value={this.state.mobile}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mentor's Qualification</Form.Label>
          <Form.Control
            type="text"
            id="qualification"
            placeholder="Eg: Bachelor of Arts (B.A)"
            onChange={this.onChange}
            value={this.state.qualification}
          />
        </Form.Group>
        <Form.Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              className="add-mentor-action-btn"
            >
              Done
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className="add-mentor-action-btn"
              onClick={this.resetForm}
            >
              Reset
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
