import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TextEntry = ({ className, id, content, handleChange, setEditContentId }) => {
  useEffect(() => {
    const enterFunction = (e) => {
      const keycode = e.keyCode ? e.keyCode : e.which
      if (keycode === 13) setEditContentId('')
    }

    document.addEventListener('keydown', enterFunction, false)

    return () => {
      document.removeEventListener('keydown', enterFunction, false)
    }
  }, [setEditContentId])

  // TODO: Change textarea height according to the content inside (probably need js/jquery to accomplish?)
  // Check here for ideas: https://css-tricks.com/textarea-tricks/#article-header-id-6
  return (
    <textarea
      className={classNames(className, 'text-entry')}
      value={content}
      autoFocus
      onChange={(e) => handleChange(id, e.target.value)}
      onBlur={() => setEditContentId('')}
    />
  )
}

TextEntry.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  setEditContentId: PropTypes.func.isRequired,
}

export default TextEntry
