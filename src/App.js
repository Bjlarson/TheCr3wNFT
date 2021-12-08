import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ethers } from "ethers";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Museum from "./components/Museum";
import MintStation from "./components/MintStation";
import MarketPlace from "./components/MarketPlace";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GAabi from "./components/ABI/MuseumGATicket.json";

const ABI = GAabi.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);

async function GetTokenId() {
  const contractAddress = GAabi.networks['3'].address
  //const contractAddress = '0x1d1583B1c269140575Cc0e8a0Ea125C421bbE6E8';

  //const ABI = ['function GetCurrentTokenId() external view returns(uint)'];

  //const provider = new ethers.providers.getDefaultProvider({'ropsten'});
  //const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
  //const signer = provider.getSigner();
  const museumTicket = new ethers.Contract(contractAddress,ABI,provider);
  const tokenID = await museumTicket.GetCurrentTokenId();
  console.log(tokenID.toString())
}

async function GetRoyaltyFee() {
  const contractAddress = GAabi.networks['3'].address
  //const contractAddress = '0x1d1583B1c269140575Cc0e8a0Ea125C421bbE6E8';

  const ABI = ['function GetMintFee() external view returns(uint)'];

  //const provider = new ethers.providers.Web3Provider(window.ethereum);
  //const provider = new ethers.providers.getDefaultProvider({'ropsten'});
  const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
  //const signer = provider.getSigner();
  const museumTicket = new ethers.Contract(contractAddress,ABI,provider);
  const feeAmount = await museumTicket.GetMintFee();
  console.log(feeAmount.toString())
}

async function GetArtist() {
  const contractAddress = GAabi.networks['3'].address
  //const contractAddress = '0x1d1583B1c269140575Cc0e8a0Ea125C421bbE6E8';

  const ABI = ['function GetArtist() external view returns(address)'];

  const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
  //const provider = new ethers.providers.getDefaultProvider({'ropsten'});
  //const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
  const signer = metamaskProvider.getSigner();
  const museumTicket = new ethers.Contract(contractAddress,ABI,signer);
  const artist = await museumTicket.GetArtist();
  console.log(artist)
}

async function SetMintFee() {
  const contractAddress = GAabi.networks['3'].address
  //const contractAddress = '0x1d1583B1c269140575Cc0e8a0Ea125C421bbE6E8';

  const ABI = ['function SetMintFee(uint256 _feeAmount) external'];

  const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
  //const provider = new ethers.providers.getDefaultProvider({'ropsten'});
  //const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
  const signer = metamaskProvider.getSigner();
  const museumTicket = new ethers.Contract(contractAddress,ABI,signer);
  museumTicket.SetMintFee(100000000000000);
}

function App(){
  return (
    <div className="container">
      <Router> 
        <Header/>
        <button onClick = {() => GetTokenId()}>
        </button>
        <button onClick = {() => SetMintFee()}>
        </button>
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