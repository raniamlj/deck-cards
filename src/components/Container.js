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
   /* permutWithLast(i,j)
    {
        const mesPoissons = ["angel", "clown", "mandarin", "surgeon"];
        let inter=i
        mesPoissons[inter]=mesPoissons[i]
        mesPoissons[i]=mesPoissons[j]
        mesPoissons[j]=mesPoissons[inter]
    }*/

    /*retirerPoisson(mesPoissons, unPoisson) 
    {
        let counter = mesPoissons.length;
        let popped = mesPoissons.pop();
        console.log("mesPoissons après : " + mesPoissons);
        console.log("A retiré cet élément : " + popped);
        //permutWithLast(popped,counter)
        let inter=popped
        mesPoissons[inter]=mesPoissons[popped]
        mesPoissons[popped]=mesPoissons[counter]
        mesPoissons[counter]=mesPoissons[inter]

        return mesPoissons;
    }*/

    dealOnePoisson(mesPoissons) {
        console.log('deal one poisson');
        let counter = mesPoissons.length;
        console.log('longeur liste poisson', +counter);
        let unPoisson;

        unPoisson = Math.floor(Math.random() * counter--);
        console.log("lindice du poisson selectionné : " + unPoisson);
        console.log("le poisson selectionné : " + mesPoissons[unPoisson]);
        //permutWithLast(popped,counter)
        mesPoissons[inter]=mesPoissons[unPoisson]
        mesPoissons[unPoisson]=mesPoissons[counter]
        mesPoissons[counter]=mesPoissons[inter]

         
         let popped = mesPoissons.pop();
         console.log("A retiré cet élément : " + popped);
         let inter=popped

 
        console.log("mesPoissons après : " + mesPoissons);
        console.log("A retiré cet élément : " + popped);
         
       // mesPoissons = retirerPoisson(mesPoissons, unPoisson)
       
        
       
        return mesPoissons;
    }
  


    render() {
        const mesPoissons = ["angel", "clown", "mandarin", "surgeon"];
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
        


        return (
            <div>
                <button onClick={this.shuffleCards.bind(this)}>Shuffle</button> 

                <button onClick={this.dealOnePoisson(mesPoissons)} >Deal Card </button>

                <Deck cardDeck={this.shuffleCards(cardDeck)}></Deck>

            </div>

        );
    }
}

export default Container;


