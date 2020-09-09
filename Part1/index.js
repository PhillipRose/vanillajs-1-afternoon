
// my original idea for determining who won was this table below because I forgot about the ${variable} method of inserting the winner so I thought I had to write everything out twice.


// master X
// score[0], score[1], score[2] === 'X','X', 'X'
// score[0], score[3], score[6] === 'X','X', 'X'
// score[0], score[4], score[8] === 'X','X', 'X'
// score[1], score[4], score[7] === 'X','X', 'X'
// score[2], score[5], score[8] === 'X','X', 'X'
// score[2], score[4], score[6] === 'X','X', 'X'
// score[3], score[4], score[5] === 'X','X', 'X'
// score[6], score[7], score[8] === 'X','X', 'X' 
// // master O
// score[0], score[1], score[2] === 'O','O', 'O'
// score[0], score[3], score[6] === 'O','O', 'O'
// score[0], score[4], score[8] === 'O','O', 'O'
// score[1], score[4], score[7] === 'O','O', 'O'
// score[2], score[5], score[8] === 'O','O', 'O'
// score[2], score[4], score[6] === 'O','O', 'O'
// score[3], score[4], score[5] === 'O','O', 'O'
// score[6], score[7], score[8] === 'O','O', 'O'

// Was going to do something along the lines of
// if (score[0], score[1], score[2] === 'X','X','X') {
//     alert.window('Player X wins!') }




let score = [];


function play(clickId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickId)
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        score[clickId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        score[clickId] = 'O';
    }
    

let topLeft = score[0]
let topCenter = score[1]
let topRight = score[2]
let middleLeft = score[3]
let middleCenter = score[4]
let middleRight = score[5]
let bottomLeft = score[6]
let bottomCenter = score[7]
let bottomRight = score[8]

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`Player ${topLeft} is the champion`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`Player ${middleLeft} crushed it!`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`Player ${bottomLeft} wins, domination`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`Player ${topLeft} scrapes over the finish line`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`Player ${topCenter} doesn't lose, finally!`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`Player ${topRight} has bragging rights, for now`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`Player ${topLeft}'s opponent will want a rematch `);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`Player ${bottomLeft} wants to find all these messages and also won this round!`);
    return;
  }

  
  let whoWon = true;
  for (let i = 0; i <= 8; i++) {
    if (score[i] === undefined) {
      whoWon = false;
    }
  }
  if (whoWon === true) {
    alert(`Motivation is needed, put money on the next game.`);
  }
}
