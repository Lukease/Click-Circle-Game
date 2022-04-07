const app = document.querySelector('.app')
const firstBox = document.createElement('div')
firstBox.classList.add('app__box')
app.appendChild(firstBox)
const secondBox = document.createElement('div')
secondBox.classList.add('app__box')
app.appendChild(secondBox)

const timer = document.createElement('div')
timer.classList.add('timer')
firstBox.appendChild(timer)

const stopTime = document.createElement('p')
stopTime.innerHTML = 'Stop Time'


let seconds = 2
let minutes = parseInt(seconds / 60)
seconds = seconds % 60

const interval = setInterval(function () {
    if (seconds === 0 && minutes === 1) {
        minutes -= 1
        seconds = 60
    } else if (seconds === 0) {
        clearInterval(interval)
        firstBox.appendChild(stopTime)
        alert(`${points} : Total Score`)
    }
    seconds -= 1
    return timer.innerHTML = `${minutes.toString().padStart(2, '0')}:` + seconds.toString().padStart(2, '0')
}, 1000);


const secondBoxContainer = document.createElement('div')
secondBox.appendChild(secondBoxContainer)
secondBoxContainer.classList.add('app__container')

const circles = [1, 2, 3, 4, 5]

circles.forEach(object => {
    const newCircle = document.createElement('div')
    newCircle.classList.add('circle')
    secondBoxContainer.appendChild(newCircle)
})

const scoreBox = document.createElement('input')
scoreBox.classList.add('points-box')
let points = 0
scoreBox.value = points
secondBox.appendChild(scoreBox)

const allCircles = document.querySelectorAll('.circle')

const addColor = setInterval(function () {
    allCircles.forEach(object => {
        object.classList.remove('circle__red')
        object.classList.remove('circle__green')
    })
    let randomNumber = Math.floor(Math.random() * 5)
    let coloredCircle = allCircles[randomNumber]
    coloredCircle.classList.add('circle__red')

    document.querySelector('.app__container').addEventListener('click', scorePoint)

}, 1000)


function scorePoint(event) {

    if (event.target.classList.toString() === 'circle circle__red') {
        points += 1
        document.querySelector('.app__container').removeEventListener('click', scorePoint)
        scoreBox.value = points
        event.target.classList.add('circle__green')
    }
}