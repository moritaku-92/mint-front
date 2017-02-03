import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import css from '../../../../style/top.css'

class Top extends Component {

  render() {

    return (
      <div className={css.container}>
        <h1 className={css.title}>TOP画面</h1>
        技企統スキルグループのテストアプリです。<br/>
        右上メニューより実行してください。
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
