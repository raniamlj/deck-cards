import React, { Component } from 'react';

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
          i = Math.floor(Math.random() * counter-- );
          t = deck[counter];
          deck[counter] = deck[i];
          deck[i] = t;
        }
        return deck;
      }




    render() {
        return (
            
        );
    }
}

export default Container;