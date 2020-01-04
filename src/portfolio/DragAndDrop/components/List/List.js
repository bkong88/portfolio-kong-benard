import React from 'react'

// Drag and Drop Components
import { Droppable } from 'react-beautiful-dnd'

// Components
import Card from '../Card/Card'
import TextEntry from '../TextEntry/TextEntry'

// Utils
import { MdAdd, MdDeleteForever, MdEdit } from 'react-icons/md'

const List = ({
  id,
  title,
  cardIdsArray,
  editListTitle,
  removeList,
  editListTitleId,
  setEditListTitleId,
  cardsObject,
  addNewCard,
  editCardProps,
}) => {
  return (
    <div className="dnd-list">
      <div className="dnd-list__title-container" onClick={() => setEditListTitleId(id)}>
        {editListTitleId !== id && <h1 className="dnd-list__title">{title}</h1>}
        {editListTitleId === id && (
          <TextEntry id={id} content={title} handleChange={editListTitle} setEditContentId={setEditListTitleId} />
        )}
        <div className="dnd-list__title-icon-container">
          {editListTitleId !== id && <MdEdit className="dnd-list__edit-icon edit-icon" />}
          {editListTitleId === id && (
            <MdDeleteForever
              className="dnd-list__edit-icon dnd-list__edit-icon--delete edit-icon"
              onClick={() => removeList(id)}
            />
          )}
        </div>
      </div>
      <div className="dnd-list__main-content">
        <Droppable droppableId={id}>
          {(provided) => {
            return (
              <div className="dnd-list__cards-container" ref={provided.innerRef} {...provided.droppableProps}>
                {cardIdsArray.map((cardId, index) => {
                  return <Card key={cardId} {...cardsObject[cardId]} index={index} editCardProps={editCardProps} />
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
