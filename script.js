
let wins = 0;
let losses = 0;
let draws = 0;
let count = 0;

const player_status = document.getElementById(`player`);
const computer_status = document.getElementById(`cpu`);
const outcome = document.getElementById(`outcome`);

const win_status = document.getElementById(`win`);
const loss_status = document.getElementById(`lose`);
const draw_status = document.getElementById(`draw`);


function getComputerChoice(){
    const choices = [`ROCK`, `PAPER`, `SCISSORS`];

    let decision = Math.floor(Math.random() * 3);

    return choices[decision]
};

function getPlayerChoice(){
    return prompt(`ROCK, PAPER, OR, SCISSORS?`);
}


function playRound(ps, os){

    player_status.innerHTML = `Player: ${ps}`
    computer_status.innerHTML = `Opponent: ${os}`

    win_status.innerHTML = `Wins: ${wins}`
    loss_status.innerHTML = `Losses: ${losses}`
    draw_status.innerHTML = `Draws: ${draws}`

    if(ps === `ROCK` || ps === `Rock` || ps === `rock`){
        
        /*Test*/ 
        outcome.innerHTML += `Round ${count}: `
        /*Test*/
        
        if(os === `ROCK`){
            draws++
            outcome.innerHTML += `Draw! Both you and the opponent chose ROCK!<br>`
        }
        else if(os === `PAPER`){
            losses++
            outcome.innerHTML += `You lose! ROCK loses to PAPER!<br>`
        }
        else if(os === `SCISSORS`){
            wins++
            outcome.innerHTML += `You win! ROCK beats SCISSORS!<br>`
        }
    }
    else if(ps === `PAPER` || ps === `Paper` || ps === `paper`){

        /*Test*/ 
        outcome.innerHTML += `Round ${count}: `
        /*Test*/
        
        if(os === `PAPER`){ 
            draws++
            outcome.innerHTML += `Draw! Both you and the opponent chose PAPER!<br>`
        }
        else if(os === `SCISSORS`){
            losses++
            outcome.innerHTML += `You lose! PAPER loses to SCISSORS!<br>`
        }
        else if(os === `ROCK`){
            wins++
            outcome.innerHTML += `You win! PAPER beats ROCK!<br>`
        }
    }
    else if(ps === `SCISSORS` || ps === `Scissors` || ps  === `scissors`){

        /*Test*/ 
        outcome.innerHTML += `Round ${count}: `
        /*Test*/

        if(os === `SCISSORS`){
            draws++
            outcome.innerHTML += `Draw! Both you and the opponent chose SCISSORS!<br>`
        }
        else if(os === `ROCK`){
            losses++
            outcome.innerHTML += `You lose! SCISSORS losses to ROCK!<br>`
        }
        else if(os === `PAPER`){
            wins++
            outcome.innerHTML += `You win! SCISSORS beats PAPER!<br>`
            
        }
    }
    else{
        outcome.innerHTML = `Input invalid!`
    }

    
}

function playGame(){
    for(i = 0; i < 5; i++){
        count++
        playRound(getPlayerChoice(), getComputerChoice())
    }
}


playGame()







