'use strict';

const score0El = document.querySelector("#score--0")
// const score0El = document.getElementById("score--1")
const score1El = document.querySelector("#score--1")
// const score1El = document.getElementById("score--1")

let currentScore0 = document.getElementById("current--0")
let currentScore1 = document.getElementById("current--1")

const diceEl = document.querySelector(".dice")
diceEl.classList.add("hidden")

const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
let currentScore = 0
let activePlayer = 0
let scores = [0, 0]
let playing = true

const init = function(){
    currentScore = 0
    activePlayer = 0
    scores = [0, 0]
    playing = true
    score0El.textContent = 0
    score1El.textContent = 0
    currentScore0.textContent = 0
    currentScore1.textContent = 0
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
}
init()

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0?1:0
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

btnRoll.addEventListener("click", ()=>{
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1
        diceEl.classList.remove("hidden")
        diceEl.src = `dice-${dice}.png`
        // console.log(dice)
        if(dice !==1){
            currentScore+=dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
            // currentScore0.textContent = currentScore
        }
        else{
            switchPlayer()
        }
    }
})

btnHold.addEventListener("click", ()=>{
    if(playing){
        // console.log("btnHold")
        scores[activePlayer]+=currentScore
        // console.log(scores[activePlayer])
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer]>=20){
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            playing = false
            diceEl.classList.add("hidden")
        }
        else{
            switchPlayer()
        }
    }
})

btnNew.addEventListener("click",init)