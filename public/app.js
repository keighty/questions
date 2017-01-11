
const keyPointListSelector = '.key-points'
const rockReasonSelector = '.rock-reasons'
const keyPointForm = document.querySelector('.add-key-point')
const keyPointList = document.querySelector(keyPointListSelector)
const rockReasonForm = document.querySelector('.add-rock-reason')
const rockReasonList = document.querySelector('rockReasonSelector')
const rockReasons = JSON.parse(localStorage.getItem('rock-reasons')) || []
populateList(rockReasons, rockReasonSelector)

const keyPoints = JSON.parse(localStorage.getItem('key-points')) || []
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
  populateList(rockReasons, rockReasonSelector)
  localStorage.setItem('rock-reasons', JSON.stringify(rockReasons))
  this.reset()
}

rockReasonForm.addEventListener('submit', addRockReason)
