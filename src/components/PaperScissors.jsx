import React, { useState } from "react";

const plays = ["rock", "paper", "scissors"]

function WatchUpload () {
    const [hasWon, setHasWon] = useState() 
    const [robotAnswer, setRobotAnswer] = useState()
    const [humanAnswer, setHumanAnswer] = useState()

    function playGame (e) {
        let chosenThing = e.target.value
        let randomChosen = plays[Math.floor(Math.random() * plays.length)]

        setRobotAnswer(randomChosen)
        setHumanAnswer(chosenThing)

        if (chosenThing === "rock" && randomChosen === "scissors") {
            setHasWon("true")
        } else if (chosenThing === "rock" && randomChosen === "paper") {
            setHasWon("false")
        } else if (chosenThing === "rock" && randomChosen === "paper") {
            setHasWon("draw")
        } else if (chosenThing === "paper" && randomChosen === "rock") {
            setHasWon("true")
        }else if (chosenThing === "paper" && randomChosen === "scissors") {
            setHasWon("false")
        }else if (chosenThing === "paper" && randomChosen === "paper") {
            setHasWon("draw")
        }else if (chosenThing === "scissors" && randomChosen === "paper") {
            setHasWon("true")
        }else if (chosenThing === "scissors" && randomChosen === "rock") {
            setHasWon("false")
        }else if (chosenThing === "scissors" && randomChosen === "scissors") {
            setHasWon("draw")
        }
    }

    return (
        <div className="App App-header">
            <button onClick={playGame} value="rock" >Rock</button>
            <button onClick={playGame} value="paper">Paper</button>
            <button onClick={playGame} value="scissors">Scissors</button>

            {humanAnswer ? <h2>You Chose {humanAnswer}</h2> : null}
            {robotAnswer ? <h2>AI Chose {robotAnswer}</h2> : null}
            {hasWon  === "true" ? <h2>You Win</h2> : null}
            {hasWon  === "false" ? <h2>You Lose</h2> : null}
            {hasWon  === "draw" ? <h2>Draw</h2> : null}
        </div>
    )
}

export default WatchUpload