import React, { Component } from 'react';
import "../styles/card.css"
import "./Card"

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

        this.shuffleCards(cardDeck);

        return (
            <div>
                
                <div className="deck">
                    {cardDeck.map(function (card) {
                        return <Card suit={card.suit} value={card.val} />
                    })}
                </div>
            </div>

        );
    }
}

export default Container;

const Card = (props) => {
    if (props.suit == "♣︎" || props.suit == "♠︎") {
      return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
    } else {
      return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
        </div>);
    }
  };
