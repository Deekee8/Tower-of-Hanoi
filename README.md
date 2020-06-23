if current mode === put down disc
    clicking on a tower will point to the top disc in that tower and store it in a picked up disc variable

    clicking on another tower will prepend that picked up disc only if it's smaller than any disc that is already on top of that tower


    if (currentMode === put down disc) {
        pickedUpDisc = document.getElementById('tower1').lastElementChild
    }
    else if (currentMode === pick up disc) {
        clickedTower.prepend(pickedUpDisc)
    }

If picked up disk is wider than disc on top of tower, do nothing.
    if (pickedUpDisc.style.width > clickedTower.lastElementChild.style.width) {
        break
    }