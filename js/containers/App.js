import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import NavigationDrawer from '../components/organisms/NavigationDrawer'
import * as Actions from '../actions/NavigationDrawer'
import css from '../../style/app.css'

class App extends Component {

  render() {
    console.log('## App');
    const { navigationDrawer, actions } = this.props
    console.log(this.props)
    return (
      <div>
        <AppBar
          style={{paddingLeft: '0', }}
          iconElementLeft={<img src="img/logo.png" />}
          iconStyleLeft={{margin: 'auto 0 auto 17px'}}
          iconElementRight={<IconButton><MenuIcon color={"#000000"} /></IconButton>}
          onRightIconButtonTouchTap={(event) => this.handleToggle(event)}
        />
        <NavigationDrawer
          open={navigationDrawer.open}
          onRequestChange={actions.toggle}
        />
          {this.props.children}
      </div>
    )
  }

  handleToggle(event) {
    event.preventDefault()
    const { actions } = this.props
    actions.toggle()
  }

}

function mapStateToProps(state) {
  const { navigationDrawer } = state
  return {
    navigationDrawer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
