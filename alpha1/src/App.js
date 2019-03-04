import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';


class App extends Component {
  inputElement = React.createRef()
  
  constructor(){
    super()
    this.state = {
      items:[],
      currentItem: {text:'', key:''},
      currentItemForField: {text:'', key:''},
      edit: false
    }
  }
  handleInput = e => {
    console.log(e.target)
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }
  handleInput2 = e => {
    console.log(e.target)
    const itemText = e.target.value
    const currentItemForField = { text: itemText, key: Date.now() }
    this.setState({
      currentItemForField
    })
  }    
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text !== '') {
      
      const items = [...this.state.items, newItem]
      console.log(items)

      this.setState({
        items:items,
        currentItem: { text:'', key: ''}
      })
    }
  }

  deleteItem = key => {
    console.log('delete')
    const filtered = this.state.items.filter(item => {
      return item.key !== key
    })
    
    this.setState({
      items: filtered
    })
  }
  setAttr = (obj, key) => {
    console.log('Triggered!')
    if(obj){
      const updItems = this.state.items.map(item=>{
        if(item.key === key){
          return item = obj
        }
        
      })
      this.setState({
        items: updItems
      })
    }
    this.setState({
        edit: !this.state.edit
    })
    
  } 

  render() {
    return (
      <div className="App">
          <TodoList 
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            />
            <TodoItems 
              entries={this.state.items}
              editItem={this.editItem}
              deleteItem={this.deleteItem}
              setAttr={this.setAttr}
              edit={this.state.edit}
              handleInput={this.handleInput2}
              currentItem={this.state.currentItemForField}
            />
      </div>
    );
  }
}

export default App;
