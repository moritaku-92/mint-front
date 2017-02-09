import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LoadingModal from '../../../components/organisms/LoadingModal'
import PaymentBox from '../../../components/organisms/PaymentBox'
import * as paymentAction from '../../../actions/Payment'

class Payment extends Component {

  componentWillMount() {
    const {actions} = this.props
  }

  onSubmitEvent(values){
    // alert('submit成功:' + JSON.stringify(values))
    this.props.actions.transfer(values)  //サーバにポストするアクション
  }

  render() {
    return (
      <PaymentBox
        onSubmit={(values) => this.onSubmitEvent(values)}
      />
    )
  }

  transfer(state) {
    const {actions} = this.props
    console.log("transfer",state)
    actions.transfer(state)
  }


}

function mapStateToProps(state) {
  const {bottomNavigation, payment} = state
  return {bottomNavigation, payment}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, paymentAction), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
