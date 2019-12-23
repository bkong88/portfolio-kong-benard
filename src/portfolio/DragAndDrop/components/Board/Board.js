import React, { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { createDefaultLists } from '../../fixtures/defaultLists'

import List from '../List/List'

const Board = () => {
  const [listsObject, setListsObject] = useState({})
  const [listIdsArray, setListIdsArray] = useState([])
  const [cardsObject, setCardsObject] = useState({})

  useEffect(() => {
    const defaultLists = createDefaultLists()
    setListsObject(defaultLists.listsObject)
    setListIdsArray(defaultLists.listsArray)
    setCardsObject(defaultLists.cardsObject)
  }, [])

  const onDragEnd = () => {}

  return (
    <div className="dnd-board">
      <DragDropContext onDragEnd={onDragEnd}>
        {listIdsArray.map((listId) => (
          <List key={listId} {...listsObject[listId]} cardsObject={cardsObject} />
        ))}
      </DragDropContext>
    </div>
  )
}

export default Board
