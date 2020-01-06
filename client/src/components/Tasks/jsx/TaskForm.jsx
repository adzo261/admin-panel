import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '../css/TaskForm.css';
export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.task && this.props.task._id,
      category: this.props.task && this.props.task.category,
      taskBody: this.props.task && this.props.task.taskBody,
      mentor: this.props.task && this.props.task.mentor,
      completion: this.props.task && this.props.task.completion
    };
  }
  onChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  resetForm = event => {
    this.setState({
      id: '',
      category: '',
      taskBody: '',
      mentor: '',
      completion: ''
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const task = this.state;
    if (this.props.add) {
      axios
        .post('/api/tasks/create', { ...task })
        .then(res => console.log(res));
    } else if (this.props.edit) {
      axios
        .put('/api/tasks/update/' + task.id, { ...task })
        .then(res => console.log(res));
    }
    this.props.setAddTaskModal(false);
    window.location.reload();
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            id="category"
            placeholder="Category of the task"
            onChange={this.onChange}
            value={this.state.category}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            id="taskBody"
            placeholder="Enter the task"
            onChange={this.onChange}
            value={this.state.taskBody}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mentor</Form.Label>
          <Form.Control
            type="email"
            id="mentor"
            placeholder="Email of the mentor to whom this task is assigned"
            onChange={this.onChange}
            value={this.state.mentor}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Completition Percentage</Form.Label>
          <Form.Control
            type="number"
            id="completion"
            placeholder="Completition Percentage of the task"
            onChange={this.onChange}
            value={this.state.completion}
          />
        </Form.Group>
        <Form.Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              className="add-task-action-btn"
            >
              Done
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className="add-task-action-btn"
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
