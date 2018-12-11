import React, { Component } from 'react';
//ReactDOM is a sub-library of React wich is only aimed at attaching a component to a part of the current DOM and rendering the component. 
//import ReactDOM from 'react-dom'

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
        //permutation à 3 aléatoire
        while (counter) {
            i = Math.floor(Math.random() * counter--);
            t = deck[counter];
            deck[counter] = deck[i];
            deck[i] = t;
        }
        return deck;
    }

    /*dealOneCard(deck) 
    {
        console.log('deal one card');
        let counter = deck.length;
        let card;

        while (counter) {
            card = Math.floor(Math.random() * counter--);
        } 
        return card;
    }*/

    dealOnePoisson(mesPoissons) {
        console.log('deal one poisson');
        let counter = mesPoissons.length;
        let unPoisson;

        while (counter) {
            unPoisson = Math.floor(Math.random() * counter--);
        }
        return unPoisson;
    }

    retirerPoisson(mesPoissons, unPoisson) {
        let popped = mesPoissons.pop();
        console.log("mesPoissons après : " + mesPoissons);
        console.log("A retiré cet élément : " + popped);
        permutWithLast(popped,counter)
        return mesPoissons;
    }

    permutWithLast(i,j)
    {
        let inter=i
        mesPoissons[inter]=mesPoissons[i]
        mesPoissons[i]=mesPoissons[j]
        mesPoissons[j]=mesPoissons[inter]
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
        /*function handleClick(e) {
            //e.preventDefault();
            console.log('The link was clicked.');
            }*/
        const mesPoissons = ["angel", "clown", "mandarin", "surgeon"];


        return (
            <div>
                <button onClick={this.shuffleCards.bind(this)}>Shuffle</button>
                <button >Deal Card </button>

                <Deck cardDeck={this.shuffleCards(cardDeck)}></Deck>

            </div>

        );
    }
}

export default Container;


