import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { ethers } from 'ethers';

function Header(props) {
    const [errorMessage,setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText,setConnButtonText] = useState('Connect Wallet');

    async function ConnectToWalletHandler() {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangedhandler(result[0]);
                setConnButtonText('Wallet Connected');
            })
        }else{
            setErrorMessage('Need to Install Metamask');
        }
    }

    function accountChangedhandler(newAccount) {
        setDefaultAccount(newAccount);
        alert(newAccount);
    }

  return (
  <header> <Link to="/">
    <h4 className="logo">CR3W MUSEUM</h4>
    </Link>
    <nav>
      <ul>
        <li                
        class={`nav-item  ${
            props.location.pathname === "/" ? "active" : ""
            }`}>
                <Link to="/">HOME</Link>
        </li>
		<li                
            class={`nav-item  ${
                props.location.pathname === "/Museum" ? "active" : ""
            }`}>
            <Link to="/Museum" >MUSEUM</Link>
        </li>
        <li                 
            class={`nav-item  ${
                props.location.pathname === "/MarketPlace" ? "active" : ""
            }`}>
             <Link to="/MarketPlace">MARKET PLACE</Link>
        </li>
        <li                 
            class={`nav-item  ${
                props.location.pathname === "/MintStation" ? "active" : ""
            }`}>
             <Link to="MintStation">MINTING STATION</Link>
        </li>
        <li              
            class={`nav-item  ${
                props.location.pathname === "/About" ? "active" : ""
            }`}>
                <Link to="/About">ABOUT</Link>
        </li>
        <li                 
            class={`nav-item  ${
                props.location.pathname === "/Contact" ? "active" : ""
            }`}>
             <Link to="Contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
    <button onClick={() => ConnectToWalletHandler()} className="Walletbutton">{connButtonText}</button>
    </header>
  );
}

  export default withRouter(Header);