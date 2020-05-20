var board = [10, 20, 30, 40, 50, 60, 70, 80, 9, 100, 110, 10, 130, 140, 150, 160];

const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');

// const player2_Button = document.getElementById('player-2');
// console.log(player2_Button);

class Player{
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }

    // methods-----------------------
    // 1. roll the dice
    rollDice(){
        let pos = Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    // 2. update the position -- from old to new;
    updatePosition(pos){
        this.position+=pos;
        console.log(this.position);
        this.upadateMoney();
    }
    upadateMoney(){
        if(this.position<board.length){
            this.money-= board[this.position];
        }
        else{
            this.position %= 15;
            this.money -=board[this.position];
        }
        console.log(player1);
        console.log(player2);
    }
}
// define the object

let player1 = new Player("SWATI",0,1000);
let player2 = new Player("SHWETA",0,1000);

// player one roll the dice
player1_Button.addEventListener('click',function(){
    player1.rollDice();
},false);

// player second roll the dice.
player2_Button.addEventListener('click',function(){
    player2.rollDice();
},false);