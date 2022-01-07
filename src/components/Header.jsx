import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./Pictures/TheCr3wNFTLogoWhite.svg"

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
                props.location.pathname === "/Info" ? "active" : ""
            }`}>
                <Link to="/Info">INFO</Link>
        </li>
        <li                 
            class={`nav-item  ${
                props.location.pathname === "/Contact" ? "active" : ""
            }`}>
             <Link to="Contact">CONTACT</Link>
        </li>
      </ul>
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