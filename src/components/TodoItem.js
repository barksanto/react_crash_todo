import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

// TodoItem - first thing should be the name of the class
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}


export default TodoItem
