import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/MentorDetailsStrip.css';
export default class MentorDetailsStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor: this.props.mentor
    };
  }
  handleOnClick = () => {
    this.props.handleOnClick(this.state.mentor._id);
  };
  render() {
    const { name, email, mobile, qualification } = this.state.mentor;
    return (
      <Card className="mentor-strip" onClick={this.handleOnClick}>
        <Card.Body>
          <Form>
            <Form.Group as={Row}>
              <Col sm="3">
                <Form.Label className="mentor-strip-form-label">
                  Name
                </Form.Label>
                <Form.Control
                  plaintext
                  className="mentor-strip-input"
                  readOnly
                  defaultValue={name}
                />
              </Col>
              <Col sm="3">
                <Form.Label className="mentor-strip-form-label">
                  Email
                </Form.Label>
                <Form.Control
                  plaintext
                  className="mentor-strip-input"
                  readOnly
                  defaultValue={email}
                />
              </Col>
              <Col sm="3">
                <Form.Label className="mentor-strip-form-label">
                  Mobile
                </Form.Label>
                <Form.Control
                  plaintext
                  className="mentor-strip-input"
                  readOnly
                  defaultValue={mobile}
                />
              </Col>
              <Col sm="3">
                <Form.Label className="mentor-strip-form-label">
                  Qualification
                </Form.Label>
                <Form.Control
                  plaintext
                  className="mentor-strip-input"
                  readOnly
                  defaultValue={qualification}
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
