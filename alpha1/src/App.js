import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import TodoList from './Components/TodoList';
import TodoItems from './Components/TodoItems';
import FormData from './Components/FormData';


{/* <Router>
<div>
    <Route path="/form" component={FormData} />
</div>
</Router> */}

class App extends Component {
  inputElement = React.createRef()
  inputElement2 = React.createRef()
  constructor(){
    super()
    this.state = {
      items:[],
      currentItem: {text:'', key:''},
      currentItemForField: {text:'', key:''},
      edit: false,
      editItem: {},
      login: {email:'', password:''},
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
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
  handleForm = (obj) => {

    this.setState({
      login: {...this.state.login, [obj.name]: obj.value}
    }, ()=> { this.validateField(obj.name, obj.value)})
  }   
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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
    // obj - item to replace
    // key = key for item to be replaced
    
    console.log('Triggered!')
    if(obj){
      const updItems = this.state.items.map(item=>{
        if(item.key === key){
           return item = obj
        }else return item
      })
      this.setState({
        items: updItems,
        itemClicked: obj
      })
    }
    this.setState({
        edit: !this.state.edit
    })
    if(this.inputElement) this.inputElement.current.focus()
    
  } 
  formData = () => {
    return (<Route path="/form" render={(props) =>
            <FormData {...props}
                login={this.state.login}
                handleForm={this.handleForm}
                formError={this.state.formErrors}
            />
            }/>)
  }

  

  render() {
    return (
      <div className="App">
          <Link to="/users">Users | </Link>
          <Link to="/form">Form</Link>
          <TodoList 
            inputElement={this.inputElement}
            addItem={this.addItem}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            />
            <TodoItems 
              inputElement2={this.inputElement}
              entries={this.state.items}
              editItem={this.editItem}
              deleteItem={this.deleteItem}
              setAttr={this.setAttr}
              edit={this.state.edit}
              handleInput={this.handleInput2}
              currentItem={this.state.currentItemForField}
              itemClicked={this.state.itemClicked}
            />
            {this.formData()}
      </div>
    );
  }
}



export default App;
