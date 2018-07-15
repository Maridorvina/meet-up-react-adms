import React from "react";
import "./style.css";

class StudentForm extends React.Component {
  state = {
    student:
      {
        nome: '',
      }
  }

  onChange = (ev) => {
    this.setState({
      student: {
        ...this.state.student,
        // [ev.target.getAttribute('name')]: ev.target.value
        nome: ev.target.value
      }
    });
    console.log(ev.target.value)
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.addStudent(this.state.student);

    this.setState({
      student:{
        nome: ''
      }
    })
  }

  render() {
    const { nome } = this.state.student;
    return (
      <div className="card row -justify-center -align-center StudentForm">
        <form className="row" onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Nome</label>
            <input type="text" name="nome" value={nome} onChange={this.onChange} />
          </div>
          <button className="btn-add">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
