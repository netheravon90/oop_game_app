/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Initiate Game
const game = new Game();

// Start Button for Game
document.getElementById('btn__reset').addEventListener('click', () => game.startGame())
    