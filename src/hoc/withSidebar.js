import React from 'react'
import SideBar from '../components/SideBar'
import Layout from '../components/Layout'

export const withSidebar = (WrappedComponent) => {
  const WithSidebar = (props) => {
    return (
      <Layout>
        <SideBar sections={[{ id: 'portfolio', name: 'Back to Portfolio', icon: 'fa-home' }]} />
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
