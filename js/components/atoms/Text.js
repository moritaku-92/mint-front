import React, { Component } from 'react'
import css from '../../../style/default.css'

class Text extends Component{
    render(){
        // 文字列を表示するだけ
        return(
            <span className={this.props.className || css.text}>
                {this.props.text}{this.props.unit}
            </span>
        )
    }
}

export default Text