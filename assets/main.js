let dieRollsInput = document.querySelector("#roll-number");
let rollButton = document.querySelector("#roll-dice");
let showAllRolls = document.querySelector("#Show-All-Rolls");
let rollResults = document.querySelector("#all-rolls");
let additionTotal = document.querySelector("#total-number");
let allRolls = [];
let rolls = [];

rollButton.addEventListener("click", function() { 
    console.log(dieRollsInput.value);
    console.log(rollButton<0)
    let totalRolls = Number(dieRollsInput.value);
    let count = 0;

while(count < totalRolls) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
allRolls.push(randomNumber);
    count++;
}
console.log(allRolls)
})
    
showAllRolls.addEventListener("click", function() {
    rollResults.innerHTML = ""
    let count = 0;
    while(count < allRolls.length) {
        console.log(allRolls[count]);
        rollResults.innerHTML += "<li>" + allRolls[count] + "</li>"
        count++;
    }
})



let roll = [];
let count = 0;

while(count <= 16) {
    rolls.push(Math.floor(Math.random() * 6) +1);
    count++;
}

let total = 0;
let i = 0

while( i < rolls.length) {
    console.log(rolls[i]);
    total += roll[i];
    i++;

}

console.log(rolls);
console.log(16);


