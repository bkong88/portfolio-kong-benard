import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { MdEdit } from 'react-icons/md'
import classNames from 'classnames'

const Card = ({ id, index, listId, content }) => (
  <Draggable draggableId={id} index={index}>
    {(provided, snapshot) => {
      const cardClassName = classNames('dnd-card', { 'dnd-card--dragging': snapshot.isDragging })
      const editClassName = classNames('dnd-card__edit-icon', { 'dnd-card__edit-icon--dragging': snapshot.isDragging })

      return (
        <div
          className="dnd-card__wrapper"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div className={cardClassName}>
            <p className="dnd-card__content">{content}</p>
            <MdEdit className={editClassName} />
          </div>
        </div>
      )
    }}
  </Draggable>
)

export default Card
