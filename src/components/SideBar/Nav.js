import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from '../Scroll'

export default function Nav({ sections = [], scroll = true }) {
  return (
    <nav id="nav">
      <ul>
        {scroll ? (
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
            return (
              <li key={s.id} className="nav__item">
                <a href={`localhost:8000/#${s.id}`} id="top-link">
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
