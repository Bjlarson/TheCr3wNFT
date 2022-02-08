import React from "react";
import Donation from "./Donation";
import TheCrew from "./TheCrew";
import "./CSS/Info.css"

function Info() {
  return (
	<div className="aboutSection">
    <div className="NFTAbout">
      <div className="AHeader">
        <h2 className="AboutHeader">WHAT IS AN NFT?</h2>
        <h4 className="AboutSubHeader">Podcast & Youtube</h4>
      </div>
      <p className ="AboutParagraph"> 
      https://open.spotify.com/episode/56quWx2MDZroSSHw2lTe6F?si=fO_eHTrcQ9KY66TwUXndxw
      https://anchor.fm/thecr3w/episodes/7-What-is-an-NFT---NFTs-Explained-in-LESS-than-20-min-e1dpsme
      https://youtu.be/Oz9zw7-_vhM
      </p>
    </div>
    <div className="MuseumInfo">
      <div className="AHeader">
        <h2 className="AboutHeader">THE CR3W MUSEUM</h2>
        <h4 className="AboutSubHeader">3D Interactive / Customizable NFT Museum</h4>
      </div>
      <p className ="AboutParagraph"> 
      The CR3W Museum is designed to be a place where you can put your NFT collection on display for others in the community to admire. That is why we built the CR3W Museum which allows you to see your collection in a 3D virtual space. We also want it to be a place where the NFT community can hangout & interact with one another. Our vision is to take what we have in the physical art world & bring it into the digital art world because we believe artists, collectors & creators deserve to display their NFT collections the same way that we can go to Museums in real life to see other art collections.
      </p>
    </div>
    <TheCrew />
		<Donation/>
	</div>
  );
}

export default Info;