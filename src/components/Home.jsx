import React, {useEffect} from "react";
import Donation from "./Donation";
import NFTInfoBox from "./NFTInfo";

function Home({address}) {

  return (
	<div>
		<section className="Featured" id="Featured">
    		<h2 className="hero_header">FEATURED <span className="light">NFT'S</span></h2>
    		<p className="tagline">
      			Check out these NFT's to add to your collection
    		</p>
    		<div className = "FeaturedImages">
			<NFTInfoBox Address = {address} Name='General Admition Ticket' contractAddress='0x77d0BBcC8b87521550171A73ff1F185b01847d44' URI='https://www.cr3wmuseum.com/GATicket.json'Image='https://www.cr3wmuseum.com/GATicket.JPG' Description="First test of our upcoming NFT" max='400' PerPerson='1'/>
			<NFTInfoBox Address = {address} Name='VIP Ticket' contractAddress='0xF1e6A07435a77b0a0E6159c8E7158D22b2034e66' URI='https://cr3wmuseum.com/VIPTicket.json'Image='https://www.cr3wmuseum.com/VIPTicket.jpg' Description="First test of our upcoming NFT" max = '1' PerPerson='1'/>
	  		</div>
  		</section>
		<Donation/>
	</div>
  );
}

export default Home;