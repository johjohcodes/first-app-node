// const { log } = require("console");

// let name = 'maximum';
// let description = 'You are a software engineer at a tech company. Your task is to write a function that takes an array of integers and returns the maximum value in the array. The function should handle edge cases such as an empty array or an array with negative numbers.';
// const hasHobbies = true;

// const allUser = () =>{
//     return {
//         name: name,
//         description: description,
//         hasHobbies: hasHobbies
//     }
// }

// function summary(userName, userDescription){
//     return {
//         summary: 'name is ' + userName + ' and description is ' + userDescription
//     }
    
// }

// log(summary(name, description));

// console.log(allUser());


// const add = (a, b) =>  a + b;
// const addone = a => a + 1;
// const addRandom = () => Math.random() * 10;

// const person = {
//     name: 'maximum',
//     age: 30,
//     greet() {
//         console.log('Hello, my name is ' + this.name);
//     }
// }

// person.greet();

// const hobbies = ['Sports', 'Cooking', 1, true];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }


// console.log(hobbies.map(hobby => 'Hobby:'+ hobby));
// console.log((hobbies));

// hobbies.push('Programming');

// const copiedArray = [...hobbies]
// console.log(copiedArray);

// const toArray = (...arg) => {
//     return arg;
// }

// console.log(toArray(1, 2,3,4));


// const printName = ({name}) => {
//     console.log(name);
    
// }

// printName(person)

// const { name: personName, age } = person;
// console.log(personName, age);

// // async becus it doesnt execute immediatly
// setTimeout(() => {
//     console.log('Timer is done!');
// }, 2000

// )

// const fetchData = callback => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, 1500);
//     });

//     return promise;
// };


// setTimeout(() => {

//     console.log('Timer is done!');
//     fetchData()
//         .then(text => {
//             console.log(text);
//             return fetchData();
//         })
//         .then(text2 => {
//             console.log(text2);
//         });
// }, 2000); 

// const Rock = 'Rock';
// const Paper = 'Paper';
// const Scissors = 'Scissors';

// const getRandomChoice = () => {
//     const choices = [Rock, Paper, Scissors];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }
// const playRound = (playerChoice) => {
//     const computerChoice = getRandomChoice();
//     console.log(`Player chose: ${playerChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     if (playerChoice === computerChoice) {
//         return 'It\'s a tie!';
//     } else if (
//         (playerChoice === Rock && computerChoice === Scissors) ||
//         (playerChoice === Paper && computerChoice === Rock) ||
//         (playerChoice === Scissors && computerChoice === Paper)
//     ) {
//         return 'Player wins!';
//     } else {
//         return 'Computer wins!';
//     }
// };
// const playerChoice = Rock; // You can change this to Paper or Scissors
// console.log(playRound(playerChoice));
// const playGame = (playerChoice) => {
//     const result = playRound(playerChoice);
//     console.log(result);
// };
// playGame(playerChoice);


// function getCardValue(card) {
//     if (['J', 'Q', 'K'].includes(card)) return 10;
//     if (card === 'A') return 11;
//     return card;
// }

// function calculateHandValue(hand) {
//     let value = 0;
//     let aceCount = 0;
//     for (let card of hand) {
//         value += getCardValue(card);
//         if (card === 'A') aceCount++;
//     }
//     // Adjust for aces
//     while (value > 21 && aceCount > 0) {
//         value -= 10;
//         aceCount--;
//     }
//     return value;
// }

// function getRandomCard() {
//     const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
//     return cards[Math.floor(Math.random() * cards.length)];
// }

// function playBlackjack() {
//     let playerHand = [getRandomCard(), getRandomCard()];
//     let dealerHand = [getRandomCard(), getRandomCard()];

//     let playerValue = calculateHandValue(playerHand);
//     let dealerValue = calculateHandValue(dealerHand);

