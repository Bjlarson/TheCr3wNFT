import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import './App.css';
import {slide as Menu} from 'react-burger-menu';
import Header from "./components/Header";
import Home from "./components/Home";
import Museum from "./components/Museum";
import MintStation from "./components/MintStation";
import MarketPlace from "./components/MarketPlace";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  const [walletAddress, SetWalletAddress] = useState(null);

  function accountChangedhandler(newAccount) {
    SetWalletAddress(newAccount);
}

  return (
    <div className="container">
      <Router> 
        <Header setaccount = {accountChangedhandler} address = {walletAddress}/>
        <Switch>
          <Route path="/" exact component={() => <Home address={walletAddress}/>} />
          <Route path="/Museum" exact component={() => <Museum />} />
          <Route path="/MintStation" exact component={() => <MintStation />} />
          <Route path="/MarketPlace" exact component={() => <MarketPlace />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/Contact" exact component={() => <Contact />} />
        </Switch>
        <Footer/>
      </Router>
	  </div>
  );
}

  export default App;