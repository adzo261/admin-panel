import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import MentorDetailsCard from '../../Mentors/jsx/MentorDetailsCard';
import Mentors from '../../Mentors/jsx/Mentors';
import Tasks from '../../Tasks/jsx/Tasks';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
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
    <main>
      <Route exact path="/" component={Mentors} />
      <Route exact path="/mentors" component={Mentors} />
      <Route path="/mentor/details/:email" component={MentorDetailsCard} />
      <Route exact path="/tasks" component={Tasks} />
    </main>
  </Router>
);
export default AdminPanel;
