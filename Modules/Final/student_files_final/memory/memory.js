// Bryce Rankin
// brankin2@my.smccd.edu
// CIS 114
// memory.js
// Final Exam
// 12/12/2020

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this===firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    //second click
    secondCard = this;

    checkForMatch();

}

// Checks to see if both cards match
// If they do, remove the click event
// If they don't, unflip the cards
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

// Removes the event listener for click if the cards don't match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Returns the cards to show the "back" image if they do not match
function unflipCards() {
    lockBoard = true;

    setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

// Resets all variables to their default values so that the board
// does not get stuck between plays
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false,false]
    [firstCard, secondCard] = [null,null]
}

// Shuffles the cards
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

// Attaches the event listener to all of the cards
cards.forEach(card => card.addEventListener('click', flipCard))