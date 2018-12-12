import React from 'react';
import "../styles/deck.css"
import Card from "./Card"
//component for mapping cards
const Deck = ({ cardDeck }) => {
    return (
        <div className="deck">
            {cardDeck.map(({ suit, val }) => (<Card key={`${suit}+${val}`} suit={suit} value={val} />))
            }
        </div>)

}

export default Deck;
