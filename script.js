let currentMode = 'pick up disc' 
let nextMode = 'put down disc'

const gameMode = function() {  // alternate game modes
    if (currentMode === 'pick up disc') {
        nextMode = 'put down disc'
    } else {
        nextMode = 'pick up disc'
    }

    currentMode = nextMode

    console.log(currentMode)
}

const game = document.getElementById('game') // add game modes to game
game.addEventListener('click', gameMode)

const tower1 = document.getElementById('tower1')
const tower2 = document.getElementById('tower2')
const tower3 = document.getElementById('tower3')


tower1.addEventListener('click', function(evt) {
    let clickedTower = event.currentTarget
    let pickUpDisc = document.getElementById('tower1').lastElementChild
    console.log(pickUpDisc) 
})

tower2.addEventListener('click', function(evt) {
    let clickedTower = event.currentTarget
    let pickUpDisc = document.getElementById('tower2').lastElementChild
    console.log(pickUpDisc)
})

tower3.addEventListener('click', function(evt) {
    let clickedTower = event.currentTarget
    let pickUpDisc = document.getElementById('tower3').lastElementChild
    console.log(pickUpDisc)
})