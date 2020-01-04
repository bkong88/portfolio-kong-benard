import React, { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { MdDeleteForever, MdEdit } from 'react-icons/md'
import classNames from 'classnames'

const TextArea = ({ id, content, changeCardContent, setEditCardId }) => {
  useEffect(() => {
    const enterFunction = (e) => {
      const keycode = e.keyCode ? e.keyCode : e.which
      if (keycode === 13) setEditCardId('')
    }

    document.addEventListener('keydown', enterFunction, false)

    return () => {
      document.removeEventListener('keydown', enterFunction, false)
    }
  }, [setEditCardId])

  // TODO: Change textarea height according to the content inside (probably need js/jquery to accomplish?)
  // Check here for ideas: https://css-tricks.com/textarea-tricks/#article-header-id-6
  return (
    <textarea
      className="dnd-card__content dnd-card__content--textbox"
      value={content}
      autoFocus
      onChange={(e) => changeCardContent(id, e.target.value)}
      onBlur={() => setEditCardId('')}
    />
  )
}

const Card = ({
  id,
  index,
  listId,
  removeCard,
  content,
  changeCardContent,
  editCardProps: { editCardId, setEditCardId },
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        const cardClassName = classNames('dnd-card', { 'dnd-card--dragging': snapshot.isDragging })

        return (
          <div
            className="dnd-card__wrapper"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <div className={cardClassName}>
              {editCardId !== id && (
                <React.Fragment>
                  <p className="dnd-card__content" onClick={() => setEditCardId(id)}>
                    {content}
                  </p>
                  <MdEdit className="dnd-card__edit-icon" onClick={() => setEditCardId(id)} />
                </React.Fragment>
              )}
              {editCardId === id && (
                <React.Fragment>
                  <TextArea
                    id={id}
                    content={content}
                    changeCardContent={changeCardContent}
                    setEditCardId={setEditCardId}
                  />
                  <MdDeleteForever
                    className="dnd-card__edit-icon dnd-card__edit-icon--delete"
                    onClick={() => removeCard(id, listId)}
                  />
                </React.Fragment>
              )}
            </div>
          </div>
        )
      }}
    </Draggable>
  )
}

export default Card
