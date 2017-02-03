import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import MenuItem from 'material-ui/MenuItem'
import menu from '../../../res_file/MenuData.json'

class NavigationDrawer extends Component {

  render() {
    const {open, onRequestChange} = this.props
    let menuList = []
    menu.map((menu,index) => {
      menuList.push(
        <div key={index}>
          <MenuItem
            primaryText={menu.label}
            onTouchTap={(event) => this.handleTouchTap(event, menu.path)}
            leftIcon={< NavigationChevronRight />}
          />
          <Divider/>
        </div>
      )
    })

    return (
      <div>
        <Drawer
          docked={false}
          openSecondary={true}
          open={open}
          onRequestChange={onRequestChange}
        >
          <AppBar
            title={"メニュー"}
            showMenuIconButton={false}
            titleStyle={{
              color: "#000000"
            }}
            style={{
              backgroundColor:"#ffffff"
            }}
          />
          {menuList}
        </Drawer>
      </div>
    )
  }

  handleTouchTap(event, path) {
    event.preventDefault()
    location.href = './#/' + path

    const {onRequestChange} = this.props
    onRequestChange()
  }

}

export default NavigationDrawer
