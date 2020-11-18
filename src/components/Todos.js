import React, { Component } from 'react';
import TodoIteam from './TodoIteam';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>
            <TodoIteam key={todo.id} todo={todo} markCompleted={this.props.markCompleted} delTodo={this.props.delTodo}/>)
    }
}

export default Todos;
