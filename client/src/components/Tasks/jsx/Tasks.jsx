import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../css/Tasks.css';
import TaskForm from './TaskForm';
import TasksList from './TasksList';

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { isAddTaskModalActive: false };
  }

  setAddTaskModal = status => {
    this.setState({ isAddTaskModalActive: status });
    if (!status) {
      window.location.reload();
    }
  };
  render() {
    return (
      <div id="tasks-container">
        <h2 id="tasks-heading">Tasks Dashboard</h2>
        <ButtonToolbar id="tasks-btn-toolbar">
          <Button variant="outline-primary" onClick={this.setAddTaskModal}>
            Add Task
          </Button>
          <Modal
            size="lg"
            show={this.state.isAddTaskModalActive}
            onHide={this.setAddTaskModal}
            aria-labelledby="add-task-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="add-task-modal">Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TaskForm
                setAddTaskModal={this.setAddTaskModal}
                add={true}
              ></TaskForm>
            </Modal.Body>
          </Modal>
        </ButtonToolbar>
        <TasksList />
      </div>
    );
  }
}
