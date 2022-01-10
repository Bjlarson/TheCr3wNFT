import React, {useEffect} from "react";
import Donation from "./Donation";
import NFTInfoBox from "./NFTInfo";
import TheCrew from "./TheCrew";

function Main({address}) {

  return (
	<div>
        <section className="Welcome">
            <h4 className="Title1">WELCOME</h4>
            <h4 className="Title2">TO THE CR3W</h4>
        </section>
		<section className="Featured" id="Featured">				
            <NFTInfoBox Address = {address} Name='GA Early Access Ticket' contractAddress='0x77d0BBcC8b87521550171A73ff1F185b01847d44' URI='https://thecr3wnft.com/NFTInfo/GATicket.json'Image='https://thecr3wnft.com/NFTInfo/GATicket.JPG' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This General Admission Ticket is 1/400 General Admission EARLY Access Tickets. This collection of 420 tickets are made up of 20 VIP and 400 General Admission tickets that will grant EARLY access to the NFT Museum along with other advantages. The unique benefits associated with the General Admission EARLY access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to avoid scalpers buying up the supply." max={400} PerPerson={1}/>
			<NFTInfoBox Address = {address} Name='VIP Early Access Ticket' contractAddress='0xF1e6A07435a77b0a0E6159c8E7158D22b2034e66' URI='https://thecr3wnft.com/NFTInfo/VIPTicket.json'Image='https://thecr3wnft.com/NFTInfo/VIPTicket.jpg' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This Very Important Person Ticket is 1/20 VIP EARLY Access Tickets. This collection of 420 tickets are made up of 20 VIP and 400 General Admission tickets that will grant EARLY access to the NFT Museum along with other advantages. The unique benefits associated with the VIP early access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to avoid scalpers buying up the supply. " max = {20} PerPerson={1}/>
  		</section>
        <section className="Join">
            <h3 className="JoinTitle">ABOUT</h3>
            <h3 className="TheCrewTitle">THE CR3W</h3>
            <div className="AboutRoadMap">Standard projects that have roadmaps only to spread false hope & unmet expectations is NOT what we are going for. Our team is built on vision & we want our community to see the vision that we have & help create a positive movement around our vision. </div>
            <div className="AboutRoadMap">We have big plans for The CR3W & CR3W Museum! We plan to innovate & adapt to whatever comes our way because our ultimate responsibility is to bring value to the NFT community & to spread positivity to others.  </div>
            <div className="AboutRoadMap">This is our obligation, along with our pledge to the NFT community that we will live up to our word! Although we think that Roadmaps have a bad wrap we do believe that it is important to share with the community some of our big plans: </div>
        </section>
        <section className="columns">
            <div className="column">
                <h4 className="columnHeader">ROADMAP</h4>
                <h5 className="RoadMapText">420 CR3W Museum Early Access NFTs</h5>
                <h5 className="RoadMapText">(400 GA & 20 VIP)</h5>
                <h5 className="RoadMapText">Launch CR3W Museum</h5>
                <h5 className="RoadMapText">3D Interactive, Customizable Galleries</h5>
                <h5 className="RoadMapText">$1,000 Giveaways to Early Access Hodlers</h5>
                <h5 className="RoadMapText">The CR3W Gift Shop</h5>
                <h5 className="RoadMapText">Merch Giveaway to The CR3W Community</h5>
                <h5 className="RoadMapText">Launch Crypto CR3W NFT Collection</h5>
                <h5 className="RoadMapText">Crypto CR3W Giveaways through Twitter & Discord</h5>
            </div>
            <div className="column">
                <h4 className="columnHeader">UTILITIES</h4>
                <h5 className="columnBody">Early Access Tickets</h5>
                <p className="columntext">Access to CR3W Museum weeks before Opening Day. VIP tickets gain exclusive access beyond that which General Admission recieves.</p>
                <h5 className="columnBody">Why Hold Them?</h5>
                <p className="columntext">Holding the tickets also gives you eligibility for free airdrops/giveaways. We want to reward our OG community! #WAGMI</p>
                <h5 className="columnBody">Crypto CR3W NFTs</h5>
                <p className="columntext">The Crypto CR3W NFTs are 10,000 computer generated, crypto inspired collectibles with over 175 hand crafted features by Co-Founder, Carter Filion. Each collectible contains unique traits inspired by various cryptocurrencies & other members/projects within the NFT community.</p>
                <h5 className="columnBody">Collection Details</h5>
                <p className="columntext">The details regarding this collection are TBA. Updates & Announcments regarding the drop date, mint price, & all other details can be found on our Twitter & Discord.</p>
            </div>
            <div className="column">
                <h4 className="columnHeader">LONG TERM GOALS</h4>
                <h5 className="columnBody">CR3W Auction House</h5>
                <p className="columntext">Auction House within CR3W Museum</p>
                <h5 className="columnBody">NFT Marketplace</h5>
                <p className="columntext">We plan to have a fast an easy way for The CR3W Community to be able to buy & sell NFTs as easy as they can display them within the museum</p>
                <h5 className="columnBody">Upgraded Characters</h5>
                <p className="columntext">Enhanced Artwork</p>
                <h5 className="columnBody">Collaborations with NFT Projects</h5>
                <p className="columntext">Community led navigation with NFT projects from collectibles, photography, music & much more</p>
            </div>
        </section>
        <TheCrew/>
		<Donation/>
	</div>
  );
}

export default Main;