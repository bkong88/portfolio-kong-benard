import React from 'react'
import { withSidebar } from '../hoc/withSidebar'

const NotFoundPage = () => (
  <div className="url-not-found">
    <h1 className="url-not-found__title">NOT FOUND</h1>
    <p className="url-not-found__paragraph">The URL you have entered is not a valid URL.</p>
    <p className="url-not-found__paragraph">
      <a href="/" className="url-not-found__to-home">
        Click here
      </a>{' '}
      to go to the home page.
    </p>
  </div>
)

const sections = [
  {
    id: 'to-splash-page',
    url: '/',
    icon: 'fa-home',
    name: 'Go to Home Page',
  },
]
const scrollSpy = false
const withSidebarProps = { sections, scrollSpy }
const mainDivClassNames = 'digital-ocean-main-container'

export default withSidebar(NotFoundPage, withSidebarProps, mainDivClassNames)
