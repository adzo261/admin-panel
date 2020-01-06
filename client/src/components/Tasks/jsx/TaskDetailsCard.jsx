import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../css/TaskDetailsCard.css';
import TaskForm from './TaskForm';
import { Redirect } from 'react-router';
export default class TaskDetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isAddTaskModalActive: false,
      isDeleteTaskModalActive: false
    };
  }
  setAddTaskModal = status => {
    this.setState({ isAddTaskModalActive: status });
  };
  setDeleteTaskModal = status => {
    this.setState({ isDeleteTaskModalActive: status });
  };
  deleteTask = () => {
    axios
      .delete('/api/tasks/remove/' + this.state.task._id)
      .then(res => window.location.reload());
  };
  render() {
    const { category, taskBody, mentor, completion } = this.state.task;
    const { task } = this.state;
    return (
      <div>
        <Card className="task-card">
          <Card.Body as={Row}>
            <Form as={Col}>
              <Form.Group as={Row}>
                <Col sm="6">
                  <Form.Label className="task-card-form-label">
                    Category
                  </Form.Label>
                </Col>
                <Col sm="6">
                  <Form.Control plaintext readOnly defaultValue={category} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm="6">
                  <Form.Label className="task-card-form-label">Task</Form.Label>
                </Col>
                <Col sm="6">
                  <Form.Control plaintext readOnly defaultValue={taskBody} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm="6">
                  <Form.Label className="task-card-form-label">
                    Mentor
                  </Form.Label>
                </Col>
                <Col sm="6">
                  <Form.Control plaintext readOnly defaultValue={mentor} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm="6">
                  <Form.Label className="task-card-form-label">
                    Completion
                  </Form.Label>
                </Col>
                <Col sm="6">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={completion + '%'}
                  />
                </Col>
              </Form.Group>
            </Form>
            <Col sm={3}>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  onClick={() => this.setAddTaskModal(true)}
                  className="modal-details-btns"
                >
                  Edit Task
                </Button>
                <Modal
                  size="lg"
                  show={this.state.isAddTaskModalActive}
                  onHide={() => this.setAddTaskModal(false)}
                  aria-labelledby="add-task-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="add-task-modal">Edit task</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <TaskForm
                      setAddTaskModal={this.setAddTaskModal}
                      edit={true}
                      task={task}
                    ></TaskForm>
                  </Modal.Body>
                </Modal>
                <Button
                  variant="outline-danger"
                  onClick={() => this.setDeleteTaskModal(true)}
                  className="modal-details-btns"
                >
                  Delete Task
                </Button>
                <Modal
                  size="md"
                  show={this.state.isDeleteTaskModalActive}
                  onHide={() => this.setDeleteTaskModal(false)}
                  aria-labelledby="delete-mentor-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="delete-mentor-modal">
                      Delete Task
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to delete task '{mentor.email}' ?
                  </Modal.Body>
                  <Modal.Footer>
                    <ButtonToolbar as={Row}>
                      <Col>
                        <Button variant="danger" onClick={this.deleteTask}>
                          Delete
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="outline-primary"
                          onClick={() => this.setDeleteTaskModal(false)}
                        >
                          Cancel
                        </Button>
                      </Col>
                    </ButtonToolbar>
                  </Modal.Footer>
                </Modal>
              </ButtonToolbar>
            </Col>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
