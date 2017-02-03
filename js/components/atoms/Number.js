import React, {Component} from 'react'
import css from '../../../style/default.css'

class Number extends Component {
    render() {
        // 単位を付けたい数字を表示する
        return (
            <span className={this.props.className || css.number}>
                {this.toThreeSep(this.props.number)}{this.props.unit}
            </span>
        )
    }
    // 数字に「,」を入れる関数
    toThreeSep(num) {
        return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
    }
    // どんな形式が来ても良い感じに編集する関数が必要?
}

export default Number