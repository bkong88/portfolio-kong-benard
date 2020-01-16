import React from 'react'
import SideBar from '../components/SideBar'
import Layout from '../components/Layout'

export const withSidebar = (WrappedComponent, sideBarAdditionalProps) => {
  const WithSidebar = (props) => {
    return (
      <Layout>
        <SideBar {...sideBarAdditionalProps} />
        <div id="main">
          <WrappedComponent {...props} />
        </div>
      </Layout>
    )
  }

  const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component'

  WithSidebar.displayName = `WithSidebar(${getDisplayName(WrappedComponent)})`

  return WithSidebar
}
