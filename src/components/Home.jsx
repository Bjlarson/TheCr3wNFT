import React from "react";
import Donation from "./Donation";
import NFTInfoBox from "./NFTInfo";
import { ethers } from 'ethers';

function Home() {
  return (
	<div>
		<section className="Featured" id="Featured">
    		<h2 className="hero_header">FEATURED <span className="light">NFT'S</span></h2>
    		<p className="tagline">
      			Check out these NFT's to add to your collection
    		</p>
    		<div className = "FeaturedImages">
			<NFTInfoBox Name='General Admition Ticket' contractAddress='0x77d0BBcC8b87521550171A73ff1F185b01847d44' URI='https://www.cr3wmuseum.com/GATicket.json'Image='https://www.cr3wmuseum.com/GATicket.JPG' Description="First test of our upcoming NFT" price='.01'/>
			<NFTInfoBox Name='VIP Ticket' contractAddress='0xF1e6A07435a77b0a0E6159c8E7158D22b2034e66' URI='https://cr3wmuseum.com/VIPTicket.json'Image='https://www.cr3wmuseum.com/VIPTicket.jpg' Description="First test of our upcoming NFT" price='.05'/>
	  		</div>
  		</section>
		<Donation/>
	</div>
  );
}

export default Home;