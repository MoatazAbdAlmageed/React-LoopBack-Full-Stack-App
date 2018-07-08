import React, { Component } from 'react';
import './AddSkills.css';

class AddSkills extends Component {
  render() {
    return (
      <div className="AddSkills">
        <h2>Add Skill</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Skill</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter skill name"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Level</label>
            <input type="number" min={0} className="form-control" id="exampleInputPassword1" placeholder="Enter Skill level %"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
  }
}

export default AddSkills;
