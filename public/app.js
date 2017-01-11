const KEY_POINT = 'key-point'
const ROCK_REASON = 'rock-reason'

const sections = [KEY_POINT, ROCK_REASON]
const [
  keyPointList,
  rockReasonList
] = sections
      .map(section => document.querySelector(`.${section}`))

// const keyPointList = document.querySelector(keyPointListSelector)
// const rockReasonList = document.querySelector('rockReasonListSelector')

const [
  keyPointForm,
  rockReasonForm
] = sections
      .map(section => document.querySelector(`.add-${section}`))

// const keyPointForm = document.querySelector('.add-key-point')
// const rockReasonForm = document.querySelector('.add-rock-reason')

const keyPointListSelector = `.${KEY_POINT}s`
const rockReasonListSelector = `.${ROCK_REASON}s`

const [
  keyPoints,
  rockReasons
] = sections
      .map(section => JSON.parse(localStorage.getItem(`${section}s`)))

// const rockReasons = JSON.parse(localStorage.getItem('rock-reasons')) || []
// const keyPoints = JSON.parse(localStorage.getItem('key-points')) || []

populateList(rockReasons, rockReasonListSelector)
populateList(keyPoints, keyPointListSelector)

function addKeyPoint(e) {
  e.preventDefault();
  const text = this.querySelector('[name]').value
  keyPoints.push(text)
  populateList(keyPoints, keyPointListSelector)
  localStorage.setItem('key-points', JSON.stringify(keyPoints))
  this.reset()
}

function populateList(itemList = [], itemListId) {
  const list = document.querySelector(itemListId)
  list.innerHTML = itemList.map((item, i) => {
    return `
      <li id=${i}-key-point>${item}</li>
    `
  }).join('')
}

keyPointForm.addEventListener('submit', addKeyPoint)


function addRockReason(e) {
  e.preventDefault()
  const text = this.querySelector('[name]').value
  rockReasons.push(text)
  populateList(rockReasons, rockReasonListSelector)
  localStorage.setItem('rock-reasons', JSON.stringify(rockReasons))
  this.reset()
}

rockReasonForm.addEventListener('submit', addRockReason)
