import React from 'react';
import axios from 'axios';
import StudentForm from '../StudentForm/index.js';
import StudentList from '../StudentList/index.js';
import SideMenu from '../SideMenu/index.js';
import './App.css';

const API = 'https://private-785c05-learnit.apiary-mock.com'

class App extends React.Component {
  state = {
    student: []
  }

  listStudents = () => {
    axios.get(`${API}/students`).then(response => {
      this.setState({
        student: response.data,
      })
    }).catch(error => {
    })
  }

  componentDidMount = (student) => {
    this.listStudents();
  }

  addStudent = (students) => {
    const { student } = this.state;
    this.setState({
      student: student.concat(students)
    })
  }

  deleteByIndex = (index) => {
    const {student}  = this.state;
    this.setState({
      student: [...student.slice(0, index), ...student.slice(index+1)]
    })
  }

  render() { 
    const { student } = this.state;  
    return (
      <div className="App">
        <SideMenu />
        <div className="container">
          <h1>Estudantes</h1>
          <StudentForm addStudent={this.addStudent} />
          <StudentList student={student} deleteByIndex={this.deleteByIndex} />
        </div>
      </div>
    );
  }  
}

export default App;
