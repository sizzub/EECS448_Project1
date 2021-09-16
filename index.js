document.addEventListener('DOMContentLoaded', () => {
    view.renderBoard()
})

function get(arr, x, y) {
    //jason will do this
    return 0;
}

function set(arr, x, y, value) {
    //jason will do this
}

function rotate(arr, width, height) {
    //swaps columns and rows of array
    //returns rotated version of given array
    //makes it easier to use arr.includes() to check for subarrays (e.g. sunken ships)
    let tempArr = [];
    for (let i = 0; i < height; i++) {
        tempArr[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        set(tempArr, i, j) = get(arr, j, i);
      }
    }
    return tempArr;
}

function validPlacement(arr, x, y, shipSize, orientation) {
    //returns bool for whether or not the given coordinate in the array is a valid placement for a ship
    //returns bool for whether or not the placement is valid
    //true = valid; false = invalid
    if (shipSize < 2) {
        return(get(arr, x, y) < 2);
    }
    else {
        if (orienation == 0) {
            //north placement
            if (y > shipSize-1 && y < 9) {
                for (let i = 0; i < shipSize; i++) {
                    if (get(arr, x, y-i) > 2) {
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        if (orienation == 1) {
            //east placement
            if (x < 10-(shipSize-1) && x >= 0) {
                for (let i = 0; i < shipSize; i++) {
                    if (get(arr, x+i, y) > 2) {
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        if (orienation == 2) {
            //south placement
            if (y < 9-(shipSize-1) && y >= 0) {
                for (let i = 0; i < shipSize; i++) {
                    if (get(arr, x, y+i) > 2) {
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
        if (orienation == 3) {
            //west placement
            if (x > shipSize-1 && x < 10) {
                for (let i = 0; i < shipSize; i++) {
                    if (get(arr, x-i, y) > 2) {
                        return false;
                    }
                }
                return true;
            }
            else {
                return false;
            }
        }
    }
}

function validAttack(arr, x, y) {
    //only needed for players that are dumb
    //returns bool for whether or not the given coordinate in the array has already been attacked
    //true = spot has not been attacked (valid attack); false = spot has been attacked (invalid attack)
    return (get(arr, x, y) % 2 == 0);
}
function attack(arr, x, y) {
    //returns 0, 1 or 2
    //0 = miss; 1 = hit but did not sink; 2 = hit and sank ship
    //changes number in that spot in the array to represent the attack
    if (validAttack) {
        set(arr, x, y, get(arr, x, y) + 1)
    }
    //^should probably check for validAttack somewhere else as well
    //to let the user reselect coordinates
    return ((get(arr, x, y) > 1) + isSunk(arr, Math.trunc(get(arr, x, y)/2)));
}

function isSunk(arr, shipSize) {
    //returns bool for whether or not the ship of the given size is sunk
    //true = the ship has been fully sunk; false = the ship has not been sunk or there is not a ship there
    let shipHit = 2*shipSize + 1;
    if (shipSize > 0) {
        return (arr.toString().includes((shipHit + ",").repeat(shipSize - 1) + shipHit)
        ||rotate(arr).toString().includes((shipHit + ",").repeat(shipSize - 1) + shipHit));
    }
    else {
        return false;
    }
}

function allSunk(arr, numShips) {
    //returns bool whether or not all of the ships in the given array are sunk
    //0 = they are not all sunk; 1 = they are all sunk
    //numShips is the amount of ships the players are using
    let count = 0;
    for (let i = 1; i <= numShips; i++) {
        count = count + isSunk(arr, i);
    }
    return (count == numShips);
}
