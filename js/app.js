/*
 * Create a list that holds all of your cards
 */
const cardsContainer = document.querySelector(".deck");
let openCards = [];
const allCards = [
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-paper-plane-o",
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-cube",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-bomb",
  "fa fa-bomb"
];
//creat all cards
function creatCards() {
  for (let i = 0; i < allCards.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<li class= "${allCards[i]}"></i>`;
    cardsContainer.appendChild(card);
    clicked(card);
  }
}

//set up the event listener for a card. If a card is clicked:
function clicked(card) {
  card.addEventListener("click", function() {
    flipcard(this);
    openedCards(this);
  });
}

function flipcard(card) {
  card.classList.add("open", "show");
}

function openedCards(card) {
  openCards.push(card.innerHTML);
}

function gameInit() {
  shuffle(allCards);
  creatCards();
}
gameInit();
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(allCards) {
  var currentIndex = allCards.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = allCards[currentIndex];
    allCards[currentIndex] = allCards[randomIndex];
    allCards[randomIndex] = temporaryValue;
  }

  return allCards;
}

/*
 * 

 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
