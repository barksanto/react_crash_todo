import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  //when we make a method like this , it takes an event parameter


  render() {
    const { id, title } = this.props.todo;
    return (
      // inline style uses double curlybraces {{ backgroundColor: '#f4f4f4' }}
      // but in this case we use a variable - which only needs one pair of braces {itemStyle}
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// TodoItem - first thing should be the name of the class
// TodoItem.propTypes = {
//   todos: PropTypes.object.isRequired
// }

const btnStyle = {
  background: '#ff0000',
  color: 'white',
  border: '2px solid black',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }
export default TodoItem
