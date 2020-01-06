import React, { Component } from 'react';
import axios from 'axios';
import '../css/MentorsList.css';
import MentorDetailsStrip from './MentorDetailsStrip';
import { Redirect } from 'react-router';
import Loader from 'react-loader-spinner';
export default class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      mentorsList: [],
      redirectToMentorDetailsCard: false,
      clickedMentorsId: ''
    };
  }

  componentDidMount() {
    axios.get('/api/mentors/get').then(res =>
      this.setState({
        mentorsList: res.data.mentors,
        isLoading: false
      })
    );
  }
  handleOnClick = id => {
    this.setState({
      redirectToMentorDetailsCard: true,
      clickedMentorsId: id
    });
  };
  render() {
    const {
      isLoading,
      mentorsList,
      redirectToMentorDetailsCard,
      clickedMentorsId
    } = this.state;
    if (redirectToMentorDetailsCard) {
      return <Redirect push to={'/mentor/details/' + clickedMentorsId} />;
    }
    const mentors = [];
    for (const [index, mentor] of mentorsList.entries()) {
      mentors.unshift(
        <MentorDetailsStrip
          key={index}
          mentor={mentor}
          handleOnClick={this.handleOnClick}
        />
      );
    }
    let toShow = '';
    if (mentors.length) {
      toShow = mentors;
    } else {
      toShow = <h3>No mentors found</h3>;
    }
    return (
      <div id="mentor-list-container">
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
        )}{' '}
        {!isLoading && toShow}
      </div>
    );
  }
}
