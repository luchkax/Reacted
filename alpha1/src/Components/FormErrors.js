import React, { Component } from 'react';


class FormErrors extends Component {

    formErrorView = (formErrors) => {
        return(
        <div className='formErrors'>
            {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )        
            } else {
                return '';
            }
            })}
        </div>
        )
    }


    render() {
        return(this.formErrorView(this.props.formErrors))
}}

export default FormErrors