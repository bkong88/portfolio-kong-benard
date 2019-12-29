import uuid_v1 from 'uuid/v1'
import { createDefaultCards } from './defaultCards'

const createList = (title = '', cardIdsArray = []) => {
  const listId = uuid_v1()

  const listObject = { id: listId, title, cardIdsArray }

  return { listId, listObject }
}

export const createDefaultLists = () => {
  const listsObject = {}
  const list1 = createList('Backlog')
  const list2 = createList('In Progress')
  const list3 = createList('Complete')
  listsObject[list1.listId] = list1.listObject
  listsObject[list2.listId] = list2.listObject
  listsObject[list3.listId] = list3.listObject

  const listsArray = [list1.listId, list2.listId, list3.listId]

  // Add cards
  const list1Cards = createDefaultCards(list1.listId, list1.listObject.title, 8)
  const list2Cards = createDefaultCards(list2.listId, list2.listObject.title, 15)
  const list3Cards = createDefaultCards(list3.listId, list3.listObject.title, 7)

  listsObject[list1.listId].cardIdsArray = list1Cards.cardIdsArray
  listsObject[list2.listId].cardIdsArray = list2Cards.cardIdsArray
  listsObject[list3.listId].cardIdsArray = list3Cards.cardIdsArray

  // Combine all cards objects
  const cardsObject = { ...list1Cards.cardsObject, ...list2Cards.cardsObject, ...list3Cards.cardsObject }

  return { listsObject, listsArray, cardsObject }
}
