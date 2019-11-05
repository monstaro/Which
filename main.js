var cards = document.querySelectorAll('.full-card')
var cardSection = document.querySelector('.card-wrap')
var matchedPic = 0;
var deck = new Deck();


cards.forEach(card => card.addEventListener('click', flipCard));

instantiateCards()

function instantiateCards() {
    var card = [];
    for (var i = 0; i < 10; i++) {
        matchedPic++;
        if (matchedPic === 6) {
            matchedPic = 1;
        }
        card[i] = new Card();
        card[i].id = deck.cards.length;
        card[i].paired = matchedPic - 1;
        deck.cards.push(card[i]);
        console.log(card[i].paired, deck)
        cardSection.innerHTML += `    <div class="full-card" data-id="${card[i].paired}" data-name=${i}>
    <img class="front-face" src="./images/grimes0${matchedPic}.jpg" alt="grimes${i}" id ="${i}" data-id=>
    <img class="back-face" src="./images/cardback.gif" alt="backside">
</div>`
    }
    var cards = document.querySelectorAll('.full-card');
    cards.forEach(card => card.addEventListener('click', flipCard));
}

function flipCard() {
    var parsedId = parseInt(event.target.parentNode.dataset.id)
    for (var i = 0; i < 10; i++) {
        if (parsedId === deck.cards[i].id && deck.selectedCards.length < 2) {
            deck.selectedCards.push(deck.cards[i])
            deck.cards[i].flipCard();
            this.classList.toggle('flip');
        }
        // if (deck.selectedCards.length === 2) {
        //     deck.selectedCards.pop();
        //     deck.selectedCards.pop();
        // }
        // if (deck.selectedCards.length < 2) {
        //     this.classList.toggle('flip');
        //     deck.selectedCards.push(deck.cards[i]);
        // }
    }
}