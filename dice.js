

// let randomNumber1 = Math.floor((Math.random() * 6) + 1);
// let randomImage1 = "images/dice" + randomNumber1 + ".png";
// let image1 = document.querySelector(".img1").setAttribute("src", randomImage1);
  





// function rollDice() {
  
//     if (randomNumber1 > randomNumber2) {
//       document.querySelector("h1").innerHTML = "Player 1 wins!🤩";
//     } else if (randomNumber2 > randomNumber1) {
//       document.querySelector("h1").innerHTML = "Player 2 wins!😎";
//     } else {
//       document.querySelector("h1").innerHTML = "Draw!";
//     }
//   }
  
  // function restartGame() {
  //   document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
  //   document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
  //   document.querySelector("h1").innerHTML = "Dice Game";
  // }

let imgage1 = document.querySelector('.img1');
let imgage2 = document.querySelector('.img2');
let images = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png',]

  
  
   function nextRound() {
      setInterval(function(){
        let random1 = Math.floor((Math.random() * 6) );
        let random2 = Math.floor((Math.random() * 6) );
        imgage1.src = images[random1];
        imgage2.src = images[random2];
      }, 50);


  }
  
  
  