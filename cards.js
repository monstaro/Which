class Card {
    constructor() {
        this.id = 0;
        this.paired = 0;
        this.matchInfo = [];
        this.matched = false;
        this.flipped = false;
    }
    matchCards() {
        this.matched = !this.matched
    }
    flipCard() {
        this.flipped = !this.flipped
    }
}