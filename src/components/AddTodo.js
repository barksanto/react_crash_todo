import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  //the state is in THIS COMPONENT thats why we can do this fn here
  //setting the title to whatever we type in
  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form style={{ display: 'flex' }}>
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

export default AddTodo;
