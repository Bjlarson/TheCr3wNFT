import React from "react";
import Donation from "./Donation";
import pic from "./Pictures/default-user-icon-8-300x300.jpg";

function About() {
  return (
	<div className="aboutSection">
    <div className = "Creators">
      <div className="card">
        <img className = "standin" src={pic} alt="picture of Blake" height="200" width="200"/>
        <h2>Blake Larson</h2>
        <h4>Developer</h4>
        <p>Works hard to bring the front end and back end of NFT's and website design to life!</p>
      </div>
      <div className="card">
        <img className = "standin" src={pic} alt="picture of Carter" height="200" width="200"/>
        <h2>Carter Filion</h2>
        <h4>Advertising Expert</h4>
        <p>Dedicated to pushing himself and others to be the best they can be finacialy and personaly. Knows all the latest on the crypto ecosystem.</p>
      </div>
    </div>
		<Donation/>
	</div>
  );
}

export default About;