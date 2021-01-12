import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // delete Todo
  delTodo = (id) => {
    // using filter method to find the todo by id
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  // todos come from the state of app js and we pass it down with props with this.props
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
