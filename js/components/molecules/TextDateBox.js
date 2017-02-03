import React, { Component } from 'react'
import Text from '../atoms/Text'
import Date from '../atoms/Date'
import css from '../../../style/default.css'

class TextDateBox extends Component{
    render(){
        return(
            <div className={this.props.className || css.TextDateBox}>
                <Text text={this.props.text} />
                <Date date={this.props.date} />
            </div>
        )
    }
}

export default TextDateBox