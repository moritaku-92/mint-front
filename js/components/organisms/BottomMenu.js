import React from 'react'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import ActionPayment from 'material-ui/svg-icons/action/payment';
import ActionViewList from 'material-ui/svg-icons/action/view-list'
import EditorShowChart from 'material-ui/svg-icons/editor/show-chart'
import css from '../../../style/bottomMenu.css'

const BottomMenu = (props) => {

    const { index, onTouchTap } = props

    return (
      <div>
        <BottomNavigation style={{backgroundColor: "#e0e0e0", height: "50px", position:"fixed", bottom:0}} selectedIndex={index}>
          <BottomNavigationItem
            label="請求"
            icon={<ActionPayment />}
            onTouchTap={() => onTouchTap(0)}
          />
          <BottomNavigationItem
            label="グラフ"
            icon={<EditorShowChart />}
            onTouchTap={() => onTouchTap(1)}
          />
          <BottomNavigationItem
            label="明細"
            icon={<ActionViewList />}
            onTouchTap={() => onTouchTap(2)}
          />
        </BottomNavigation>
      </div>
    )
}

export default BottomMenu
