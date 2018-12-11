import React, { Component } from 'react';
import Deck from "./Deck"

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    shuffleCards(deck) {
        console.log('shuffling deck');
        let counter = deck.length;
        let t;
        let i;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            t = deck[counter];
            deck[counter] = deck[i];
            deck[i] = t;
        }
        return deck;
    }

    render() {
        const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
        const values = ["Ac", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jk", "Qn", "Kg"];
        let cardDeck = [];
        let card = [];

        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
                card = { suit: suits[x], val: values[y] };
                cardDeck.push(card);
            }
        };
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }
        

        return (
            <div>
                <button >shuffle</button>
                <button >TIRER </button>
                <Deck cardDeck={this.shuffleCards(cardDeck)}></Deck>

            </div>

        );
    }
}

export default Container;


