let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = ()=>{
const options = ["rock","paper","scissor"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};
const showwinner = (userwin)=>{
if (userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText= "you win";
    msg.style.backgroundColor = "green";
}else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText= "you lose";
    msg.style.backgroundColor = "red";

}
}
const drawgame = ()=>{
    msg.innerText="Game was draw play again";
    msg.style.backgroundColor = "#081b31";

}
const playgame =(userchoice) =>{
    console.log("userchoice is ",userchoice);
    const compchoice = gencompchoice();
    console.log("compochoice is ",compchoice);
    if (userchoice === compchoice){
  drawgame();
    }else{
        let userwin = true;
        if (userchoice === "rock"){
            userwin = compchoice === "paper"? false : true;
        } else if (userchoice === "paper"){
            userwin = compchoice === "scissor"? false : true;
        }else{
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) =>{
console.log(choice);
choice.addEventListener("click",()=>{
const userchoice = choice.getAttribute("id");
playgame(userchoice);
});
});