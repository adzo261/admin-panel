import React, { Component } from 'react';
import axios from 'axios';
import '../css/TasksList.css';
import TaskDetailsCard from './TaskDetailsCard';
import Loader from 'react-loader-spinner';
export default class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tasksList: [],
      email: this.props.email
    };
  }

  componentDidMount() {
    axios
      .get('/api/tasks/get' + (this.props.email ? '/' + this.props.email : ''))
      .then(res =>
        this.setState({
          tasksList: res.data.tasks,
          isLoading: false
        })
      );
  }

  render() {
    const { isLoading, tasksList } = this.state;

    const tasks = [];
    for (const [index, task] of tasksList.entries()) {
      tasks.unshift(<TaskDetailsCard key={index} task={task} />);
    }
    let toShow = '';
    if (tasks.length) {
      toShow = tasks;
    } else {
      toShow = <h3>No tasks found</h3>;
    }

    return (
      <div id="task-list-container">
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
        {!isLoading && toShow}
      </div>
    );
  }
}
