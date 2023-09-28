let roundNumber = 1;

function rollDice() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelector(".img1").setAttribute("src", randomImage1);
  
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelector(".img2").setAttribute("src", randomImage2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
    displayRoundResult(randomNumber1, randomNumber2);
  }
  
  function displayRoundResult(player1Value, player2Value) {
    const recordTable = document.getElementById('roundRecordsTable').getElementsByTagName('tbody')[0];
  
    const newRow = recordTable.insertRow();
    const cellRound = newRow.insertCell(0);
    const cellPlayer1 = newRow.insertCell(1);
    const cellPlayer2 = newRow.insertCell(2);
    const cellResult = newRow.insertCell(3);
 
    cellRound.textContent = roundNumber;
    cellPlayer1.textContent = player1Value;
    cellPlayer2.textContent = player2Value;
  
    // Determine the round result
    if (player1Value > player2Value) {
      cellResult.textContent = 'Player 1 wins!';
    } else if (player2Value > player1Value) {
      cellResult.textContent = 'Player 2 wins!';
    } else {
      cellResult.textContent = 'Draw';
    }
  
    roundNumber++; // Increment the round number for the next round
  }



  function restartGame() {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    document.querySelector("h1").innerHTML = "Dice Game";
  
    // Clear the round records
    const recordTable = document.getElementById('roundRecordsTable').getElementsByTagName('tbody')[0];
    recordTable.innerHTML = '';
  
    // Reset the round number
    roundNumber = 1;
  }
  
  
  function nextRound() {
    // Disable the "Play" button to prevent multiple clicks during the delay
    document.querySelector('button[onclick="nextRound()"]').disabled = true;
  
    const totalFrames = 40;  // Total frames for the animation
    let currentFrame = 0;     // Current frame counter
  
    const interval = setInterval(function() {
      if (currentFrame >= totalFrames) {
        clearInterval(interval);
        rollDice();
        // Enable the "Play" button after the delay
        document.querySelector('button[onclick="nextRound()"]').disabled = false;
      } else {
        // Generate a random dice face for each frame
        const randomDiceFace1 = Math.floor(Math.random() * 6) + 1;
        const randomDiceFace2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").src = "./images/dice" + randomDiceFace1 + ".png";
        document.querySelector(".img2").src = "./images/dice" + randomDiceFace2 + ".png";
        currentFrame++;
      }
    }, 50);  // Change image every 50 milliseconds (for 60 iterations in 3 seconds)
  }
  
  
  