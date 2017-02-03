import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import css from '../../../../style/detail.css'
import LoadingModal from '../../../components/organisms/LoadingModal'
import BalanceBox from '../../../components/organisms/BalanceBox'

class Detail extends Component {

  componentWillMount() {
    const {actions} = this.props
  }

  render() {
   
    return (
      <BalanceBox />
    )
  }
}

function mapStateToProps(state) {
  const {bottomNavigation, billing, cardInfo} = state
  return {bottomNavigation, billing, cardInfo}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
    Object.assign({}
    ), 
    dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
