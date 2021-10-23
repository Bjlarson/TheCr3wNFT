import React from "react";
import Donation from "./Donation";

function About() {
  return (
	<div>
		<section className="Museum">
            <div className = "viewPort">
                <h2 className ="view">Comming Soon</h2>
            </div>
            <h2 className="MuseumHeader">Museum Comming Soon</h2>
            <h2 className="MuseumAbout">A place to display your NFT collection and share with it with others.</h2>
  		</section>
		<Donation/>
	</div>
  );
}

export default About;