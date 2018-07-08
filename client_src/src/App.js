import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListSkills from "./componens/ListSkills";
import AddSkills from "./componens/AddtSkills";

class App extends Component {
  render() {
    return (

      <Router >
        <div className='container'>
          <ul>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/add">Add</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={ListSkills} />
          <Route path="/add" component={AddSkills} />
        </div>
      </Router>
      // <div className="App">
      //   <ListSkills></ListSkills>
      // </div>
    );
  }
}

export default App;
