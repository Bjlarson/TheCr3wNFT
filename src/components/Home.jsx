import React from "react";
import Donation from "./Donation";

function Home() {
  return (
	<div>
		<section className="Featured" id="Featured">
    		<h2 className="hero_header">FEATURED <span className="light">NFT'S</span></h2>
    		<p className="tagline">
      			Check out these NFT's to add to your collection
    		</p>
    		<div className = "FeaturedImages">
      			<img src="https://purepng.com/public/uploads/large/purepng.com-donutdonutdoughnutsweetsnack-1411527416743kegtg.png" alt="" width="400" height="200" className="Images"/>
		 		<img src="https://purepng.com/public/uploads/large/purepng.com-donutdonutdoughnutsweetsnack-1411527416743kegtg.png" alt="" width="400" height="200" className="Images"/>
		 		<img src="https://pngimg.com/uploads/alien/alien_PNG81.png" alt="" width="400" height="200" className="Images"/>
		 		<img src="https://i.pinimg.com/originals/fd/94/e1/fd94e14c173efe3f18db004060474edd.png" alt="" width="400" height="200" className="Images"/>
		 		<img src="https://cdn-img-0.wanelo.com/p/422/857/5f1/5d1a094499f43283956ccc1/x354-q80.jpg" alt="" width="400" height="200" className="Images"/>
		 		<img src="https://i.pinimg.com/originals/49/cd/36/49cd361a200b0a6aa65d564cbe99fced.jpg" alt="" width="400" height="200" className="Images"/>
		 		<img src="https://pngimg.com/uploads/smoke/smoke_PNG55142.png" alt="" width="400" height="200" class="Images"/>
	  		</div>
  		</section>
		<Donation/>
	</div>
  );
}

export default Home;