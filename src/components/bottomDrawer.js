import React from "react"
import styles from "../styles.module.scss"
import { TiChevronLeft } from "react-icons/ti"

const BottomDrawer = props => {
  const { display } = props
  const displayClass = (display) => {
    switch(display) {
      case("peek"):
        return styles.showPeek
        break;
       case("full"):
        return styles.showFull
        break;
       default:
        return ""
    }
  }
  return (
    <div className={`${styles.bottomDrawer} ${displayClass(display)}`}>
      {props.children}
    </div>
  )
}

const BottomDrawerPeek = props => {

  return (
      <div onClick={props.onClick} className={styles.drawerPeek}>
        {props.children}
        <TiChevronLeft className={`${styles.mapIcon} ${styles.drawerArrow}`} />
      </div>
  )
}

const BottomDrawerFull = props => {

  return (
      <div className={styles.drawerFull}>
        {props.children}
      </div>
  )
}

export default BottomDrawer
export { BottomDrawerPeek, BottomDrawerFull }

