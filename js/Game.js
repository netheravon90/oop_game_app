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
        this.activePhrase = null
    };
    // Generate random phrase index from 0 to 4
    getRandomPhrase(){
        let randomNumber = Math.floor(Math.random() * 5);
        return this.phrases[randomNumber];
    };

    // startscreen to hide, generate random phrase and pass to HTML
    startGame(){
        const startScreen = document.querySelector('#overlay')
        startScreen.style.display = 'none'
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // Checks if every letter is revealed
    checkforWin(){

    }

    // Removes life from score if they did not match any letter
    removeLife(){

    }

    // Show Start Screen if they are out of life. Game Over.
    gameOver(){
        
    }
}

