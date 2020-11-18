import React, { Component } from 'react';


class TodoIteam extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }

    }


    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox"
                       onChange={this.props.markCompleted.bind(this, this.props.todo.id)}/>
                {this.props.todo.title}
                <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>X</button>
            </div>
        )
    }
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
};

export default TodoIteam;
