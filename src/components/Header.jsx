import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  return (
  <header> <Link to="/Home">
    <h4 className="logo">CR3W MUSEUM</h4>
    </Link>
    <nav>
      <ul>
        <li                
        class={`nav-item  ${
            props.location.pathname === "/Home" ? "active" : ""
            }`}>
                <Link to="/Home">HOME</Link>
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
    </header>
  );
}

  export default withRouter(Header);