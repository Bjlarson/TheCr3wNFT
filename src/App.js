import React from 'react';
import Header from './components/Header';
import ButtonHeader from './components/ButtonHeader';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header title = {"Museum"}/>
      <ButtonHeader>

      </ButtonHeader>
      <p>
          <button>Hello</button>
        </p>
        <p>
          <button>GoodBye</button>
        </p>
    </div>
  );
}

export default App;
