import React, {useState} from "react";
import Search from "./Search";
import NFTInfoBox from "./NFTInfo";

function TicketStand({address}) {
  return (
	<div>
		{/* <Search SearchTitle="Ticket Stand" Subtitle="Get your Tickets Here" SearchPH="Find Your Ticket"/> */}
	    <section className="MintItems">
		<NFTInfoBox Address = {address} Name='GA Early Access Ticket' contractAddress='0x77d0BBcC8b87521550171A73ff1F185b01847d44' URI='https://thecr3wnft.com/NFTInfo/GATicket.json'Image='https://thecr3wnft.com/NFTInfo/GATicket.JPG' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This General Admission Ticket is 1/400 General Admission EARLY Access Tickets. This collection of 420 tickets are made up of 20 VIP and 400 General Admission tickets that will grant EARLY access to the NFT Museum along with other advantages. The unique benefits associated with the General Admission EARLY access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to avoid scalpers buying up the supply." max={400} PerPerson={1}/>
		<NFTInfoBox Address = {address} Name='VIP Early Access Ticket' contractAddress='0xF1e6A07435a77b0a0E6159c8E7158D22b2034e66' URI='https://thecr3wnft.com/NFTInfo/VIPTicket.json'Image='https://thecr3wnft.com/NFTInfo/VIPTicket.jpg' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This Very Important Person Ticket is 1/20 VIP EARLY Access Tickets. This collection of 420 tickets are made up of 20 VIP and 400 General Admission tickets that will grant EARLY access to the NFT Museum along with other advantages. The unique benefits associated with the VIP early access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to avoid scalpers buying up the supply. " max = {20} PerPerson={1}/>
  		</section>
	</div>
  );
}

export default TicketStand;