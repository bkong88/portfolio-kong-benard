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
    const newCard = createCard(listId, `card ${i} for ${listTitle}`)
    cardsObject[newCard.cardId] = newCard.cardObject

    cardIdsArray.push(newCard.cardId)
  }

  return { cardsObject, cardIdsArray }
}
