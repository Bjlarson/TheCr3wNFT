import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import './App.css';
import {slide as Menu} from 'react-burger-menu';
import Header from "./components/Header";
import Main from "./components/Main";
import Museum from "./components/Museum";
import TicketStand from "./components/TicketStand";
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
          <Route path="/" exact component={() => <Main address={walletAddress}/>} />
          <Route path="/Museum" exact component={() => <Museum />} />
          <Route path="/TicketStand" exact component={() => <TicketStand address={walletAddress} />} />
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