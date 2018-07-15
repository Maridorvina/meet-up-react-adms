import React from 'react';
import StudentRow from '../StudentRow';
import './style.css';


class StudentList extends React.Component {

  render() {
    const { student, deleteByIndex } = this.props;

    return (
      <div className="card StudentList">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Série</th>
              <th>RG</th>
            </tr>
          </thead>
          <tbody>
            {student.map((students, index) => (
              <StudentRow
                nome={students.nome}
                key={index}
                index={index}
                deleteByIndex={deleteByIndex}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;