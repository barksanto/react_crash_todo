import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  render() {
    return (
      // inline style uses double curlybraces {{ backgroundColor: '#f4f4f4' }}
      // but in this case we use a variable - which only needs one pair of braces
      <div style={itemStyle}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

// TodoItem - first thing should be the name of the class
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}
export default TodoItem
