import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      // inline style uses double curlybraces {{ backgroundColor: '#f4f4f4' }}
      // but in this case we use a variable - which only needs one pair of braces {itemStyle}
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" />{' '}
          {this.props.todo.title}
        </p>
      </div>
    )
  }
}

// TodoItem - first thing should be the name of the class
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }
export default TodoItem
