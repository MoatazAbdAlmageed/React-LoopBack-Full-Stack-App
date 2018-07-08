import React, { Component } from 'react';
import axios from 'axios';
import './ListSkills.css';

class ListSkills extends Component {
  constructor(state){
    super(state)
    this.state = {
      skills:[]
    }
  }

  componentWillMount(){
   this. getSkills()
  }
  getSkills(){
    axios.get('http://localhost:3000/api/skills\n').then(res=>{
      if (res && res.data && res.data.length){
        this.setState({skills:res.data})
      }
      debugger
    })
  }
  render() {
    return (
      <div className="ListSkills">
        <h2>List Skills</h2>
        <ul>
          {this.state.skills && this.state.skills.length?
          this.state.skills.map(skill=>{
            console.log(skill.id);
            return  <li key={skill.id}>{skill.name}</li>
          }) : 'No skills'
        }


      </ul>
      </div>
    );
  }
}

export default ListSkills;
