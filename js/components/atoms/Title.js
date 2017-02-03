import React, { Component } from 'react'
import css from '../../../style/default.css'

class Title extends Component{
    render(){
        // タイトルの表示
        return(
            <span className={this.props.className || css.title}>
                {this.props.title}
            </span>
        )
    }
}

export default Title