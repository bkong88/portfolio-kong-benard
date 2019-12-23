import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({ id, index, listId, content }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => {
      return (
        <div className="dnd-card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p className="dnd-card__content">{content}</p>
        </div>
      )
    }}
  </Draggable>
)

export default Card
