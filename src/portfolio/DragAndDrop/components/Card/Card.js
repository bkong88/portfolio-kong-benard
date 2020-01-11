import React, { useState } from 'react'

// Drag and Drop Components
import { Draggable } from 'react-beautiful-dnd'

// Components
import TextEntry from '../TextEntry/TextEntry'

// Utils
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import classNames from 'classnames'

const Card = ({
  id,
  index,
  listId,
  content,
  editCardProps: { changeCardContent, editCardId, removeCard, setEditCardId },
}) => {
  const [isBeingDeleted, setIsBeingDeleted] = useState(false)

  const handleDeleteClick = () => {
    if (!isBeingDeleted) setIsBeingDeleted(true)
  }

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
                  <MdEdit className="dnd-card__edit-icon dnd-edit-icon" onClick={() => setEditCardId(id)} />
                </React.Fragment>
              )}
              {editCardId === id && (
                <React.Fragment>
                  <TextEntry
                    className="dnd-card__content dnd-card__content--text-entry"
                    id={id}
                    content={content}
                    handleChange={changeCardContent}
                    setEditContentId={setEditCardId}
                    isTextArea={true}
                    isBeingDeleted={isBeingDeleted}
                  />
                  <MdDeleteForever
                    className="dnd-card__edit-icon dnd-card__edit-icon--delete dnd-edit-icon"
                    onClick={() => removeCard(id, listId)}
                    onMouseDown={handleDeleteClick}
                    onMouseLeave={() => setIsBeingDeleted(false)}
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
