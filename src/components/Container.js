import React, { Component } from 'react';
import Deck from "./Deck"

class Container extends Component {
    state = {
        // originalDeck: state for all cards (52)
        originalDeck: [
            { "suit": "♠︎", "val": "Ac" }, { "suit": "♠︎", "val": "2" }, { "suit": "♠︎", "val": "3" }, { "suit": "♠︎", "val": "4" }, { "suit": "♠︎", "val": "5" }, { "suit": "♠︎", "val": "6" }, { "suit": "♠︎", "val": "7" }, { "suit": "♠︎", "val": "8" }, { "suit": "♠︎", "val": "9" }, { "suit": "♠︎", "val": "10" }, { "suit": "♠︎", "val": "Jk" }, { "suit": "♠︎", "val": "Qn" }, { "suit": "♠︎", "val": "Kg" },
            { "suit": "♥︎", "val": "Ac" }, { "suit": "♥︎", "val": "2" }, { "suit": "♥︎", "val": "3" }, { "suit": "♥︎", "val": "4" }, { "suit": "♥︎", "val": "5" }, { "suit": "♥︎", "val": "6" }, { "suit": "♥︎", "val": "7" }, { "suit": "♥︎", "val": "8" }, { "suit": "♥︎", "val": "9" }, { "suit": "♥︎", "val": "10" }, { "suit": "♥︎", "val": "Jk" }, { "suit": "♥︎", "val": "Qn" }, { "suit": "♥︎", "val": "Kg" },
            { "suit": "♣︎", "val": "Ac" }, { "suit": "♣︎", "val": "2" }, { "suit": "♣︎", "val": "3" }, { "suit": "♣︎", "val": "4" }, { "suit": "♣︎", "val": "5" }, { "suit": "♣︎", "val": "6" }, { "suit": "♣︎", "val": "7" }, { "suit": "♣︎", "val": "8" }, { "suit": "♣︎", "val": "9" }, { "suit": "♣︎", "val": "10" }, { "suit": "♣︎", "val": "Jk" }, { "suit": "♣︎", "val": "Qn" }, { "suit": "♣︎", "val": "Kg" },
            { "suit": "♦︎", "val": "Ac" }, { "suit": "♦︎", "val": "2" }, { "suit": "♦︎", "val": "3" }, { "suit": "♦︎", "val": "4" }, { "suit": "♦︎", "val": "5" }, { "suit": "♦︎", "val": "6" }, { "suit": "♦︎", "val": "7" }, { "suit": "♦︎", "val": "8" }, { "suit": "♦︎", "val": "9" }, { "suit": "♦︎", "val": "10" }, { "suit": "♦︎", "val": "Jk" }, { "suit": "♦︎", "val": "Qn" }, { "suit": "♦︎", "val": "Kg" },
        ],
        // result : state for shuffled desk or the dealed Card 
        result: [],
    };
    //generate a random integer between min and max
    getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));
    
    //generate a random card from original deck
    dealOneCard = () => {
        this.setState({
            result: [this.state.originalDeck[this.getRandomInt(0, (this.state.originalDeck.length - 1))]]
        });
    };

    // shuffle cards 
    shuffleCards = () => {
        const auxResult = [];
        // to create a new array identical in depth to the original,
        const reducingDeck = JSON.parse(JSON.stringify(this.state.originalDeck));

        for (let i = 0; i < this.state.originalDeck.length; i++) {
            //Generate random index from 0 to 51
            const generatedIndex = this.getRandomInt(0, ((this.state.originalDeck.length - 1) - i));
            //slice returns a shallow copy of reducingDeck array into a new array 
            //push adds elements to the end of auxResult array 
            auxResult.push(reducingDeck.slice(generatedIndex, generatedIndex + 1)[0]);
            reducingDeck.splice(generatedIndex, 1);
        }
        this.setState({
            result: auxResult,
        });
    };

    render() {
        return (
            <div>
                <h1> Deck of Cards </h1>
                <button onClick={this.shuffleCards}>Shuffle</button>
                <button onClick={this.dealOneCard}>Deal Card</button>
                <Deck cardDeck={this.state.result}></Deck>
            </div>
        );
    }
}

export default Container;



















