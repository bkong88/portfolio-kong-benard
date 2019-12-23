import React from 'react'
import Card from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd'

const List = ({ id, title, cardIdsArray, cardsObject }) => {
  return (
    <div className="dnd-list">
      <h1 className="dnd-list__title">title: {title}</h1>
      <Droppable droppableId={id}>
        {(provided) => {
          return (
            <div className="dnd-list__cards-container" ref={provided.innerRef} {...provided.droppableProps}>
              {cardIdsArray.map((cardId, index) => {
                return <Card key={cardId} {...cardsObject[cardId]} index={index} />
              })}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  )
}

export default List
