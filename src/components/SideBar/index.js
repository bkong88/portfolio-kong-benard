import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import TopNav from './TopNav'
import config from '../../../config'
const avatarPic = require('../../assets/images/avatar.png')

export default function SideBar({ scrollSpy = true, sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false)
  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={`${config.authorGivenNames} ${config.authorSurname}`}
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <Header avatar={avatarPic} title={config.authorName} heading={config.heading} />
          <Nav scrollSpy={scrollSpy} sections={sections} />
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>
    </div>
  )
}
