import React, { useState, useEffect } from 'react'

// Drag/Drop
import { DragDropContext } from 'react-beautiful-dnd'

// Components
import List from '../List/List'

// utils
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
    // console.log('results: ', results)
  }

  return (
    <div className="dnd-board">
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        {listIdsArray.map((listId) => (
          <List
            key={listId}
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
      </DragDropContext>
      <div className="dnd-board__add-new-list-container" onClick={addNewList}>
        <div className="dnd-board__add-new-list-icon-container">
          <MdAdd className="dnd-board__add-new-list-icon" />
        </div>
        <p className="dnd-board__add-new-list">Add new list</p>
      </div>
    </div>
  )
}

export default Board
