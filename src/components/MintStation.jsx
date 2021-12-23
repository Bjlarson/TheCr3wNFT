import React, {useState} from "react";
import Search from "./Search";
import NFTInfoBox from "./NFTInfo";
import { ethers } from 'ethers';
import VIPabi from "./../components/ABI/MuseumVIPTicket.json";

function MintStation() {
	//const [Price] = useState(() => GetMintFee())

	// need to figure out use state to call funtions with variables or changing the state when the items loads
	async function GetMintFee() {
		const contractAddress = '0xD5b5e1d8DD2b52021E44cf51C5aa546876327459'
		const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
		const contract = new ethers.Contract(contractAddress,VIPabi,provider);
		const feeAmount = await contract.GetMintFee();
		console.log(await ethers.utils.parseEther(feeAmount).toString());
		return await ethers.utils.parseEther(feeAmount).toString();
	  }

  return (
	<div>
		<Search SearchTitle="Minting Station" Subtitle="Find the Collection for You" SearchPH="Find a Collection"/>
	    <section className="MintItems">
			<NFTInfoBox Name='General Admition Ticket' contractAddress='0x77d0BBcC8b87521550171A73ff1F185b01847d44' URI='https://www.cr3wmuseum.com/GATicket.json'Image='https://www.cr3wmuseum.com/GATicket.JPG' Description="First test of our upcoming NFT" price='.01'/>
			<NFTInfoBox Name='VIP Ticket' contractAddress='0xF1e6A07435a77b0a0E6159c8E7158D22b2034e66' URI='https://cr3wmuseum.com/VIPTicket.json'Image='https://www.cr3wmuseum.com/VIPTicket.jpg' Description="First test of our upcoming NFT" price='.05'/>
  		</section>
	</div>
  );
}

export default MintStation;