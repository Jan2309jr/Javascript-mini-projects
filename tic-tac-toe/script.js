const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xChance=true;
let winnerX=false;
let winnerO=false;
let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".rbtn-bottom");
let newGame=document.querySelector(".R-btn");
let wText=document.querySelector(".wText");

const disableBoxes=()=>{
    for(let el of boxes){
        el.disabled=true;
    }
};
const enableBoxes=()=>{
    xChance=true;
    wText.classList.add("hide");
    newGame.classList.add("hide");
    for(let el of boxes){
        el.innerText="";
        el.disabled=false;
    }
};
const resetBtn=()=>{
    enableBoxes();
};

const checkWinner=()=>{
    for(let el of win){
        let pos0=boxes[el[0]].innerText;
        let pos1=boxes[el[1]].innerText;
        let pos2=boxes[el[2]].innerText;
        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0==pos1 && pos1==pos2){
                if(pos0=="X"){
                    winnerX=true;
                    wText.innerText="X won!";
                    wText.classList.remove("hide");
                    newGame.classList.remove("hide");
                }else{
                    winnerO=true;
                    wText.innerText="O won!";
                    wText.classList.remove("hide");
                    newGame.classList.remove("hide");
                }
                return true;
            }
        }
    }
    return false;
};

boxes.forEach(el => {
    el.addEventListener("click",()=>{
        if(xChance){
            el.innerText="X";
            xChance=false;
        }else{
            el.innerText="O";
            xChance=true;
        }
        el.disabled=true;
        checkWinner();
        if(checkWinner()){
            disableBoxes();
        }
    });
});

reset.addEventListener("click",resetBtn);
newGame.addEventListener("click",resetBtn);