let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

        updateScore();

        function playGame(choice) {
            const computerMove = pickComputerMove();
            let result = '';
            if (choice === 'Rock') {
                if (computerMove === 'Rock') result = 'Tie';
                else if (computerMove === 'Paper') result = 'You Lose';
                else if (computerMove === 'Scissors') result = 'You Win';
            }

            else if (choice === 'Paper') {
                if (computerMove === 'Rock') result = 'You Win';
                else if (computerMove === 'Paper') result = 'Tie';
                else if (computerMove === 'Scissors') result = 'You Lose';
            }

            else if (choice === 'Scissors') {
                if (computerMove === 'Rock') result = 'You Lose';
                else if (computerMove === 'Paper') result = 'You Win';
                else if (computerMove === 'Scissors') result = 'Tie';
            }

            if (result === 'You Win') score.wins++;
            else if (result === 'You Lose') score.losses++;
            else if (result === 'Tie') score.ties++;

            localStorage.setItem('score', JSON.stringify(score));

            updateScore();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You 
        <img src="images/${choice}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
        }

        function updateScore() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}    Losses:${score.losses}    Ties:${score.ties}`;
        }

        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = '';
            if (randomNumber < (1 / 3)) {
                computerMove = 'Rock';
            }
            else if (randomNumber >= (2 / 3)) {
                computerMove = 'Scissors';
            }
            else {
                computerMove = 'Paper';
            }
            return computerMove;
        }