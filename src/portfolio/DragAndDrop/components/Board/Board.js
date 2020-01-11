import React, { useState, useEffect } from 'react'

// Drag and Drop Components
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

// Components
import List from '../List/List'

// Utils
import { cloneDeep } from 'lodash'
import { createDefaultLists } from '../../fixtures/defaultLists'
import { MdAdd } from 'react-icons/md'
import uuid_v1 from 'uuid/v1'

const Board = () => {
  const [listsObject, setListsObject] = useState({})
  const [listIdsArray, setListIdsArray] = useState([])
  const [cardsObject, setCardsObject] = useState({})
  const [editListTitleId, setEditListTitleId] = useState('')
  const [editCardId, setEditCardId] = useState('')

  useEffect(() => {
    const defaultLists = createDefaultLists()
    setListsObject(defaultLists.listsObject)
    setListIdsArray(defaultLists.listsArray)
    setCardsObject(defaultLists.cardsObject)
  }, [])

  const addNewList = () => {
    // Create new list id and list object
    const newListId = uuid_v1()
    const newListObj = { id: newListId, title: 'New List Title', cardIdsArray: [] }

    // Add list to listsObject
    setListsObject((oldListsObj) => ({ ...oldListsObj, [newListId]: newListObj }))

    // Push newListId to listIdsArray
    setListIdsArray((oldListIdsArray) => [...oldListIdsArray, newListId])

    // TODO: Set EditListId
  }

  const removeList = (listId) => {
    setEditListTitleId('')

    // Remove cards from cardsObj which are in listsObj[listId].cardIdsArray
    setCardsObject((prevCardsObj) => {
      const deepCopiedCardsObj = cloneDeep(prevCardsObj)
      listsObject[listId].cardIdsArray.forEach((currentCardId) => delete deepCopiedCardsObj[currentCardId])
      return deepCopiedCardsObj
    })

    setListsObject((prevListsObj) => {
      const deepCopiedListsObj = cloneDeep(prevListsObj)
      delete deepCopiedListsObj[listId]
      return deepCopiedListsObj
    })

    setListIdsArray((prevListIdsArray) => prevListIdsArray.filter((listIdInArray) => listIdInArray !== listId))
  }

  const editListTitle = (listId, newTitle) => {
    setListsObject((prevListsObj) => {
      const deepClonedListsObj = cloneDeep(prevListsObj)
      deepClonedListsObj[listId] = {
        ...deepClonedListsObj[listId],
        title: newTitle,
      }
      return deepClonedListsObj
    })
  }

  const addNewCard = (listId) => {
    // Create a card id and card object
    const newCardId = uuid_v1()
    const newCardObj = { id: newCardId, listId, content: 'New Card Content' }

    // Add card to cardsObject
    setCardsObject((oldCardsObj) => ({ ...oldCardsObj, [newCardId]: newCardObj }))

    // Push newCardId to listsObject[listId].cardIdsArray
    setListsObject((oldListsObj) => {
      const deepCopyOldListsObj = cloneDeep(oldListsObj)
      deepCopyOldListsObj[listId].cardIdsArray.push(newCardId)
      return deepCopyOldListsObj
    })

    // setEditCardId to newCardId
    setEditCardId(newCardId)
  }

  const removeCard = (cardId, listId) => {
    // Stop editing current card
    setEditCardId('')

    // Remove card from cardsObject
    setCardsObject((oldCardsObj) => {
      const deepCopiedCardsObj = cloneDeep(oldCardsObj)
      delete deepCopiedCardsObj[cardId]
      return deepCopiedCardsObj
    })

    // Remove cardId from listsObject[listId].cardIdsArray
    setListsObject((oldListsObj) => {
      const deepCopiedListsObj = cloneDeep(oldListsObj)
      const newCardIdsArray = deepCopiedListsObj[listId].cardIdsArray.filter(
        (cardIdFromArray) => cardIdFromArray !== cardId
      )
      deepCopiedListsObj[listId].cardIdsArray = newCardIdsArray

      return deepCopiedListsObj
    })
  }

  const changeCardContent = (cardId, newContent) => {
    setCardsObject((oldCardsObject) => {
      const deepCopiedCardsObj = cloneDeep(oldCardsObject)
      deepCopiedCardsObj[cardId] = {
        ...deepCopiedCardsObj[cardId],
        content: newContent,
      }
      return deepCopiedCardsObj
    })
  }

  const onDragStart = () => {
    setEditCardId('')
  }

  const onDragEnd = (results) => {
    const { source, destination, type } = results

    // User drops Draggable outside a valid Droppable
    if (!destination) return

    if (type === 'list') {
      // List is being dragged

      // User drops Draggable in the exact same position
      if (source.index === destination.index) return

      // User drops Draggable in another position
      const clonedListIdsArray = [...listIdsArray]

      // Remove source.index's Id
      const [draggedListId] = clonedListIdsArray.splice(source.index, 1)
      // Insert in destination.index's position
      clonedListIdsArray.splice(destination.index, 0, draggedListId)

      setListIdsArray(clonedListIdsArray)
    } else {
      // Card is being dragged

      // User drops Draggable inside the same Droppable as its origin
      if (source.droppableId === destination.droppableId) {
        // User drops Draggable in the exact same position
        if (source.index === destination.index) return
        // User drops Draggable in another position
        else {
          const listId = source.droppableId
          const newListObj = cloneDeep(listsObject[listId])
          const newCardIdsArray = [...newListObj.cardIdsArray]

          // Remove source.index's Id
          const [cardId] = newCardIdsArray.splice(source.index, 1)
          // Insert in destination.index's position
          newCardIdsArray.splice(destination.index, 0, cardId)

          newListObj.cardIdsArray = newCardIdsArray

          setListsObject((prevListsObj) => ({ ...prevListsObj, [listId]: newListObj }))
        }
      }
      // User Drops Draggable inside a different Droppable from its origin
      else {
        const sourceListId = source.droppableId
        const newSourceListObj = cloneDeep(listsObject[sourceListId])
        const newSourceCardIdsArray = [...newSourceListObj.cardIdsArray]

        const destinationListId = destination.droppableId
        const newDestinationListObj = cloneDeep(listsObject[destinationListId])
        const newDestinationCardIdsArray = [...newDestinationListObj.cardIdsArray]

        // Remove source.index's Id from newSourceCardIdsArray
        const [cardId] = newSourceCardIdsArray.splice(source.index, 1)
        // Insert in destination.index's position inside newDestinationCardIdsArray
        newDestinationCardIdsArray.splice(destination.index, 0, cardId)

        // Replace both cardIdsArrays of both list objects
        newSourceListObj.cardIdsArray = newSourceCardIdsArray
        newDestinationListObj.cardIdsArray = newDestinationCardIdsArray

        setListsObject((prevListsObj) => ({
          ...prevListsObj,
          [sourceListId]: newSourceListObj,
          [destinationListId]: newDestinationListObj,
        }))
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <div className="dnd-board">
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div className="dnd-board__all-lists-container" ref={provided.innerRef} {...provided.droppableProps}>
              {listIdsArray.map((listId, index) => (
                <List
                  key={listId}
                  draggableId={listId}
                  draggableIndex={index}
                  {...listsObject[listId]}
                  editListTitle={editListTitle}
                  removeList={removeList}
                  editListTitleId={editListTitleId}
                  setEditListTitleId={setEditListTitleId}
                  cardsObject={cardsObject}
                  addNewCard={addNewCard}
                  editCardProps={{ changeCardContent, editCardId, removeCard, setEditCardId }}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="dnd-board__add-new-list-container" onClick={addNewList}>
          <div className="dnd-board__add-new-list-icon-container">
            <MdAdd className="dnd-board__add-new-list-icon" />
          </div>
          <p className="dnd-board__add-new-list">Add new list</p>
        </div>
      </div>
    </DragDropContext>
  )
}

export default Board
