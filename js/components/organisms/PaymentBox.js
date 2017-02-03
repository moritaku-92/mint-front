import React, {Component, PropTypes} from 'react'
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card'
import account from '../../../res_file/accountList.json'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const styles = {
    customWidth: {
        width: 200
    }
};

class PaymentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: account[0],
            to: account[1],
        };
    }

    render() {

        // DropDownMenuを変更
        const fromHandleChange = (event, index, value) => {
            this.setState({from:value})
        }
        const toHandleChange = (event, index, value) => {
            this.setState({to:value})
        }


        var fromAccountList = []
        account.forEach((element, index) => {
            fromAccountList.push(<MenuItem key={index} value={element} primaryText={element}/>)
        })
        var toAccountList = []
        account.forEach((element, index) => {
            toAccountList.push(<MenuItem key={index} value={element} primaryText={element}/>)
        })

        return (
            <Card>
                <CardText>
                    <CardHeader title="入金"/>
                    <CardText>
                        FROM<br/>
                        <DropDownMenu
                            value={this.state.from}
                            onChange={(event, index, value) => fromHandleChange(event, index, value)}
                            autoWidth={false}
                            style={styles.customWidth}
                        >
                            {fromAccountList}
                        </DropDownMenu><br/>
                        TO<br/>
                        <DropDownMenu
                            value={this.state.to}
                            onChange={(event, index, value) => toHandleChange(event, index, value)}
                            autoWidth={false}
                            style={styles.customWidth}
                        >
                            {toAccountList}
                        </DropDownMenu><br/>
                        <TextField
                             floatingLabelText="AMOUNT"
                             floatingLabelFocusStyle={{color: "#2ca9e1"}}
                             underlineFocusStyle={{borderColor: "#2ca9e1"}}
                        />
                        <RaisedButton label="入金"/>
                    </CardText>
                </CardText>
            </Card>
        )
    }
}
export default PaymentBox