import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class FormField extends Component{

  constructor(props) {
      super(props);      
    }

    render(){
       const {input, label, type, meta, meta: { touched, error }} = this.props
        return(
        <div>
          <TextField
            floatingLabelText={this.props.label}
            {...this.props.input}
          />
          {touched && error && <span style={{color:"red"}}>{error}</span>}
        </div>
        )
    }
}

export default FormField