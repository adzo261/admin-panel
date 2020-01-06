import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import MentorDetailsCard from '../../Mentors/jsx/MentorDetailsCard';
import Mentors from '../../Mentors/jsx/Mentors';
import Tasks from '../../Tasks/jsx/Tasks';
import '../css/AdminPanel.css';

const AdminPanel = () => (
  <Router>
    <div>
      <Navbar bg="light">
        <Navbar.Brand>Admin Panel</Navbar.Brand>
        <Link to="/mentors">
          <NavItem>Mentors</NavItem>
        </Link>
        <Link to="/tasks">
          <NavItem>Tasks</NavItem>
        </Link>
      </Navbar>
    </div>
    <Switch>
      <Route exact path="/" component={Mentors} />
      <Route exact path="/mentors" component={Mentors} />
      <Route
        exact
        path="/mentor/details/:email"
        component={MentorDetailsCard}
      />
      <Route exact path="/tasks" component={Tasks} />
      <Route component={Mentors} />
    </Switch>
  </Router>
);
export default AdminPanel;
