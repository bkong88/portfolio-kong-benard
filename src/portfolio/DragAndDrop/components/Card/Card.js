import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import TextEntry from '../TextEntry/TextEntry'

import { MdDeleteForever, MdEdit } from 'react-icons/md'
import classNames from 'classnames'

const Card = ({
  id,
  index,
  listId,
  content,
  editCardProps: { changeCardContent, editCardId, removeCard, setEditCardId },
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
                  <MdEdit className="dnd-card__edit-icon edit-icon" onClick={() => setEditCardId(id)} />
                </React.Fragment>
              )}
              {editCardId === id && (
                <React.Fragment>
                  <TextEntry
                    className="dnd-card__content"
                    id={id}
                    content={content}
                    handleChange={changeCardContent}
                    setEditContentId={setEditCardId}
                  />
                  <MdDeleteForever
                    className="dnd-card__edit-icon dnd-card__edit-icon--delete edit-icon"
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
