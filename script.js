function ComputerPlay(){
   let number =Math.floor(Math.random()*3);
   let ComputerChoice;
    if(number===0){
         ComputerChoice='rock';
    }
    if(number===1){
     ComputerChoice='paper'; 
    }
    if(number===2){
        ComputerChoice='scissors'
    }
    return ComputerChoice.toLowerCase();
}

function PlayChoice(){
   let choice;
   while(choice!='Rock'|| choice!='Paper'|| choice!='Scissors'){
    choice=prompt("Choose Rock, Paper, or Scissors", "Choose");
    choice=choice.toLowerCase();
    return choice;
    break;
   }
  
}
PlayChoice();
function game(n){
    let computerScore=0;
    let playerScore=0;
   for(let i=0;i<n;i++){
   let ComputerChoice= PlayChoice();
    let playerChoice= ComputerPlay();
   if(ComputerChoice===playerChoice){
    console.log('Draw');
    console.log(`${computerScore}:${playerScore}`);
   }
   if(ComputerChoice > playerChoice){
    console.log('Computer Win');
    console.log(`${computerScore=computerScore + 1}:${playerScore}`);
   }
   if(playerChoice > ComputerChoice){
    console.log('Player win');
    console.log(`${computerScore}:${playerScore= playerScore + 1}`);
   }
}
}
game(5);
