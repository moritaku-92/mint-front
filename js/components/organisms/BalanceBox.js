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

const styles = {
    customWidth: {
        width: 200
    }
};

class BalanceBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: account[0]
        };
    }

    render() {

        const handleChange = (event, index, value) => {
            console.log(value)
            this.setState({value})
        }

        console.log("aaa", this.state)

        var accountList = []
        account.forEach((element, index) => {
            accountList.push(<MenuItem key={index} value={element} primaryText={element}/>)
        })

        return (
            <Card>
                <CardText>
                    <CardHeader title="残高照会"/>
                    <CardText>
                        <DropDownMenu
                            value={this.state.value}
                            onChange={(event, index, value) => handleChange(event, index, value)}
                            autoWidth={false}
                            style={styles.customWidth}
                        >
                            {accountList}
                        </DropDownMenu><br/>
                        <RaisedButton label="残高取得"/>
                    </CardText>
                </CardText>
            </Card>
        )
    }
}
export default BalanceBox