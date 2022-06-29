/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Error Message if non-letters are pressed on keyboard.
const header = document.getElementById('banner')
const h3key = document.createElement('h3');
let h3keytext = '<h3>You can only press a-z on the keyboard!</h3>'
h3key.innerHTML = h3keytext;
header.appendChild(h3key);
h3key.style.display = 'none'

// Initiate Game
 let game;

// Start Button for Game
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();    
    game.startGame()

    // Initiate interaction when pressing physical keyboard button.
    document.addEventListener('keyup', (e) => {
        let keyPress = e.key;
        const letters = document.getElementsByClassName('key')
        if (/[a-zA-Z]/.test(keyPress) ) {
            for (let i = 0; i< letters.length; i++){
                if(keyPress === letters[i].textContent){
                    game.handleInteraction(letters[i]);
                 }
            } 
        } else {
            h3key.style.display = '';
            setTimeout( () => h3key.style.display = 'none', 1000)
        }
    })
    
    
    // Initiate interaction when button is clicked using mouse.
    const button = document.getElementById('qwerty')
    button.addEventListener('click', (e) => {
        let keyClick = e.target;
        if (keyClick.className === 'key'){
            
            game.handleInteraction(keyClick);
        } 
})
})









