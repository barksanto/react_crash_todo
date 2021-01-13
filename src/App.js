import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';


class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => console.log(res.data))
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

  //add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title, // can just write title instead because the key and value are the same
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  // todos come from the state of app js and we pass it down with props with this.props
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
