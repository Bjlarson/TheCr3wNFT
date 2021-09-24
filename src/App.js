import React from 'react';
import Header from './components/Header';
import ButtonHeader from './components/ButtonHeader';
import './App.css';
import reactDom from 'react-dom';

class App extends React.Component {

constructor() {
  super();

  this.state = {
    joke: null,
    isFindingJoke: false,
    isConnected: false
  }
  this.onTellJoke = this.onTellJoke.bind(this);
}

componentDidMount(){
  this.findjoke();
  this.connectToMetaMask();
}

connectToMetaMask(){
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    window.ethereum.request({ method: 'eth_requestAccounts' });
  }else{
    console.log('MetaMask is not installed!');
  }
}

findjoke() {
  this.setState({isFindingJoke: true});

  fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => {
    this.setState({
      joke: json.joke,
      isFindingJoke : false
    });
  })
}

  onTellJoke () {
    this.findjoke();
  };

  render(){
    return (
      <div className="App">
        <Header title = {"Museum"}/>
        <ButtonHeader>
  
        </ButtonHeader>
        <button onClick = {this.onTellJoke} disabled = {this.state.isFindingJoke}>Tell me a Joke</button>
        <p>
          {this.state.isFindingJoke ? 'Loading Joke...' : this.state.joke}
        </p>
      </div>
    );
  }

}

export default App;
