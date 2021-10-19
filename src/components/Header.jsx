import React from "react";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
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
        <li>
            <Link >MUSEUM</Link>
        </li>
        <li                 
            class={`nav-item  ${
                props.location.pathname === "/MarketPlace" ? "active" : ""
            }`}>
             <Link to="/MarketPlace">MARKETPLACE</Link>
        </li>
        <li                 
            class={`nav-item  ${
                props.location.pathname === "/Contact" ? "active" : ""
            }`}>
             <Link to="Contact">CONTACT</Link>
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