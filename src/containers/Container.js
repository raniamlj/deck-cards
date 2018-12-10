import React, { Component } from 'react';

class Container extends Component {

    state = {
        tab: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    };

    shuffleCards(tab) {
        console.log('shuffling ');

        return(tab);
    }


    render() {
      const tab = this.state.tab

        return (
            <div>
                <button onClick={this.shuffleCards(tab)}>Shuffle</button>
                <lu>
                    {this.state.tab.map(elem => <tr>{elem}</tr>)}
                </lu>
            </div>

        );
    }
}

export default Container;
