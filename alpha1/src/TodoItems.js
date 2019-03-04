import React, { Component } from 'react'

class TodoItems extends Component {
    
    componentDidUpdate() {
       // this.inpt.current.focus()
    }

   taskToEdit = (item, edit) => {
       if(item.key === this.props.itemClicked.key){
           return <li key={item.key}>
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
   </li>
       }else{
           return this.taskToShow(item)
       }
   } 

   taskToShow = (item) => {
        return <li key={item.key}>
        <span 
            onClick={() => this.props.setAttr(item, item.key)}>{item.text}
        </span>
        <button 
            style={{marginLeft: '5px'}} 
            onClick={() => this.props.deleteItem(item.key)}>X
        </button>
        </li>
    }

  createTasks = item => {
      console.log(this.props.edit)

    if(this.props.edit){
        return this.taskToEdit(item, this.props.edit)
    }else{
        return this.taskToShow(item)
  }
}

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
