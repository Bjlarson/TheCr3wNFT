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
            <NFTInfoBox Address = {address} Name='GA Early Access Ticket' contractAddress='0x0De63d31D4c72C898D547C4A8d04376F48d36366' URI='https://thecr3wnft.com/NFTInfo/GATicket.json'Image='https://thecr3wnft.com/NFTInfo/GATicket.jpg' Description="The CR3W: interactive 3D NFT Museum. A place where all collectors can display their NFT collection in their personal gallery! This General Admission Ticket is 1/420 General Admission EARLY Access Tickets. This collection of tickets will grant EARLY access to the NFT Museum along with other advantages to be announced. The unique benefits associated with the General Admission EARLY access tickets are described/explained on our Twitter page and within our Discord community. Minting is limited to one per person to avoid scalpers buying up the supply." price={.01} max={420} PerPerson={1}/>
  		</section>
        <section className="Join">
            <h3 className="JoinTitle">ABOUT</h3>
            <h3 className="TheCrewTitle">THE CR3W</h3>
            <div className="AboutRoadMap">The CR3W Museum is a 3D Interactive NFT Museum that gives all members of the NFT Community an opportunity to display their collections for others to admire. We believe that NFT collectors, artists & creators all deserve to have their own gallery within our Museum. That is why holders of our NFTickets will have access to customize their gallery with the NFTs from their collection. </div>
            <div className="AboutRoadMap">We have big plans for the CR3W Museum & ways to reward our community members. We also have some collaborations in the works on ways to incorporate features of current projects into our NFT Museum. We plan to innovate & adapt to whatever may come our way because our ultimate responsibility is to bring value to the NFT community & to spread love positivity along the way!  </div>
        </section>
        <section className="columns">
            <div className="column">
                <h4 className="columnHeader">Gallery FAQs</h4>
                <h5 className="RoadMapText">How Do I Get My Own NFT Gallery?</h5>
                <p className="columntext">You can receive your own gallery by minting one of our NFTickets on our website. Right now we are minting 420 General Admission Tickets & will be releasing 69 VIP tickets closer to launch.</p>
                <h5 className="RoadMapText">When Will CR3W Museum Launch?</h5>
                <p className="columntext">Our goal is Spring 2022 but we will have a set date that will be announced on Twitter.</p>
                <h5 className="RoadMapText">Can You Get In The Museum Without A NFTicket?</h5>
                <p className="columntext">Yes, you can come in & view the NFT galleries for free.</p>
            </div>
            <div className="column">
                <h4 className="columnHeader">Ticket FAQs</h4>
                <h5 className="columnBody">What Are NFTickets?</h5>
                <p className="columntext">NFTickets are the NFT tickets we are currently minting which give access to your very own NFT gallery within CR3W Museum. Early Access tickets also will have access our beta version before we open the Museum to the public.</p>
                <h5 className="columnBody">Why Hold Them?</h5>
                <p className="columntext">Holding the tickets gives access to your own NFT gallery to customize along with free airdrops / giveaways . We want to always reward our OG community! #WAGMI</p>
                <h5 className="columnBody">How Many NFTickets Are Available?</h5>
                <p className="columntext">Currently, there are 420 General Admission & 69 VIP NFTickets available to buy which will grant access to your very own NFT Gallery.</p>
                <h5 className="columnBody">Will There Be More NFTickets?</h5>
                <p className="columntext">Yes, the 489 EARLY ACCESS NFTickets are part of our Genesis Collection but we do have a lot of big plans / ideas for another collection that we will post updates for on our Twitter.</p>
            </div>
            <div className="column">
                <h4 className="columnHeader">CR3W GOALS</h4>
                <h5 className="columnBody">CR3W Auction House</h5>
                <p className="columntext">We plan to have an Auction House within CR3W Museum</p>
                <h5 className="columnBody">NFT Marketplace</h5>
                <p className="columntext">We plan to have a fast an easy way for The CR3W Community to be able to buy & sell NFTs as easy as they can display them within our Museum.</p>
                <h5 className="columnBody">CR3W Gift Shop</h5>
                <p className="columntext">We want to have a giftshop within the museum where people can go in and buy both digital & physical items that feature CR3W Museum or even details to a specific gallery.</p>
                <h5 className="columnBody">Collaborations with the NFT Community</h5>
                <p className="columntext">We have a couple of collabs in the works with Artists & want to pursue more community led collaborations as we grow.</p>
            </div>
        </section>
        <TheCrew/>
		<Donation/>
	</div>
  );
}

export default Main;