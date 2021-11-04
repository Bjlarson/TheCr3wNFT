import React from "react";
import Donation from "./Donation";
import NFTInfoBox from "./NFTInfo";

import one from "./Pictures/BannannaPics/1.png";
import two from "./Pictures/BannannaPics/2.png";
import three from "./Pictures/BannannaPics/3.png";
import four from "./Pictures/BannannaPics/4.png";
import five from "./Pictures/BannannaPics/5.png";
import six from "./Pictures/BannannaPics/6.png";
import seven from "./Pictures/BannannaPics/7.png";
import eight from "./Pictures/BannannaPics/8.png";

function Home() {
  return (
	<div>
		<section className="Featured" id="Featured">
    		<h2 className="hero_header">FEATURED <span className="light">NFT'S</span></h2>
    		<p className="tagline">
      			Check out these NFT's to add to your collection
    		</p>
    		<div className = "FeaturedImages">
				<NFTInfoBox title="Test One" image={one} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Two" image={two} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Three" image={three} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Four" image={four} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Five" image={five} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Six" image={six} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Seven" image={seven} about="First test of our upcoming NFT" price=".00 Eth"/>
				<NFTInfoBox title="Test Eight" image={eight} about="First test of our upcoming NFT" price=".00 Eth"/>
	  		</div>
  		</section>
		<Donation/>
	</div>
  );
}

export default Home;