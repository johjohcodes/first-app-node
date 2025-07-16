


// function runner(){
//   let strings = [1,2,3,4,5,6,2,4,4]
//   for (let i = 0; i < strings.length; i++) {
//     console.log(strings[i]);
        
    
// }
// }

// runner();


const users = () => {
    
}
maxArry = [45,3,5,4,2]
max = [0];

for (let i = 0; i < maxArry.length; i++) {
 maxArry[i];
   if (maxArry[i] > max[0]) {
    max[0] = maxArry[i];
   }
    
  }
  
  console.log(max);


  const ROCK = document.getElementById('rock')
  const SCISSORS = document.getElementById('scissors')
  const PAPER = document.getElementById('paper')
  const resultDiv = document.getElementById('result');

  function playGame(playerMove){
    const computer = computerMove()
    const result = getWinner(playerMove, computer)
    resultDiv.textContent = `Player: ${playerMove} | Computer: ${computer} | ${result}`;
  }

  function getWinner(player, computer){
    if(player === computer) return 'it a tie';
    if (
      (player === 'rock' && computer === "scissors") ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ){
      return 'Player wins'
    }
    return ' computer wins'

  }

  function computerMove(){
      const moves = ['rock','paper', 'scissors' ]
      const random = Math.floor(Math.random()* moves.length)
      return moves[random]
      
      
  }
 



  // there will be a startgame function
  // playerMove function
  // computerMove function
  // create a button link it to player move 


ROCK.onclick = () => playGame('rock');
PAPER.onclick = () => playGame('paper');
SCISSORS.onclick = () => playGame('scissors');
