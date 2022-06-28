/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // need to access individual character and space and assign class
    // then create html template
    addPhraseToDisplay(){
        const splitChar = this.phrase.split('');
        let html = '<ul>';
        let charText = '';
        for(let i = 0; i < splitChar.length; i++){
            if(splitChar[i] === ' '){
                charText = `<li class="space">${splitChar[i]}</li>`
            } else {
                charText = `<li class="hide letter ${splitChar[i]}">${splitChar[i]}</li>`
            }
        html += charText;     
        }
        html += '</ul>'
        document.querySelector('#phrase').innerHTML = html;
    }

    // Check if letter selected matches a letter in the phrase.
    checkLetter(){
        
    }
    // Reveals the letter(s) on the board that matches the selection
    showMatchedLetter(){
        
    }
}

