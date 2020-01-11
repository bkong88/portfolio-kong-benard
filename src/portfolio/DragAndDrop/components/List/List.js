import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Drag and Drop Components
import { Droppable, Draggable } from 'react-beautiful-dnd'

// Components
import Card from '../Card/Card'
import TextEntry from '../TextEntry/TextEntry'

// Utils
import { MdAdd, MdDeleteForever, MdEdit } from 'react-icons/md'
import classNames from 'classnames'

const List = ({
  draggableId,
  draggableIndex,
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
  const [isBeingDeleted, setIsBeingDeleted] = useState(false)

  const handleDeleteClick = () => {
    if (!isBeingDeleted) setIsBeingDeleted(true)
  }

  return (
    <Draggable draggableId={draggableId} index={draggableIndex}>
      {(provided, snapshot) => {
        const listClassName = classNames('dnd-list', { 'dnd-list--dragging': snapshot.isDragging })

        return (
          <div className="dnd-list__wrapper" ref={provided.innerRef} {...provided.draggableProps}>
            <div className={listClassName}>
              <div className="dnd-list__title-container" {...provided.dragHandleProps}>
                {editListTitleId !== id && (
                  <React.Fragment>
                    <h1 className="dnd-list__title" onClick={() => setEditListTitleId(id)}>
                      {title}
                    </h1>
                    <MdEdit className="dnd-list__edit-icon dnd-edit-icon" onClick={() => setEditListTitleId(id)} />
                  </React.Fragment>
                )}
                {editListTitleId === id && (
                  <React.Fragment>
                    <TextEntry
                      className="dnd-list__title dnd-list__title--text-entry"
                      id={id}
                      content={title}
                      handleChange={editListTitle}
                      setEditContentId={setEditListTitleId}
                      isBeingDeleted={isBeingDeleted}
                    />
                    <MdDeleteForever
                      className="dnd-list__edit-icon dnd-list__edit-icon--delete dnd-edit-icon"
                      onClick={() => removeList(id)}
                      onMouseDown={handleDeleteClick}
                      onMouseLeave={() => setIsBeingDeleted(false)}
                    />
                  </React.Fragment>
                )}
                <div className="dnd-list__title-icon-container"></div>
              </div>
              <div className="dnd-list__main-content">
                <Droppable droppableId={id} type="card">
                  {(provided) => {
                    return (
                      <div className="dnd-list__cards-container" ref={provided.innerRef} {...provided.droppableProps}>
                        {cardIdsArray.map((cardId, index) => {
                          return (
                            <Card key={cardId} {...cardsObject[cardId]} index={index} editCardProps={editCardProps} />
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
              <div className="dnd-list__add-new-card-container" onClick={() => addNewCard(id)}>
                <MdAdd className="dnd-list__add-new-card-icon" />
                <p className="dnd-list__add-new-card">Add new card</p>
              </div>
            </div>
          </div>
        )
      }}
    </Draggable>
  )
}

List.propTypes = {
  draggableId: PropTypes.string.isRequired,
  draggableIndex: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardIdsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  editListTitle: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  editListTitleId: PropTypes.string.isRequired,
  setEditListTitleId: PropTypes.func.isRequired,
  cardsObject: PropTypes.object.isRequired,
  addNewCard: PropTypes.func.isRequired,
  editCardProps: PropTypes.object.isRequired,
}

export default List
