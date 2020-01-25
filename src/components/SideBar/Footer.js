import React from 'react'

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map((social) => {
          const { icon, name, url, target } = social
          const newTabProps = {}
          if (target === '_blank') {
            newTabProps.target = target
            newTabProps.rel = 'noopener noreferrer'
          }

          return (
            <li className="bottom__icon-container" key={url}>
              <a href={url} className={`bottom__icon icon ${icon}`} {...newTabProps}>
                <span className="label">{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
