import React, { Component  } from 'react'
import css from '../../../style/default.css'

class Figure extends Component {
    render(){
        // 図を表示する
        return(
            <figure className={this.props.className || css.figure}>
                <img src={this.props.figure} alt="" />
                <figcaption>{this.props.text}</figcaption>
            </figure>
        )
    }
}

export default Figure