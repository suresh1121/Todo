import React, { Component } from 'react';
import TodoList from '../src/components/TodoList.js';
import './App.css';
import DemoComponent from '../src/components/DemoComponent.jsx'
import TodoItems from '../src/components/TodoItems.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      items : [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item =>{
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  addItem = e =>{
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items,newItem]
      this.setState({
        items: items,
        currentItem: {text:'', key:''},
      })
    }
    console.log('newItem')
  }
  render() {
    return (
      <div className="">
        <header className="">
        <DemoComponent/> 
        <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>  
        </header>
      </div>
    );
  }
}

export default App;
