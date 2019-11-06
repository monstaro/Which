class Deck {
    constructor(matches) {
        this.cards = [];
        this.matchedCards = [];
        this.selectedCards = [];
        this.matches = 0;
    }
    shuffle() {

    }
    checkSelectedCards() {
        if (this.selectedCards[0].paired === this.selectedCards[1].paired) {
            this.matchedCards.unshift(this.selectedCards[0], this.selectedCards[1])
            this.selectedCards = [];
            this.matches++;
        } else {
            this.selectedCards = [];
        }
    }
    moveToMatched() {
        //
    }
}