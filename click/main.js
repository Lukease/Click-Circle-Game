const app = document.querySelector('.app')

const createTimerBox = () => {
    const firstBox = document.createElement('div')
    firstBox.classList.add('app__box')
    app.appendChild(firstBox)

    const timer = document.createElement('div')
    timer.classList.add('timer')

    firstBox.appendChild(timer)

    return timer
}

const createCircleBox = () => {
    const secondBox = document.createElement('div')
    secondBox.classList.add('app__box')
    app.appendChild(secondBox)

    return secondBox
}

let seconds = 60
let minutes = parseInt(seconds / 60, 10)
seconds = seconds % 60
const timer = createTimerBox()

const interval = setInterval(() => {
    if (seconds === 0 && minutes === 1) {
        minutes -= 1
        seconds = 60
    }

    seconds -= 1

    if (seconds === 0) {
        clearInterval(interval)
        alert(`${points} : Total Score`)
    }
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

    if (seconds > 0) {
        allCircles.forEach(object => {
            object.classList.remove('circle__red')
            object.classList.remove('circle__green')
        })
        let randomNumber = Math.floor(Math.random() * 5)
        let coloredCircle = allCircles[randomNumber]
        coloredCircle.classList.add('circle__red')
        document.querySelector('.app__container').addEventListener('click', scorePoint)
    }
}, 1000)

const scorePoint = event => {

    if (event.target.classList.contains('circle circle__red')) {
        points += 1
        document.querySelector('.app__container').removeEventListener('click', scorePoint)
        scoreBox.value = points
        event.target.classList.add('circle__green')
    }
}