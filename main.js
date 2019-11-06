var cards = document.querySelectorAll('.full-card')
var cardSection = document.querySelector('.card-wrap')
var matchedPic = 0;
var deck = new Deck();
var matches = document.querySelector('.matches')


cards.forEach(card => card.addEventListener('click', flipCard));

instantiateCards()

function instantiateCards() {
    card = [];
    for (var i = 0; i < 10; i++) {
        matchedPic++;
        if (matchedPic === 6) {
            matchedPic = 1;
        }
        card[i] = new Card();
        card[i].id = i;
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
    //when a user clicks two unmatching cards
    //we loop through every element of deck.selectedCards
    //if the id of the index we loop through matches selected cards
    //
    //then we flip it back over
    var parsedId = parseInt(event.target.parentNode.dataset.id)
    for (var i = 0; i < 10; i++) {
        if (parsedId === deck.cards[i].id && deck.selectedCards.length < 2) {
            deck.selectedCards.push(deck.cards[i]);
            this.classList.toggle('flip');
        }
    }
    if (deck.selectedCards.length === 2) {
        deck.checkSelectedCards();
        setTimeout(function() {
            unflipCard()
        }, 500)
        hideCards();
    }
}

function unflipCard() {
    var cardKids = cardSection.children;
    for (var i = 0; i < cardKids.length; i++) {
        if (cardKids[i].classList.contains('flip')) {
            cardKids[i].classList.remove('flip')
        }
    }
}

function hideCards() {
    matches.innerHTML = `<div class="matches">Matches This Round: ${deck.matches}</div>`;
    var cardKids = cardSection.children;
    for (var i = 0; i < cardKids.length; i++) {
        var parsedDataId = parseInt(cardKids[i].dataset.id)
        if (deck.matchedCards[0].id === parsedDataId || deck.matchedCards[1].id === parsedDataId) {
            cardKids[i].classList.add('hide')
        }
    }
    displayCongrats();
}

function displayCongrats() {
    if (deck.matches === 5) {
        cardSection.innerHTML = `<div class="congrats">Congrats! You Won the Game!</div>`
    }
}