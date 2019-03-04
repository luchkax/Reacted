import React, { Component } from 'react'

class TodoItems extends Component {
    inpt = React.createRef()
    componentDidUpdate() {
        this.inpt.current.focus()
    }

  createTasks = item => {
      console.log(this.props.edit)
      
    return this.props.edit ?
    <li key={item.key}>
        <input
             type="text" 
             ref={this.inpt} 
             onChange={this.props.handleInput} 
             defaultValue={item.text}>
        </input>
        <button 
            style={{marginLeft: '5px'}} 
            onClick={() => this.props.setAttr(this.props.currentItem, item.key)}>Save
        </button>
    </li> : //OR//////////////////////////
    <li key={item.key}>
        <span 
            onClick={() => this.props.setAttr()}>{item.text}
        </span>
        <button 
            style={{marginLeft: '5px'}} 
            onClick={() => this.props.deleteItem(item.key)}>X
        </button>
    </li>
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
