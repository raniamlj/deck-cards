import React from 'react';
import "../styles/deck.css"
import Card from "./Card"

const Deck = ({ cardDeck }) => {
    return(
    <div className="deck">
        {cardDeck.map(function (card) {
            return <Card suit={card.suit} value={card.val} />
        })}
    </div>)

}





export default Deck;
