import React, { Component } from 'react';
import Deck from "./Deck"

class Container extends Component {
  state = {
    originalDeck: [
      {"suit":"♠︎","val":"Ac"},{"suit":"♠︎","val":"2"},{"suit":"♠︎","val":"3"},{"suit":"♠︎","val":"4"},{"suit":"♠︎","val":"5"},{"suit":"♠︎","val":"6"},{"suit":"♠︎","val":"7"},{"suit":"♠︎","val":"8"},{"suit":"♠︎","val":"9"},{"suit":"♠︎","val":"10"},{"suit":"♠︎","val":"Jk"},{"suit":"♠︎","val":"Qn"},{"suit":"♠︎","val":"Kg"},
      {"suit":"♥︎","val":"Ac"},{"suit":"♥︎","val":"2"},{"suit":"♥︎","val":"3"},{"suit":"♥︎","val":"4"},{"suit":"♥︎","val":"5"},{"suit":"♥︎","val":"6"},{"suit":"♥︎","val":"7"},{"suit":"♥︎","val":"8"},{"suit":"♥︎","val":"9"},{"suit":"♥︎","val":"10"},{"suit":"♥︎","val":"Jk"},{"suit":"♥︎","val":"Qn"},{"suit":"♥︎","val":"Kg"},
      {"suit":"♣︎","val":"Ac"},{"suit":"♣︎","val":"2"},{"suit":"♣︎","val":"3"},{"suit":"♣︎","val":"4"},{"suit":"♣︎","val":"5"},{"suit":"♣︎","val":"6"},{"suit":"♣︎","val":"7"},{"suit":"♣︎","val":"8"},{"suit":"♣︎","val":"9"},{"suit":"♣︎","val":"10"},{"suit":"♣︎","val":"Jk"},{"suit":"♣︎","val":"Qn"},{"suit":"♣︎","val":"Kg"},
      {"suit":"♦︎","val":"Ac"},{"suit":"♦︎","val":"2"},{"suit":"♦︎","val":"3"},{"suit":"♦︎","val":"4"},{"suit":"♦︎","val":"5"},{"suit":"♦︎","val":"6"},{"suit":"♦︎","val":"7"},{"suit":"♦︎","val":"8"},{"suit":"♦︎","val":"9"},{"suit":"♦︎","val":"10"},{"suit":"♦︎","val":"Jk"},{"suit":"♦︎","val":"Qn"},{"suit":"♦︎","val":"Kg"},
    ],
    result: [],
  };

  getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

  dealOneCard = () => {
    this.setState({
      result: [this.state.originalDeck[this.getRandomInt(0, (this.state.originalDeck.length - 1))]]
    });
  };

  shuffleCards = () => {
    const auxResult = [];
    const reducingDeck = JSON.parse(JSON.stringify(this.state.originalDeck));

    for(let i = 0; i < this.state.originalDeck.length; i++) {
      const generatedIndex = this.getRandomInt(0, ((this.state.originalDeck.length - 1) - i));
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
        <button onClick={this.shuffleCards}>Shuffle</button>
        <button onClick={this.dealOneCard}>Deal Card</button>
        <Deck cardDeck={this.state.result}></Deck>
      </div>
    );
  }
}

export default Container;



















