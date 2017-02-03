import React, {Component} from 'react'
import css from '../../../style/billingBox.css'
import {blue200, grey200} from 'material-ui/styles/colors'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
class DialogBox extends Component {
    render() {
        const dialogActions = [
            <RaisedButton
                label={this.props.label1}
                backgroundColor={grey200}
                onTouchTap={() => this.props.action1()}
            />,
            <RaisedButton
                label={this.props.label2}
                backgroundColor={blue200}
                onTouchTap={() => this.props.action2()}
            />
        ];
        return (
            <Dialog
                actions={dialogActions}
                modal={false}
                open={this.props.open}
                onRequestClose={() => this.props.closeAction()}
            >
                {/*ダイアログに表示するメッセージ*/}
                {this.props.text}
            </Dialog>
        )
    }
}

export default DialogBox