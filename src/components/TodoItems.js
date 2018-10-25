import React, { Component } from 'react';
import  './TodoItems.css'

class TodoItems extends Component {
  createTasks =  item => {
    return(
      <li className = "todoItemLi" key={item.key} >
        {item.text}
        <button className ="todoItembutton" onClick={() => this.props.deleteItem(item.key)}> Delete</button>
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return(
      <ul className = "todoItemList" >
      {listItems}
      </ul>
    );
  }
}

export default TodoItems;