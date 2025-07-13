const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");
let stat=document.querySelector(".stat-text")
let yourS=document.querySelector(".yourScore");
let compS=document.querySelector(".compScore");
let reset=document.querySelector(".btn")
let yourScore=0;
let compScore=0;
const elements=["r","p","s"];
const getCompSchoice=()=>{
    choice=Math.floor(Math.random() * elements.length);
    return elements[choice];
};
const check=(playersChoice)=>{
    let ch=getCompSchoice();
    if((playersChoice=="r" && ch=="p")||
    (playersChoice=="p" && ch=="s")||
    (playersChoice=="s" && ch=="r")
    ){
        stat.innerText="Computer Won!";
        compScore+=1;
    }else if(playersChoice==ch){
        stat.innerText="Draw!";
    }else{
        stat.innerText="You won!";
        yourScore+=1
    }
    yourS.innerText=yourScore;
    compS.innerText=compScore;
};
rock.addEventListener("click",()=>{check("r")});
paper.addEventListener("click",()=>{check("p")});
scissor.addEventListener("click",()=>{check("s")});
reset.addEventListener("click",()=>{
    yourScore=0;
    compScore=0;
    yourS.innerText=0;
    compS.innerText=0;
    stat.innerText="Start playing!";
});

