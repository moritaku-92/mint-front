import React, {Component, PropTypes} from 'react'
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card'
import {connect} from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {Field, reduxForm} from 'redux-form/immutable'

import FormField from '../molecules/FormField'

const styles = {
    customWidth: {
        width: 200
    }
};

class PaymentBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {handleSubmit} = this.props

        return (
            <Card>
                <CardHeader
                    title="入金"
                />
                <CardText>
                    <form onSubmit={handleSubmit}>
                        <Field name="from" component={FormField} label="FROM" type="text"/>
                        <Field name="to" component={FormField} label="TO" type="text"/>
                        <Field name="amount" component={FormField} label="AMOUNT" type="text"/>
                        <RaisedButton type="submit" label="入金" className="raised-button-submit"/>
                    </form>
                </CardText>
            </Card>
        )
    }
}

export default reduxForm({
    form: 'Payment' // a unique identifier for this form
})(PaymentBox)