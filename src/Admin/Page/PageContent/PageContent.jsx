import React from 'react'
import { Outlet } from 'react-router-dom'

function PageContent() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PageContent