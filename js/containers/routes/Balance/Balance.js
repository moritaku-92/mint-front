import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import css from '../../../../style/detail.css'
import LoadingModal from '../../../components/organisms/LoadingModal'
import BalanceBox from '../../../components/organisms/BalanceBox'
import * as balanceAction from '../../../actions/Balance'

class Detail extends Component {

  componentWillMount() {
    const {actions} = this.props
  }
  onSubmitEvent(value){
    console.log("vvvvvvvv",value)
    this.props.actions.getBilling(value)  //サーバにポストするアクション
  }

  render() {
    return (
        <BalanceBox 
          submit={(value) => this.onSubmitEvent(value)}
          balance={this.props.balance.result.message}
        />
    )
  }
}

function mapStateToProps(state) {
  const {bottomNavigation,balance} = state
  return {bottomNavigation,balance}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
    Object.assign({},balanceAction
    ), 
    dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
