import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from '../Scroll'

export default function Nav({ scrollSpy, sections }) {
  /*
    If there is a scrollSpy, it means it's a sufficiently big page such as the splash page that can scroll down
    if scrollSpy === true
    sections: [
      {
        id: uniqueId,
        url: "url", // This was added
        icon: "iconName",
        name: "What to write"
      }
    ]
  */

  return (
    <nav id="nav">
      {scrollSpy ? (
        <Scrollspy
          className="nav__list"
          items={sections.map((s) => s.id)}
          currentClassName="nav__item--active"
          offset={-300}>
          {sections.map((s) => {
            return (
              <li key={s.id} className="nav__item">
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} className="nav__top-link">
                    <span className={`nav__item-content icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            )
          })}
        </Scrollspy>
      ) : (
        sections.map((s) => {
          const shouldOpenInNewTab = s.url.includes('http') || s.url[0] !== '/'
          const shouldOpenInNewTabProps = {}
          if (shouldOpenInNewTab) {
            shouldOpenInNewTabProps.target = '_blank'
            shouldOpenInNewTabProps.rel = 'noopener noreferrer'
          }

          return (
            <ul className="nav__list">
              <li key={s.id} className="nav__item">
                <a href={s.url} className="nav__top-link" {...shouldOpenInNewTabProps}>
                  <span className={`nav__item-content icon ${s.icon}`}>{s.name}</span>
                </a>
              </li>
            </ul>
          )
        })
      )}
    </nav>
  )
}
