import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../css/MentorDetailsCard.css';
import { Redirect } from 'react-router';
import MentorForm from './MentorForm';
import TasksList from '../../Tasks/jsx/TasksList';
import Loader from 'react-loader-spinner';
export default class MentorDetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      mentor: {},
      isAddMentorModalActive: false,
      isDeleteMentorModalActive: false,
      redirectToHome: false
    };
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    axios.get('/api/mentors/get/' + params.email).then(res =>
      this.setState({
        mentor: res.data.mentors[0],
        isLoading: false
      })
    );
  }
  setAddMentorModal = status => {
    this.setState({ isAddMentorModalActive: status });
    if (!status) {
      this.setState({ redirectToHome: true });
    }
  };
  setDeleteMentorModal = status => {
    this.setState({ isDeleteMentorModalActive: status });
  };
  deleteMentor = () => {
    axios
      .delete('/api/mentors/remove/' + this.state.mentor._id)
      .then(res => this.setState({ redirectToHome: true }));
  };
  render() {
    const { name, email, mobile, qualification } = this.state.mentor;
    const { isLoading, mentor, redirectToHome } = this.state;
    if (redirectToHome) {
      return <Redirect push to="/mentors" />;
    }
    return (
      <div>
        {isLoading && (
          <p>
            <Loader
              type="ThreeDots"
              color="black"
              height={100}
              width={100}
              timeout={5000}
            />
          </p>
        )}
        {!isLoading && (
          <div className="details-container">
            <h2>Mentor Profile</h2>
            <Card className="mentor-card">
              <Card.Body as={Row}>
                <Form as={Col}>
                  <Form.Group as={Row}>
                    <Col sm="6">
                      <Form.Label className="mentor-card-form-label">
                        Name
                      </Form.Label>
                    </Col>
                    <Col sm="6">
                      <Form.Control plaintext readOnly defaultValue={name} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm="6">
                      <Form.Label className="mentor-strip-form-label">
                        Email
                      </Form.Label>
                    </Col>
                    <Col sm="6">
                      <Form.Control plaintext readOnly defaultValue={email} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm="6">
                      <Form.Label className="mentor-strip-form-label">
                        Mobile
                      </Form.Label>
                    </Col>
                    <Col sm="6">
                      <Form.Control plaintext readOnly defaultValue={mobile} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm="6">
                      <Form.Label className="mentor-strip-form-label">
                        Qualification
                      </Form.Label>
                    </Col>
                    <Col sm="6">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={qualification}
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Col sm={3}>
                  <ButtonToolbar>
                    <Button
                      variant="outline-primary"
                      onClick={() => this.setAddMentorModal(true)}
                      className="modal-details-btns"
                    >
                      Edit Mentor
                    </Button>
                    <Modal
                      size="lg"
                      show={this.state.isAddMentorModalActive}
                      onHide={() => this.setAddMentorModal(false)}
                      aria-labelledby="add-mentor-modal"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="add-mentor-modal">
                          Edit mentor
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <MentorForm
                          setAddMentorModal={this.setAddMentorModal}
                          edit={true}
                          mentor={mentor}
                        ></MentorForm>
                      </Modal.Body>
                    </Modal>
                    <Button
                      variant="outline-danger"
                      onClick={() => this.setDeleteMentorModal(true)}
                      className="modal-details-btns"
                    >
                      Delete Mentor
                    </Button>
                    <Modal
                      size="md"
                      show={this.state.isDeleteMentorModalActive}
                      onHide={() => this.setDeleteMentorModal(false)}
                      aria-labelledby="delete-mentor-modal"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="delete-mentor-modal">
                          Delete Mentor
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to delete mentor with email{' '}
                        {mentor.email} ?
                      </Modal.Body>
                      <Modal.Footer>
                        <ButtonToolbar as={Row}>
                          <Col>
                            <Button
                              variant="danger"
                              onClick={this.deleteMentor}
                            >
                              Delete
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              variant="outline-primary"
                              onClick={() => this.setDeleteMentorModal(false)}
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
            <h2>Assigned Tasks</h2>
            {email !== undefined && <TasksList email={email} />}
          </div>
        )}
      </div>
    );
  }
}
