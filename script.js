let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
// const rockImg=document.querySelector("#rockImg");
const rockImg=new Image();
    rockImg.src="images/rock.png";
    const paperImg=new Image();
    paperImg.src="images/paper.png";
    const scissorsImg=new Image();
    scissorsImg.src="images/scissors.png";

const draw=()=>{
    msg.innerText="Match draw!, Play again to Win";
    msg.style.backgroundColor="#22223b";
}
const genCompChoice=()=>{
    let choiceArr=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return choiceArr[randIdx];
}

// const ShowCompImg=()=>{
//     let imgPresent=true;
//     const compChoiceImg=genCompChoice();
//     if(compChoiceImg==="rock"){
//         document.getElementById('compImg').appendChild(rockImg);
        
//     }else if(compChoiceImg==="paper"){
//         document.getElementById('compImg').appendChild(paperImg);
    
//     }else if(compChoiceImg==="scissors"){
       
//         document.getElementById('compImg').appendChild(scissorsImg);
        
//     }
// }
// const ShowUserImg=(userChoice)=>{
//     let imgPresent=true;
//     if(userChoice==="rock"){
//         document.getElementById('userImg').appendChild(rockImg);
        
//     }else if(userChoice==="paper"){
//         document.getElementById('userImg').appendChild(paperImg);
    
//     }else if(userChoice==="scissors"){
       
//         document.getElementById('userImg').appendChild(scissorsImg);
        
//     }
// }
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin===true){
        msg.innerText=`You win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;

    }else if(userWin===false){
        msg.innerText=`You lose!  ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const comChoice=genCompChoice();
    if(comChoice===userChoice){
        draw();
    }else{
         let userWin=true;
         if(userChoice==="rock"){
            userWin= comChoice==="paper"? false: true;
         }else if(userChoice==="paper"){
            userWin= comChoice==="scissors"? false: true;
         }else{
            userWin= comChoice==="rock"? false: true;
         }
         showWinner(userWin,userChoice,comChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        ShowCompImg();
        ShowUserImg(userChoice);
    })
})