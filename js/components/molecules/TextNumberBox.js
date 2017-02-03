import React, { Component } from 'react'
import Text from '../atoms/Text'
import Number from '../atoms/Number'
import css from '../../../style/default.css'

class TextNumberBox extends Component{
    render(){
        return(
            <div className={this.props.className || css.TextNumberBox}>
                <Text text={this.props.text} />
                <Number number={this.props.number} unit={this.props.unit} />
            </div>
        )
    }
}

export default TextNumberBox