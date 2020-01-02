import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { createDefaultLists } from '../../fixtures/defaultLists'
import uuid_v1 from 'uuid/v1'

import List from '../List/List'

const Board = () => {
  const [listsObject, setListsObject] = useState({})
  const [listIdsArray, setListIdsArray] = useState([])
  const [cardsObject, setCardsObject] = useState({})
  const [editCardId, setEditCardId] = useState('')

  useEffect(() => {
    const defaultLists = createDefaultLists()
    setListsObject(defaultLists.listsObject)
    setListIdsArray(defaultLists.listsArray)
    setCardsObject(defaultLists.cardsObject)
  }, [])

  const addNewCard = (listId) => {
    // Create a card id and card object
    const newCardId = uuid_v1()
    const newCardObj = { id: newCardId, listId, content: 'New Card Content' }

    // Add card to cardsObject
    setCardsObject((oldCardsObj) => {
      oldCardsObj[newCardId] = newCardObj

      return oldCardsObj
    })

    // Push newCardId to listsObject[listId].cardIdsArray
    setListsObject((oldListsObj) => {
      oldListsObj[listId].cardIdsArray.push(newCardId)
      return oldListsObj
    })

    // setEditCardId to newCardId
    setEditCardId(newCardId)
  }

  const removeCard = (cardId, listId) => {
    // Stop editing current card
    setEditCardId('')

    // Remove card from cardsObject
    setCardsObject((oldCardsObj) => {
      delete oldCardsObj[cardId]
      return oldCardsObj
    })

    // Remove cardId from listsObject[listId].cardIdsArray
    setListsObject((oldListsObj) => {
      const newCardIdsArray = oldListsObj[listId].cardIdsArray.filter((cardIdFromArray) => cardIdFromArray !== cardId)
      oldListsObj[listId].cardIdsArray = newCardIdsArray

      return oldListsObj
    })
  }

  const changeCardContent = (cardId, newContent) => {
    setCardsObject((oldCardsObject) => {
      oldCardsObject[cardId] = {
        ...oldCardsObject[cardId],
        content: newContent,
      }
      return { ...oldCardsObject }
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
            cardsObject={cardsObject}
            addNewCard={addNewCard}
            removeCard={removeCard}
            changeCardContent={changeCardContent}
            editCardProps={{ editCardId, setEditCardId }}
          />
        ))}
      </DragDropContext>
    </div>
  )
}

export default Board
