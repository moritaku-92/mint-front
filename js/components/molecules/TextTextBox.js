import React, { Component } from 'react'
import Text from '../atoms/Text'
import css from '../../../style/default.css'

class TextTextBox extends Component{
    render(){
        return(
            <div className={this.props.className || css.TextTextBox}>
                <Text text={this.props.text1} />
                <Text text={this.props.text2} />
            </div>
        )
    }
}

export default TextTextBox