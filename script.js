let currentMode = 'put down disc' 
let nextMode = 'pick up disc'

const gameMode = function() {  // alternate game modes
    if (currentMode === 'put down disc') {
        nextMode = 'pick up disc'
    } else {
        nextMode = 'put down disc'
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
    // let pickUpDisc = document.getElementById('tower1').lastElementChild
    switch (currentMode) {
        case 'put down disc':
            pickedUpDisc = document.getElementById('tower1').lastElementChild;
            break;
        case 'pick up disc':
            if (pickedUpDisc.clientWidth < clickedTower.lastElementChild.clientWidth) {
            clickedTower.append(pickedUpDisc);
            }
            break;
    }
    console.log(clickedTower.lastElementChild.clientWidth)
})


tower2.addEventListener('click', function(evt) {
    let clickedTower = event.currentTarget
    // let pickUpDisc = document.getElementById('tower2').lastElementChild
    switch (currentMode) {
        case 'put down disc':
            pickedUpDisc = document.getElementById('tower2').lastElementChild;
            break;
        case 'pick up disc':
            clickedTower.append(pickedUpDisc);
            break;
    } 
})
    
    

tower3.addEventListener('click', function(evt) {
    let clickedTower = event.currentTarget
    // let pickUpDisc = document.getElementById('tower3').lastElementChild
    switch (currentMode) {
        case 'put down disc':
            pickedUpDisc = document.getElementById('tower3').lastElementChild;
            break;
        case 'pick up disc':
            clickedTower.append(pickedUpDisc);
            break;
    }
})







