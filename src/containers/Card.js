import React, { Component } from 'react';
import PropTypes from 'prop-types'
import "../styles/card.css";


const Card = ({suit,value }) => {
    if (suit == "♣︎" || suit == "♠︎") {
      return (<div className="card card-black"><div className="card-tl"><div className="card-value">{value}</div><div className="card-suit">{suit}</div></div><div className="card-br"><div className="card-value">{value}</div><div className="card-suit">{suit}</div></div></div>);
    } else {
      return (<div className="card card-red"><div className="card-tl"><div className="card-value">{value}</div><div className="card-suit">{suit}</div></div>
        <div className="card-br"><div className="card-value">{value}</div><div className="card-suit">{suit}</div></div>
        </div>);
    }
  };
  Card.propTypes = {
    suit: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }
export default Card;