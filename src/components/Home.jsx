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
				<NFTInfoBox Address = {address} Name='GA Early Access Ticket' contractAddress='0x5488a2554324024dC310972F2A31eEB5E15fE6E9' URI='https://thecr3wnft.com/NFTInfo/GATicket.json'Image='https://thecr3wnft.com/NFTInfo/GATicket.JPG' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This General Admission Ticket is 1/400 General Admission EARLY Access Tickets. This collection of 420 tickets are made up of 20 VIP and 400 General Admission tickets that will grant EARLY access to the NFT Museum along with other advantages. The unique benefits associated with the General Admission EARLY access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to avoid scalpers buying up the supply." price='.01' max={400} PerPerson={1}/>
				{/*<NFTInfoBox Address = {address} Name='VIP Early Access Ticket' contractAddress='0xF1e6A07435a77b0a0E6159c8E7158D22b2034e66' URI='https://thecr3wnft.com/NFTInfo/VIPTicket.json'Image='https://thecr3wnft.com/NFTInfo/VIPTicket.jpg' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This Very Important Person Ticket is 1/20 VIP EARLY Access Tickets. This collection of 420 tickets are made up of 20 VIP and 400 General Admission tickets that will grant EARLY access to the NFT Museum along with other advantages. The unique benefits associated with the VIP early access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to avoid scalpers buying up the supply. " price={.1} max = {20} PerPerson={1}/> */}
	  		</div>
  		</section>
		<Donation/>
	</div>
  );
}

export default Home;