//     // Player turn: simple strategy (hit if under 17)
//     while (playerValue < 17) {
//         playerHand.push(getRandomCard());
//         playerValue = calculateHandValue(playerHand);
//     }

//     // Dealer turn: must hit until 17 or more
//     while (dealerValue < 17) {
//         dealerHand.push(getRandomCard());
//         dealerValue = calculateHandValue(dealerHand);
//     }

//     console.log(`Player hand: ${playerHand.join(', ')} (value: ${playerValue})`);
//     console.log(`Dealer hand: ${dealerHand.join(', ')} (value: ${dealerValue})`);

//     if (playerValue > 21) return 'Player busts! Dealer wins!';
//     if (dealerValue > 21) return 'Dealer busts! Player wins!';
//     if (playerValue > dealerValue) return 'Player wins!';
//     if (dealerValue > playerValue) return 'Dealer wins!';
//     return 'It\'s a tie!';
// }

// // To play a game of blackjack, uncomment the line below:
// // console.log(playBlackjack());

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        let playerHand = [];
        let dealerHand = [];
        let gameOver = false;
        let playerStands = false;

        function getCardValue(card) {
            if (['J', 'Q', 'K'].includes(card)) return 10;
            if (card === 'A') return 11;
            return card;
        }

        function calculateHandValue(hand) {
            let value = 0;
            let aceCount = 0;
            for (let card of hand) {
                value += getCardValue(card);
                if (card === 'A') aceCount++;
            }
            while (value > 21 && aceCount > 0) {
                value -= 10;
                aceCount--;
            }
            return value;
        }

        function getRandomCard() {
            return cards[Math.floor(Math.random() * cards.length)];
        }

        function updateDisplay() {
            document.getElementById('player-cards').textContent = playerHand.join(', ');
            document.getElementById('dealer-cards').textContent = gameOver || playerStands
                ? dealerHand.join(', ')
                : dealerHand[0] + ', ?';
            document.getElementById('player-value').textContent = calculateHandValue(playerHand);
            document.getElementById('dealer-value').textContent = gameOver || playerStands
                ? calculateHandValue(dealerHand)
                : '?';
        }

        function checkGameOver() {
            const playerValue = calculateHandValue(playerHand);
            if (playerValue > 21) {
                document.getElementById('result').textContent = 'Player busts! Dealer wins!';
                gameOver = true;
                updateDisplay();
                return true;
            }
            return false;
        }

        function dealerTurn() {
            let dealerValue = calculateHandValue(dealerHand);
            while (dealerValue < 17) {
                dealerHand.push(getRandomCard());
                dealerValue = calculateHandValue(dealerHand);
            }
        }

        function finishGame() {
            playerStands = true;
            dealerTurn();
            const playerValue = calculateHandValue(playerHand);
            const dealerValue = calculateHandValue(dealerHand);
            let result = '';
            if (dealerValue > 21) {
                result = 'Dealer busts! Player wins!';
            } else if (playerValue > dealerValue) {
                result = 'Player wins!';
            } else if (dealerValue > playerValue) {
                result = 'Dealer wins!';
            } else {
                result = 'It\'s a tie!';
            }
            document.getElementById('result').textContent = result;
            gameOver = true;
            updateDisplay();
        }

        function restartGame() {
            playerHand = [getRandomCard(), getRandomCard()];
            dealerHand = [getRandomCard(), getRandomCard()];
            gameOver = false;
            playerStands = false;
            document.getElementById('result').textContent = '';
            updateDisplay();
        }

        document.getElementById('hit-btn').onclick = function() {
            if (gameOver || playerStands) return;
            playerHand.push(getRandomCard());
            updateDisplay();
            if (checkGameOver()) return;
        };

        document.getElementById('stand-btn').onclick = function() {
            if (gameOver || playerStands) return;
            finishGame();
        };

        document.getElementById('restart-btn').onclick = function() {
            restartGame();
        };

        // Start the game on page load
        restartGame();