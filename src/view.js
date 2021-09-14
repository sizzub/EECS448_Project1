const view = 
{
    locationString: ['A','B','C','D','E','F','G','H','I','J'],

    clickedBoxes: [],

    placementCounter: 0,

    gameState: 0,

    renderBoard: function()
    {
        let board = document.querySelectorAll(".board")
        let container = document.querySelectorAll(".letterContainer")
        let numContainer = document.querySelectorAll(".numberContainer")

        //Creates each spot on the board
        for (let i=0; i<90; i++)
        {
            let temp = document.createElement("img")
            let temp2 = document.createElement("img")
            temp.setAttribute('src', 'images/blank2.png')
            temp.setAttribute('data-id', i)
            temp2.setAttribute('src', 'images/blank2.png')
            temp2.setAttribute('data-id', i)
            temp.addEventListener('click', this.change)
            temp2.addEventListener('click', this.change)
            board[0].appendChild(temp)
            board[1].appendChild(temp2)
        }
        //displays the letter on the top of the board
        for (let i=0; i<10; i++)
        {
            let temp = document.createElement("div")
            let temp2 = document.createElement("div")
            temp.innerText = this.locationString[i]
            temp2.innerText = this.locationString[i]
            container[0].appendChild(temp)
            container[1].appendChild(temp2)
        }
        //displays the numbers on the columns
        for(let i =0; i<9; i++)
        {
            let temp = document.createElement("div")
            let temp2 = document.createElement("div")
            temp.innerText = i
            temp2.innerText = i
            numContainer[0].appendChild(temp)
            numContainer[1].appendChild(temp2)
        }
        this.pieceSetting()
    },

    change: function()
    {
        if(view.gameState == 1)
        {
            let temp = this.getAttribute('data-id')
            console.log(view.clickedBoxes)
            if(view.placementCounter == 1 && view.clickedBoxes.length > 0)
            {
                alert("Maximum amount of boxes click for the " + (view.placementCounter) + " length ship")
            }
            else if(view.placementCounter == 2 && view.clickedBoxes.length > 1)
            {
                alert("Maximum amount of boxes click for the " + (view.placementCounter) + " length ship")
            }
            else if(view.placementCounter == 3 && view.clickedBoxes.length > 2)
            {
                alert("Maximum amount of boxes click for the " + (view.placementCounter) + " length ship")
            }
            else
            {
                view.clickedBoxes.push(temp)
            }
        }
    },

    pieceSetting: function()
    {
        let button = document.createElement("button")
        button.innerText = "Click here to start placing pieces"
        button.addEventListener('click', () =>
        {
            view.gameState = 1
            document.querySelector(".Title").remove()
            button.remove()
            let instruct = document.createElement("h3")
            instruct.innerText = "Turn away form your opponent, then place pieces by clicking on the correct number of boxes on the left grid in the correct order, then hit the submit button"
            let shipNum = document.createElement("h4")
            shipNum.innerText = "Please place your 1 length ship"
            let subButton = document.createElement("button")
            subButton.innerText = "Submit"
            view.placementCounter = 1
            subButton.addEventListener('click', () => 
            {
                document.querySelector("h4").remove()
                let shipNum = document.createElement("h4")
                shipNum.innerText = "Please place your 2 length ship"
            })
            document.querySelector("body").appendChild(instruct)
            document.querySelector("body").appendChild(subButton)
            document.querySelector("body").appendChild(shipNum)
        })
        document.querySelector("body").appendChild(button)
    }


}