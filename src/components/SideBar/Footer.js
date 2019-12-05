import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url, target } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`} target={target}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
