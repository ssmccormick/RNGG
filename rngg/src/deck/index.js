import React from 'react';



const Deck = ({ deck }) => {

  for(let i = 0; i < deck.length; i++) {
    let card = <div>{deck[i].Value}{deck[i].Suit}</div>
    let icon = '';
    if (deck[i].Suit === 'hearts'){
      icon = '♥';
    } else if (deck[i].Suit === 'spades') {
      icon = '♠';
    } else if (deck[i].Suit === 'diamonds') {
      icon = '♦';
    } else {
      icon = '♣';
    }
    return (
      <div>
        {card}
      </div>
  );
  }
}

const ShuffleDeck = (deck) => {

  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));
    let temp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = temp;
  }

  return (deck)
}


const DeckApp = () => {

  const getDeck = () => {

    let suits =["spades", "diamonds", "clubs", "hearts"];
    let values =["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let deck = new Array();
    for(let i = 0; i < suits.length; i++) {
      for(let x = 0; x < values.length; x++) {
        let card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
      }
    return (deck);
    }
  }

  return (
    <div className="deck-contain">
      <h1>A Shuffled Deck of Cards</h1>
      <Deck deck={ShuffleDeck}/>
      <ShuffleDeck deck={getDeck} />
    </div>
  );
}

export default DeckApp;