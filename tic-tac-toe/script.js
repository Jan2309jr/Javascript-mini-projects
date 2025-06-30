const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xChance=true;
let winnerX=true;
let winnerY=true;
let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".rbtn-bottom");
let newGame=document.querySelector(".R-btn");
let wText=document.querySelector(".wText");
const checkWinner=()=>{
    for(pattern of win){
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1==pos2 && pos2==pos3){
            if(pos1==X){
                winnerX=true;
                return true;
            }else{
                winnerY=true;
                return true;
            }
        }else{
            return false;
        }
    }
}
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
            if(winnerX){
                wText.innerText="X Won!";
            }else{
                wText.innerText="Y Won!";
            }
        }
    });
});