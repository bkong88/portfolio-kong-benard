import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TextEntry = ({ className, id, content, handleChange, setEditContentId, isBeingDeleted, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(true)

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

  useEffect(() => {
    if (!isBeingDeleted && !isFocused) setEditContentId('')
  }, [isBeingDeleted, isFocused, setEditContentId])

  // TODO: Change textarea height according to the content inside (probably need js/jquery to accomplish?)
  // Check here for ideas: https://css-tricks.com/textarea-tricks/#article-header-id-6
  return (
    <div className="text-entry__container">
      {!isTextArea && (
        <input
          type="text"
          className={classNames(className, 'text-entry')}
          value={content}
          autoFocus
          onChange={(e) => handleChange(id, e.target.value)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      {isTextArea && (
        <textarea
          className={classNames(className, 'text-entry')}
          value={content}
          autoFocus
          onChange={(e) => handleChange(id, e.target.value)}
          onBlur={() => setIsFocused(false)}
        />
      )}
    </div>
  )
}

TextEntry.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  setEditContentId: PropTypes.func.isRequired,
  isBeingDeleted: PropTypes.bool.isRequired,
  isTextArea: PropTypes.bool,
}

export default TextEntry
