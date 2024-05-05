const playerText=document.querySelector("#playertext");
const computerText=document.querySelector("#computertext");
const resultText=document.querySelector("#resulttext");
const choiceBtn=document.querySelectorAll(".choiceBtn");

let Player;
let Computer;
let Result;

choiceBtn.forEach(button=>button.addEventListener("click",()=>{
    Player=button.textContent;
    computerTurn();
    playerText.textContent=`Player: ${Player}`;
    computerText.textContent=`Computer: ${Player}`;
    resultText.textContent=checkWinner();

}));

function computerTurn(){
    const randomNum=Math.floor(Math.random()*3)+1;

    switch(randomNum)
    {
case 1: 
Computer='Rock';
break;
case 2:
Computer='Paper';
break;
case 3:
    Computer='Scissor';
    break;
    }
}
function checkWinner(){
    if(Player==Computer){
        return "Draw";
    }
    else if(Computer=="Rock"){
        return (Player=="Paper") ? "You Win": "You Lose";
    }
    else if(Computer=="Paper"){
        return (Player=="Scissor") ? "You Win": "You Lose";
    }
    else if(Computer=="Scissor"){
        return (Player=="Rock") ? "You Win": "You Lose";
    }
    
    
}