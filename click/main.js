const app = document.querySelector('.app')

const createTimerBox = () => {
    const firstBox = document.createElement('div')
    firstBox.classList.add('app__box')
    app.appendChild(firstBox)
    return document.querySelector('.app__box')
}

const createCircleBox = () => {
    const secondBox = document.createElement('div')
    secondBox.classList.add('app__box')
    app.appendChild(secondBox)
    return document.querySelectorAll('.app__box')[1]
}

const timer = document.createElement('div')
timer.classList.add('timer')
createTimerBox().appendChild(timer)

const stopTime = document.createElement('p')
stopTime.innerHTML = 'Stop Time'

let seconds = 60
let minutes = parseInt(seconds / 60, 10)
seconds = seconds % 60

const interval = setInterval(() => {
    if (seconds === 0 && minutes === 1) {
        minutes -= 1
        seconds = 60
    }
    if (seconds === 0) {
        clearInterval(interval)
        createTimerBox().appendChild(stopTime)
        alert(`${points} : Total Score`)
    }
    seconds -= 1
    timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}, 1000)

const circleContainer = document.createElement('div')
createCircleBox().appendChild(circleContainer)
circleContainer.classList.add('app__container')

const circles = Array.from(new Array(5))

circles.forEach(object => {
    const newCircle = document.createElement('div')
    newCircle.classList.add('circle')
    circleContainer.appendChild(newCircle)
})

const scoreBox = document.createElement('input')
scoreBox.classList.add('points-box')
createCircleBox().appendChild(scoreBox)

let points = 0
scoreBox.value = points

const allCircles = document.querySelectorAll('.circle')

const addColor = setInterval(() => {
    allCircles.forEach(object => {
        object.classList.remove('circle__red')
        object.classList.remove('circle__green')
    })
    let randomNumber = Math.floor(Math.random() * 5)
    let coloredCircle = allCircles[randomNumber]
    coloredCircle.classList.add('circle__red')
    document.querySelector('.app__container').addEventListener('click', scorePoint)

}, 1000)

const scorePoint = event => {

    if (event.target.classList.toString() === 'circle circle__red') {
        points += 1
        document.querySelector('.app__container').removeEventListener('click', scorePoint)
        scoreBox.value = points
        event.target.classList.add('circle__green')
    }
}