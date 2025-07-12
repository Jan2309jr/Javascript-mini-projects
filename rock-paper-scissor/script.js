const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");
let stat=document.querySelector(".stat-text")
let yourS=document.querySelector(".yourScore");
let compS=document.querySelector(".compScore");
let reset=document.querySelector(".btn")
let yourScore=0;
let compScore=0;
const check=()=>{
    const elements=["r","p","s"];
    choice=Math.floor(Math.random() * elements.length);
    rock.addEventListener("click",()=>{
        if(elements[choice]=="p"){
            stat.innerText="Computer Won!";
            compScore+=1;
        }else if(elements[choice]=="s"){
            stat.innerText="You Won!";
            yourScore+=1;
        }else{
            stat.innerText="Draw";
        }
    });
    paper.addEventListener("click",()=>{
        if(elements[choice]=="s"){
            stat.innerText="Computer Won!";
            compScore+=1;
        }else if(elements[choice]=="r"){
            stat.innerText="You Won!";
            yourScore+=1;
        }else{
            stat.innerText="Draw";
        }
    });
    scissor.addEventListener("click",()=>{
        if(elements[choice]=="p"){
            stat.innerText="Computer Won!";
            compScore+=1;
        }else if(elements[choice]=="r"){
            stat.innerText="You Won!";
            yourScore+=1;
        }else{
            stat.innerText="Draw";
        }
    });
    yourS.innerText=yourScore;
    compS.innerText=compScore;
};
check();

