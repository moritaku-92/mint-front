import React, {Component} from 'react'

export default class FieldInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {input, label, type, meta, meta: { touched, error }} = this.props
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span style={{color:"red"}}>{error}</span>}
        </div>
      </div>
    )
  }
}