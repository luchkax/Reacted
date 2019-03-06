import React, { Component } from 'react'

class FormData extends Component {
    componentDidUpdate() {
       
    }

    onSave = (e) => {
        console.log(this.props.login)
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.props.handleForm({name:name, value:value})
    }

    formLook = () => {
        return (
        <div className='mainForm'>
            <form className='demoForm'>
            <h2>Sign up</h2>
            <div className='form-group'>
                <label 
                    htmlFor='email'
                    >Email address
                </label>
                <input 
                    type='email' 
                    className='form-control'
                    value={this.props.login.email}
                    onChange={(event) => this.handleUserInput(event)}
                    name='email' />
            </div>
            <div className='form-group'>
                <label 
                    htmlFor='password'
                    >Password
                </label>
                <input 
                    type='password' 
                    className='form-control'
                    value={this.props.login.password}
                    onChange={(event) => this.handleUserInput(event)}
                    name='password' />
            </div>
            <button 
                type='submit' 
                className='btn btn-primary'
                onClick={(event) => this.onSave(event)}
                >Sign up
            </button>
            </form>
        </div>
        )
        
    }

  render() {
    return (
        this.formLook()
    )
  }
}

export default FormData