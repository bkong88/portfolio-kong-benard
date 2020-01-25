import React from 'react'
import { Link } from 'gatsby'

export default function Header({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="sidebar-header__image image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p className="sidebar-header__heading">{heading}</p>
      </Link>
    </div>
  )
}
