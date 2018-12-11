import React, { Component } from 'react';
//ReactDOM is a sub-library of React wich is only aimed at attaching a component to a part of the current DOM and rendering the component. 
//import ReactDOM from 'react-dom'

import Deck from "./Deck"

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mesPoissons2: ["angel", "clown", "mandarin", "surgeon"],
        };
    }



    shuffleCards(deck) {
        console.log('shuffling deck');
        let counter = deck.length;
        let t;
        let i;
        //permutation à 3 aléatoire
        while (counter) {
            i = Math.floor(Math.random() * counter--);
            t = deck[counter];
            deck[counter] = deck[i];
            deck[i] = t;
        }
        return deck;
    }

    dealOnePoisson(mesP2) {
        console.log('deal one poisson');
        let counter = mesP2.length;
        console.log('longeur liste poisson', +counter);
        let unPoisson;

        unPoisson = Math.floor(Math.random() * counter--);
        console.log("lindice du poisson selectionné : " + unPoisson);
        console.log("le poisson selectionné : " + mesP2[unPoisson]);
        //enleves = mesPoissons2.splice(unPoisson, 1);

        //permutWithLast(popped,counter)
        mesP2[inter] = mesP2[unPoisson]
        mesP2[unPoisson] = mesP2[counter]
        mesP2[counter] = mesP2[inter]


        let popped = mesP2.pop();
        console.log("A retiré cet élément : " + popped);
        let inter = popped

        console.log("mesPoissons après : " + mesP2);
        console.log("A retiré cet élément : " + popped);

        //this.setState({ mesPoissons2: mesP2 })
        console.log("le state devient")
        console.log(this.state.mesPoissons2)
        return mesP2;
    }



    render() {
        const mesPoissons = ["angel", "clown", "mandarin", "surgeon"];
        const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
        const values = ["Ac", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jk", "Qn", "Kg"];
        let cardDeck = [];
        let card = [];
        let mesP2 = this.state.mesPoissons2

        for (let x = 0; x < suits.length; x++) {
            for (let y = 0; y < values.length; y++) {
                card = { suit: suits[x], val: values[y] };
                cardDeck.push(card);
            }
        };

        return (
            <div>
                <button onClick={this.shuffleCards.bind(this, cardDeck)}>Shuffle</button>
                <button onClick={this.dealOnePoisson(mesP2)} >Deal Card </button>
                <Deck cardDeck={this.shuffleCards(cardDeck)}></Deck>
            </div>
        );
    }
}

export default Container;


