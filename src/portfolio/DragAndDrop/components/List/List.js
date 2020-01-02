import React from 'react'
import Card from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd'
import { MdAdd } from 'react-icons/md'

const List = ({ id, title, cardIdsArray, cardsObject, addNewCard, removeCard, changeCardContent, editCardProps }) => {
  return (
    <div className="dnd-list">
      <h1 className="dnd-list__title">{title}</h1>
      <div className="dnd-list__main-content">
        <Droppable droppableId={id}>
          {(provided) => {
            return (
              <div className="dnd-list__cards-container" ref={provided.innerRef} {...provided.droppableProps}>
                {cardIdsArray.map((cardId, index) => {
                  return (
                    <Card
                      key={cardId}
                      {...cardsObject[cardId]}
                      index={index}
                      removeCard={removeCard}
                      changeCardContent={changeCardContent}
                      editCardProps={editCardProps}
                    />
                  )
                })}
                {provided.placeholder}
              </div>
            )
          }}
        </Droppable>
      </div>
      <div className="dnd-list__add-new-card-container">
        <MdAdd className="dnd-list__add-new-card-icon" />
        <p className="dnd-list__add-new-card" onClick={() => addNewCard(id)}>
          Add new card
        </p>
      </div>
    </div>
  )
}

export default List
