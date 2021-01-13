import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  //the state is in THIS COMPONENT thats why we can do this fn here
  //setting the title to whatever we type in
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          style={{ flex: '10', padding: '5px' }}
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange} />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }} />
      </form>
    )
  }
}


AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default AddTodo;
