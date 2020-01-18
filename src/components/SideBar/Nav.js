import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from '../Scroll'

export default function Nav({ scrollSpy, sections }) {
  /*
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
      <ul>
        {scrollSpy ? (
          <Scrollspy items={sections.map((s) => s.id)} currentClassName="active" offset={-300}>
            {sections.map((s) => {
              return (
                <li key={s.id} className="nav__item">
                  <Scroll type="id" element={s.id}>
                    <a href={`#${s.id}`} id="top-link">
                      <span className={`icon ${s.icon}`}>{s.name}</span>
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
              <li key={s.id} className="nav__item">
                <a href={s.url} id="top-link" {...shouldOpenInNewTabProps}>
                  <span className={`icon ${s.icon}`}>{s.name}</span>
                </a>
              </li>
            )
          })
        )}
      </ul>
    </nav>
  )
}
