import React, { Component } from 'react';
import  './TodoList.css';

class Todolist extends Component {

  render() {
    return (
      <div className="todoList">
        <div className="header">
          <form >
            <input 
              placeholder ="Enter Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button onClick={this.props.addItem} type="submit"> Add New Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Todolist;