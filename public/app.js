const listNames = [
  'key-points',
  'rock-reasons',
  'develop',
  'ideas',
  'philosophy',
  'questions',
  'goals',
  'challenges',
  'notes'
]

const lists = listNames.reduce((result, name) => {
  result[name] = getFromStorage(name)
  populateList(name, result[name])
  return result
}, {})

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}

function sendToStorage(key, list) {
  localStorage.setItem(key, JSON.stringify(list))
}

function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name]')).value
  const listName = this.name
  const list = lists[listName]

  list.push(text)
  populateList(listName, list)
  sendToStorage(listName, list)
  this.reset()
}

function populateList(itemListId, itemList = []) {
  const list = document.querySelector('ul.' + itemListId)
  list.innerHTML = itemList.map((item, i) => {
    return `
    <li id=${i}-${itemListId}>${item}</li>
    `
  }).join('')
}

document.querySelectorAll('form').forEach(form => form.addEventListener('submit', addItem))
