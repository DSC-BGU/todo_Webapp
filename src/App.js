import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo';
import { v4} from 'uuid';
import {render } from '@testing-library/react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';

class App extends Component {
  state={
    todos:[
      {
        id:v4(),
        title: 'Go to work',
        completed: false
      },
      {
        id:v4(),
        title: 'Do home work',
        completed: false
      },
      {
        id:v4(),
        title: 'Smile',
        completed: true
      },
    ]
  }

  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo=>{
        if (todo.id===id){
          todo.completed=!todo.completed
        }
        return todo;
      })})
  }


  delTodo =(id)=> this.setState({todos: [...this.state.todos.filter((todo)=>todo.id!=id)]})

  addTodo =(title) =>{
    const newTodo ={
      id: v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }


  render() {
    return (
        <Router>
          <div>
            <Header/>
            <Route
                exact path="/"
                render={props =>(
                    <div>
                      <AddTodo addTodo={this.addTodo}/>
                      <Todos todos={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo}/>
                    </div>
                )}/>
            <Route
                path="/about"
                component={About}/>
          </div>
        </Router>
    )
  }
}

export default App;
