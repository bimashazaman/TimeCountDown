const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')

const newYears = '1 Jan 2022'

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const secs = (newYearsDate - currentDate) / 1000

  const days = Math.floor(secs / 3600 / 24)
  const hours = Math.floor(secs / 3600) % 24
  const mins = Math.floor(secs / 60) % 60
  const msecs = Math.floor(secs) % 60

  daysEl.innerHTML = days
  hoursEl.innerHTML = hours
  minsEl.innerHTML = mins
  secsEl.innerHTML = msecs
}
countdown()
setInterval(countdown, 1000)
