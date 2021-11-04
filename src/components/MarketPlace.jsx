import React from "react";
import Search from "./Search";
import NFTInfoBox from "./NFTInfo";

import one from "./Pictures/BannannaPics/1.png";
import two from "./Pictures/BannannaPics/2.png";
import three from "./Pictures/BannannaPics/3.png";
import four from "./Pictures/BannannaPics/4.png";
import five from "./Pictures/BannannaPics/5.png";
import six from "./Pictures/BannannaPics/6.png";
import seven from "./Pictures/BannannaPics/7.png";
import eight from "./Pictures/BannannaPics/8.png";
import nine from "./Pictures/BannannaPics/9.png";
import ten from "./Pictures/BannannaPics/1.png";
import eleven from "./Pictures/BannannaPics/2.png";
import twelve from "./Pictures/BannannaPics/3.png";
import thirteen from "./Pictures/BannannaPics/4.png";
import fourteen from "./Pictures/BannannaPics/14.png";
import fifteen from "./Pictures/BannannaPics/5.png";
import sixteen from "./Pictures/BannannaPics/6.png";
import seventeen from "./Pictures/BannannaPics/7.png";
import eightteen from "./Pictures/BannannaPics/8.png";
import nineteen from "./Pictures/BannannaPics/9.png";
import twenty from "./Pictures/BannannaPics/9.png";

function MarketPlace() {
  return (
	<div>
		<Search SearchTitle="Marketplace" Subtitle="Buy and Sell NFT's" SearchPH="Find an NFT"/>
	    <section className="SaleItems">
			<NFTInfoBox title="Test One" image={one} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Two" image={two} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Three" image={three} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Four" image={four} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Five" image={five} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Six" image={six} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Seven" image={seven} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Eight" image={eight} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Nine" image={nine} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Ten" image={ten} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Eleven" image={eleven} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Twelve" image={twelve} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Thirteen" image={thirteen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Fourteen" image={fourteen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Fifteen" image={fifteen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Sixteen" image={sixteen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Seventeen" image={seventeen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Eighteen" image={eightteen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Nineteen" image={nineteen} about="First test of our upcoming NFT" price=".00 Eth"/>
			<NFTInfoBox title="Test Twenty" image={twenty} about="First test of our upcoming NFT" price=".00 Eth"/>
  		</section>
	</div>
  );
}

export default MarketPlace;