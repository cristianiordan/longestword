'use strict'

const btnCheck = document.querySelector('.btn-check');
let longestWord = '';

const textCheck = function () {
    let textInput = document.querySelector('.input').value;
    if(textInput === ''){
        document.querySelector('.alert').textContent =`Type a text`;
    }else {
        let words = textInput.split(' ');
        let longestWordLength = 0;
        for(let i = 0; i < (words.length); i++){
            if(words[i].length > longestWordLength ){
                longestWordLength = words[i].length;
                longestWord = words[i];
            }
        }
        document.querySelector('.alert').textContent =`The longest word is: ${longestWord}`;
    }
}
btnCheck.onclick = textCheck;
