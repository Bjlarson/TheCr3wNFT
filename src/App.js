import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Museum from "./components/Museum";
import MintStation from "./components/MintStation";
import MarketPlace from "./components/MarketPlace";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return (
    <div className="container">
      <Router> 
        <Header/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
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