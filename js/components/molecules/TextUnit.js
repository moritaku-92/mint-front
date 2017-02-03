import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { Field } from 'redux-form'

class TextUnit extends Component{

  constructor(props) {
      super(props);

      this.state = {
        label: props.label,
        value: props.value
      }
    }

    render(){
      this.handleChange = (event) => {
        this.setState({
          value: event.target.value,
        })
      }

        return(
          <div className={this.props.className}>
            <label>{this.state.label} </label>
            <TextField />
          </div>
        )
    }
}

export default TextUnit