import logo from './logo.svg';
import './App.css';


let suits =["spades", "diamonds", "clubs", "hearts"];
let values =["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
  let deck = new Array();
  for(let i = 0; i < suits.length; i++) {
    for(let x = 0; x < values.length; x++) {
      let card = {Value: values[x], Suit: suits[i]};
      deck.push(card);
    }
  }
    return deck;
}

function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

function renderDeck(deck) {
    document.getElementById("deck").innerHTML = "";

  for(let i = 0; i < deck.length; i++) {
    let card = document.createElement("div");
    let icon = '';
    if (deck[i].Suit == 'hearts'){
      icon = '?';
    } else if (deck[i].Suit == 'spades') {
      icon = '?';
    } else if (deck[i].Suit == 'diamonds') {
      icon = '?';
    } else if (deck[i].Suit == 'clubs') {
      icon = '?';
    } else {
      icon = '?';
    }
    card.innerHTML = deck[i].Value + '' + icon;
    card.className = 'card';
  document.getElementById("deck").appendChild(card);  
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="deck">{renderDeck()}</div>
    </div>
  );
}

export default App;
