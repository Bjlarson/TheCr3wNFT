import React from "react";
import Doors from "./Pictures/R.jpg"
import Donation from "./Donation";

function Museum() {
  return (
	<div>
		<section className="Museum">
            <div className = "viewPort">
                <img ClassName="" alt="Twitter Logo" src={Doors} width="400" height="300"/>
            </div>
            <h2 className="MuseumHeader">Museum Comming Soon</h2>
  		</section>
		<Donation/>
	</div>
  );
}

export default Museum;