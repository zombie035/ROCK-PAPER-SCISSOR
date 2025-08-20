let array = ["rock","paper","scissors"];


let comp = [];
let plr = [];

let compscore = 0;
let plrscore = 0;


function player(value){
    plr.push(value);
    console.log("player",plr);
    computer();
    result();
    //console.log(plr);
    //return value
}

function computer(){
    const index = Math.floor(Math.random() * array.length);
    comp.push(array[index]);
    console.log("computer",comp);
}

//let comp = computer();

function result(){
    const lastPlayer = plr[plr.length - 1];
    const lastComp = comp[comp.length - 1];
    const output = document.getElementById("output");

    let message = `You chose ${lastPlayer}, computer chose ${lastComp}. `;

    output.classList.remove("win-animation"); // Reset animation class

    if (lastPlayer === lastComp) {
        message += "It's a Draw!";
    } else if (
        (lastPlayer === "rock" && lastComp === "scissors") ||
        (lastPlayer === "paper" && lastComp === "rock") ||
        (lastPlayer === "scissors" && lastComp === "paper")
    ) {
        message += "You Win! 🎉";
        plrscore += 1;

        // Trigger win animation
        void output.offsetWidth;  // Trick to restart animation
        output.classList.add("win-animation");
    } else {
        message += "Computer Wins! 🤖";
        compscore += 1;
    }

    output.textContent = message;
    document.getElementById("player").textContent = plrscore;
    document.getElementById("computer").textContent = compscore;
}



