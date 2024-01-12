let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newContain = document.querySelector("#nw-contain");
let nw = document.querySelector("#nw");
let turn = document.querySelector("#turn");
let scroll = document.querySelector("#scroll");
let scoreX = document.querySelector("#scoreX");
let scoreO = document.querySelector("#scoreO");


let turnO = true;

let winPatterns = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
  ]

 let numTurns = 0;
 let winX = 0;
 let winO = 0;

 const nxtGame = () => {
   trunO = true;
   enableBoxes();
   newContain.classList.add("hide");
   numTurns = 0;
 }
 
 const resetGame = () => {
   trunO = true;
   enableBoxes();
   newContain.classList.add("hide");
   numTurns = 0;
   winX = 0;
   scoreX.innerText = `${winX}`;
   winO = 0;
   scoreO.innerText = `${winO}`;
 }

 boxes.forEach((box)=>{
   box.addEventListener('click', () =>{
     console.log("btn clicked");
     numTurns++;
     if(turnO){
         box.innerHTML = "O"
         turnO = false;
         box.style.color = "blue"
         turn.innerText = "X's Turn";
     }else{
         box.innerHTML = "X"
         turnO = true;
         box.style.color = "#ED7D31"
         turn.innerText = "O's Turn";
     }
     box.disabled = true;
     winPattern();
   })
 })
 
 const disableBoxes = () => {
   for( let box of boxes){
     box.disabled = true;
   }
 }
 const enableBoxes = () => {
   for( let box of boxes){
     box.disabled = false;
     box.innerText = "";
   }
 }
 
 const score = (winner) => {
   console.log(winner);
   if(winner === "X" ){
     winX++;
     scoreX.innerText = `${winX}`;
   }else{
     winO++;
     scoreO.innerText = `${winO}`;
   }
 }

 const showWinner = (winner) =>{
   msg.innerText = `Congratulations, Winner is ${winner}`;
   newContain.classList.remove("hide");
   scroll.classList.remove("hide");
   disableBoxes();
   score(winner);
 }
 
 const draw = () =>{
   msg.innerText = "Opps... It's a Draw";
   newContain.classList.remove("hide");
   scroll.classList.remove("hide");
   disableBoxes();
 }
 
 const winPattern = () =>{
   for(let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText ;
    let pos2val = boxes[pattern[1]].innerText ;
    let pos3val = boxes[pattern[2]].innerText ;
    if(pos1val !== "" && pos2val !== "" && pos3val !== "" ){
      if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner", pos3val)
        showWinner(pos3val);
      }
    }
   }
   if(numTurns == 9){
     console.log("draw");
     draw();
   }
 }
 
 resetBtn.addEventListener("click", resetGame);
 nw.addEventListener("click", nxtGame);
