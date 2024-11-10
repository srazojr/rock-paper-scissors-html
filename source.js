const computerChoiceSpan = document.querySelector("#computer-choice")
const userChoiceSpan = document.querySelector("#user-choice")
const resultSpan = document.querySelector("#result")
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

const click = (e) => {
    console.log(`You clicked ${e.target.id}`)
    userChoiceSpan.innerHTML = e.target.id
    computerChoice = Math.floor(Math.random() * 3)
    let result = ""
    switch (computerChoice) {
        case 0:
            computerChoiceSpan.innerHTML = "Rock"
            if (e.target.id == "rock") {
                result = "Tie"
            }
            else if (e.target.id == "paper") {
                result = "You Win!"
            }
            else {
                result = "You Lose!"
            }
            break;
        case 1:
            computerChoiceSpan.innerHTML = "Paper"
            if (e.target.id == "rock") {
                result = "You Lose!"
            }
            else if (e.target.id == "paper") {
                result = "Tie"
            }
            else {
                result = "You Win!"
            }
            break;
        case 2:
            computerChoiceSpan.innerHTML = "Scissors"
            if (e.target.id == "rock") {
                result = "You Win!"
            }
            else if (e.target.id == "paper") {
                result = "You Lose!"
            }
            else {
                result = "Tie"
            }
            break;
    }
    resultSpan.innerHTML = result
}
document.querySelectorAll("button").forEach(choice =>
    choice.addEventListener('click', click)
)
