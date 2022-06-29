/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor (){
        this.missed = 0;
        this.phrases = [
            new Phrase ('invest in dreams'), 
            new Phrase ('never give up'), 
            new Phrase ('begin anywhere'),
            new Phrase ('smile and laugh'),
            new Phrase ('sunshine and rainbows')];
        this.activePhrase = null;
    };
    // Generate random phrase index from 0 to 4
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * 5);
        return this.phrases[randomNumber];
    };

    // startscreen to hide, generate random phrase and pass to HTML
    startGame(){
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'none';
        startScreen.classList.remove('lose')
        startScreen.classList.remove('win');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // Upon button press, disable button, and call for checkLetter
    // if checkLetter = false, remove life, add 'wrong' class
    // if checkLetter = true, show matched letter on board and check for win; add 'chosen' class
    handleInteraction(keyClick) {
        keyClick.disabled = true;
        let letter = keyClick.textContent;
        let checkedLetter = this.activePhrase.checkLetter(letter);
        if (checkedLetter){
            keyClick.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            this.checkforWin();
        } else {
            keyClick.classList.add('wrong')
            this.removeLife();
        }
    }
    // Upon pressing of keyboard buttons, match with the button that have the same textcontent with the input.
    keyBoardInteraction(keyPress) {
        const letters = document.getElementsByClassName('key')
        for (let i = 0; i< letters.length; i++){
            if(keyPress === letters[i].textContent){
                // then disable the button
                letters[i].disabled = true;
                  // check the keyboard input if it matches any letter of the phrase.
                let checkedLetter = this.activePhrase.checkLetter(keyPress);
                if (checkedLetter){
                    letters[i].classList.add('chosen');
                    this.activePhrase.showMatchedLetter(keyPress);
                    this.checkforWin();
                } else {
                    letters[i].classList.add('wrong');
                    this.removeLife();
                }
            }
        }
    }

    // Checks if every letter is revealed. If true, go to winning page.
    checkforWin(){
        let shownCharacters = document.getElementsByClassName('show');
        let phraseNoSpace = this.activePhrase.phrase.replace(/ /g,'')
        if (shownCharacters.length === phraseNoSpace.length){
            this.gameOver(true);
        }
    }

    // Removes life from score if they did not match any letter. 
    removeLife(){
        const lives = document.getElementsByClassName('tries');
        if(this.missed < 4){
            let heart = lives[this.missed].firstElementChild;
            heart.src = 'images/lostHeart.png'
            this.missed += 1;
        } else {
            this.gameOver(false)
        }
    }

    // Show Start Screen if they are out of life. 
    gameOver(status){
        const startScreen = document.querySelector('#overlay')
        const gameOverMessage = document.getElementById('game-over-message')
    // Show Winning Screen if they win and show Losing Screen if they lose
        if (status === true) {
            gameOverMessage.textContent = 'You win! Good Job!'
            startScreen.classList.add('win');
            startScreen.style.display = ''
            this.resetGame();
        } else {
            gameOverMessage.textContent = 'You lose! Try Again!'
            startScreen.classList.add('lose');
            startScreen.style.display = ''
            this.resetGame();
        }
    }

    resetGame(){
    // Reset number of tries
    this.missed = 0;
    // Reset number of lives
        let hearts = document.getElementsByClassName('tries');
        for (let i=0; i <hearts.length; i++){
            hearts[i].firstElementChild.src = 'images/liveHeart.png'
        }       
    // Reset Buttons
        let buttons = document.getElementsByClassName('key')
        for (let i=0; i <buttons.length; i++) {
            buttons[i].classList.remove('wrong');
            buttons[i].classList.remove('chosen')
            buttons[i].disabled = false;
        } 
    }
}

