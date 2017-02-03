import React, {Component} from 'react'
import css from '../../../style/default.css'
import Text from '../atoms/Text'
import Figure from '../atoms/Figure'

class CardBox extends Component {
    render() {
        return (
            <div className={this.props.className1 || css.container}>
                <div>
                    <Text className={this.props.className2 || css.text} text={this.props.cardName} /><br/>
                    <Text className={this.props.className3 || css.text} text={this.props.cardType} /><br/>
                    <Text className={this.props.className4 || css.text} text={this.props.cardNo} /><br/>
                </div>
                <Figure className={this.props.className5 || css.figure} figure="img/CREDIT_CARD.png" />
            </div>
        )
    }
}

export default CardBox