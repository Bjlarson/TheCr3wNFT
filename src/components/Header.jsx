import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./Pictures/TheCr3wNFTLogoWhite.svg"
import "./CSS/Header.css"

function Header(props) {
    const [errorMessage,setErrorMessage] = useState(null);
    const [connButtonText,setConnButtonText] = useState('Connect Wallet');

    function ConnectToWalletHandler() {
        if(window.ethereum){
            setErrorMessage(null);
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                props.setaccount(result[0]);
                setConnButtonText('CONNECTED');
            })
        }else{
            setErrorMessage('Need to Install Metamask');
        }
    }

  return (
  <header> 
    <Link to="/">
        <img className= "logoimg" alt="logo" src={logo} width="90" height="90"/>
    </Link>
    <nav>
        <Link to="/" className="navitem">HOME</Link>
        <Link to="/Museum" >MUSEUM</Link>
        <Link to="/Info">INFO</Link>
        <Link to="Contact">CONTACT</Link>
    </nav>
    <div className="WalletConnectDiv">
        <p onClick={() => ConnectToWalletHandler()} className="Walletbutton">{connButtonText}</p>
        {
            errorMessage != null?<h1 className="WalletError">{errorMessage}</h1>:null
        }
    </div>
    </header>
  );
}

  export default withRouter(Header);