const lists = {
  'key-points': getFromStorage('key-points'),
  'rock-reasons': getFromStorage('rock-reasons'),
  'develop': getFromStorage('develop')
}

Object.keys(lists).forEach(k => populateList(lists[k], k))

const [keyPointForm, rockReasonForm, developForm] = Array.from(document.querySelectorAll('form'))

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}

function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name]')).value
  const list = lists[this.name]
  list.push(text)
  populateList(list, this.name)
  localStorage.setItem(this.name, JSON.stringify(list))
  this.reset()
}

function populateList(itemList = [], itemListId) {
  const list = document.querySelector('ul.' + itemListId)
  list.innerHTML = itemList.map((item, i) => {
    return `
    <li id=${i}-${itemListId}>${item}</li>
    `
  }).join('')
}

keyPointForm.addEventListener('submit', addItem)
rockReasonForm.addEventListener('submit', addItem)
developForm.addEventListener('submit', addItem)
