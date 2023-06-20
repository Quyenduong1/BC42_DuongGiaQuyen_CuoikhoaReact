import React from 'react'
import styles from "../Main.module.scss"
import LayoutSideBar from '../../Components/SideBar/LayoutSideBar'
import PageContent from '../../Page/PageContent/PageContent'
function Main() {
  return (
    <div className={styles.SideBarAndPageCourse}>
      {/* //them Header */}

      <LayoutSideBar/>

      <PageContent/>
      
    </div>
  )
}

export default Main