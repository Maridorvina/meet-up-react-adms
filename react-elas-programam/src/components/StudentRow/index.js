import React from "react";
import "./style.css";

class StudentRow extends React.Component {

  onclick = (ev) => {
    const{ deleteByIndex } = this.props;
    ev.preventDefault();
    deleteByIndex(this.props.index)
  }

  render() {
    return (
      <tr>
        <td>{this.props.nome}</td>
        <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
      </tr>
    );
  }
}

export default StudentRow;
