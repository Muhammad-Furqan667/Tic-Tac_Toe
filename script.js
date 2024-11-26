let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn");
let msg   = document.querySelector(".msg");
let newGame = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-cont");

let turnO = true;  //playerX, player Y;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let emt = [];
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        //Box selection
        if (turnO) {
             box.innerText = "O";
             turnO = false;
         }else{
             box.innerText = "X";
             turnO = true;
         }
         box.disabled = true;
        
        //IF no pattern mataches in
        emt.push(box.innerText === "");
        if(emt.length == '9'){ 
            drop();

        }

        checkWinner();
})
});

const showWin = (winner) => {
    msg.innerText = `congralution, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
            let post1 = boxes[pattern[0]].innerText;
            let post2 = boxes[pattern[1]].innerText;
            let post3 = boxes[pattern[2]].innerText;

            if (post1 != "" && post2 != "" && post3 != ""){
            if (post1 === post2 && post2 == post3)
                {
                showWin(post1);
            }
        }
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = '';
    }
};

const drop = () => {
    msg.innerText = 'Drop game';
    msgCont.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
    emt = [];
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);