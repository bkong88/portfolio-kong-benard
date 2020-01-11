import uuid_v1 from 'uuid/v1'

const createCard = (listId, content) => {
  const cardId = uuid_v1()
  const cardObject = {
    id: cardId,
    listId,
    content,
  }

  return { cardId, cardObject }
}

export const createDefaultCards = (listId, listTitle, numCards) => {
  const cardIdsArray = []
  const cardsObject = {}

  for (let i = 1; i <= numCards; i++) {
    const newCard = createCard(listId, `Example card ${i} for ${listTitle}`)
    cardsObject[newCard.cardId] = newCard.cardObject

    cardIdsArray.push(newCard.cardId)
  }

  return { cardsObject, cardIdsArray }
}

const createAndInsertInObjectAndArray = (cardsObj, cardIdsArr, listId, content) => {
  const newCard = createCard(listId, content)
  cardsObj[newCard.cardId] = newCard.cardObject
  cardIdsArr.push(newCard.cardId)
}

export const createInstructionCards = (listId) => {
  const cardsObject = {}
  const cardIdsArray = []

  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'Welcome to my Drag and Drop App!')
  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'You can click and drag any card you want.')
  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'After dragging, drop it into another position.')
  createAndInsertInObjectAndArray(
    cardsObject,
    cardIdsArray,
    listId,
    'You can drop it into another list if you want too!'
  )
  createAndInsertInObjectAndArray(
    cardsObject,
    cardIdsArray,
    listId,
    'You can also drag and drop lists by clicking and dragging the title of the lists.'
  )
  createAndInsertInObjectAndArray(
    cardsObject,
    cardIdsArray,
    listId,
    'Edit card and list titles by clicking on them (without dragging).'
  )
  createAndInsertInObjectAndArray(
    cardsObject,
    cardIdsArray,
    listId,
    'While editing, click on the trash icon to delete the card/list.'
  )
  createAndInsertInObjectAndArray(
    cardsObject,
    cardIdsArray,
    listId,
    'Add new cards by clicking on the "Add new card" button at the bottom of each list'
  )
  createAndInsertInObjectAndArray(
    cardsObject,
    cardIdsArray,
    listId,
    'Add new lists by clicking on the "Add new List" button on the right'
  )

  return { cardsObject, cardIdsArray }
}

export const createTechStackCards = (listId) => {
  const cardsObject = {}
  const cardIdsArray = []

  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'react-beautiful-dnd')
  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'react-icons')
  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'uuid')
  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'classnames')
  createAndInsertInObjectAndArray(cardsObject, cardIdsArray, listId, 'lodash (for deep cloning)')

  return { cardsObject, cardIdsArray }
}
