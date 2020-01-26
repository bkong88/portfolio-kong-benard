import uuid_v1 from 'uuid/v1'
import { createDefaultCards, createInstructionCards } from './defaultCards'

const createList = (title = '', cardIdsArray = []) => {
  const listId = uuid_v1()

  const listObject = { id: listId, title, cardIdsArray }

  return { listId, listObject }
}

export const createDefaultLists = () => {
  const listsObject = {}

  // Create lists for instructions
  const instructionsList = createList('Instructions')
  // const techStackList = createList('Packages Used (for developers)')
  listsObject[instructionsList.listId] = instructionsList.listObject
  // listsObject[techStackList.listId] = techStackList.listObject

  // Create lists
  const list1 = createList('Backlog')
  const list2 = createList('In Progress')
  const list3 = createList('Completed')
  listsObject[list1.listId] = list1.listObject
  listsObject[list2.listId] = list2.listObject
  listsObject[list3.listId] = list3.listObject

  const listsArray = [instructionsList.listId, list1.listId, list2.listId, list3.listId]
  // const listsArray = [instructionsList.listId, techStackList.listId, list1.listId, list2.listId, list3.listId]

  // Add cards for instructions
  const instructionsListCards = createInstructionCards(instructionsList.listId)
  // const techStackListCards = createTechStackCards(techStackList.listId)
  listsObject[instructionsList.listId].cardIdsArray = instructionsListCards.cardIdsArray
  // listsObject[techStackList.listId].cardIdsArray = techStackListCards.cardIdsArray

  // Add cards
  const list1Cards = createDefaultCards(list1.listId, list1.listObject.title, 4)
  const list2Cards = createDefaultCards(list2.listId, list2.listObject.title, 12)
  const list3Cards = createDefaultCards(list3.listId, list3.listObject.title, 6)
  listsObject[list1.listId].cardIdsArray = list1Cards.cardIdsArray
  listsObject[list2.listId].cardIdsArray = list2Cards.cardIdsArray
  listsObject[list3.listId].cardIdsArray = list3Cards.cardIdsArray

  // Combine all cards objects
  const cardsObject = {
    ...instructionsListCards.cardsObject,
    // ...techStackListCards.cardsObject,
    ...list1Cards.cardsObject,
    ...list2Cards.cardsObject,
    ...list3Cards.cardsObject,
  }

  return { listsObject, listsArray, cardsObject }
}
