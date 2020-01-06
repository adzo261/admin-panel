import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../css/Mentors.css';
import MentorForm from './MentorForm';
import MentorsList from './MentorsList';

export default class Mentors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMentorModalActive: false
    };
  }

  setAddMentorModal = status => {
    this.setState({ isAddMentorModalActive: status });
  };
  render() {
    return (
      <div id="mentors-container">
        <h2 id="mentors-heading">Mentors Dashboard</h2>
        <ButtonToolbar id="mentors-btn-toolbar">
          <Button variant="outline-primary" onClick={this.setAddMentorModal}>
            Add Mentor
          </Button>
          <Modal
            size="lg"
            show={this.state.isAddMentorModalActive}
            onHide={this.setAddMentorModal}
            aria-labelledby="add-mentor-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="add-mentor-modal">Add mentor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MentorForm
                setAddMentorModal={this.setAddMentorModal}
                add={true}
              ></MentorForm>
            </Modal.Body>
          </Modal>
        </ButtonToolbar>
        <MentorsList />
      </div>
    );
  }
}
