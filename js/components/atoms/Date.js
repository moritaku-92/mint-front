import React, { Component  } from 'react'
import css from '../../../style/default.css'
import moment from 'moment'


class Date extends Component {
    render(){
        // 日付フォーマットの指定
        /*
        var m = moment(this.props.date,'YYYY年MM月DD日');
        var output = m.format('YYYY/MM/DD');
        */

        return(
            <span className={this.props.className || css.date}>
                {this.props.date}
            </span>
        )
    }
}

export default Date