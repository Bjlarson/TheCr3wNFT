import React from "react";
import Donation from "./Donation";
import TheCrew from "./TheCrew";
import "./CSS/Info.css"

function GoToSite(location) {
	window.location = location;
}

function Info() {
  return (
	<div className="aboutSection">
    <div className="NFTAbout">
      <div className="AHeader">
        <h2 className="AboutHeader">WHAT IS AN NFT?</h2>
        <h4 className="AboutSubHeader">Podcast & Youtube</h4>
      </div>
      <iframe src="https://open.spotify.com/embed/episode/56quWx2MDZroSSHw2lTe6F?utm_source=generator" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
{/*       <p className ="AboutParagraph">Listen to our podcast about NFT's on Spotify <a className="URLLink" onClick={() => GoToSite('https://open.spotify.com/episode/56quWx2MDZroSSHw2lTe6F?si=fO_eHTrcQ9KY66TwUXndxw')}>https://open.spotify.com/episode/56quWx2MDZroSSHw2lTe6F?si=fO_eHTrcQ9KY66TwUXndxw</a></p>
      <p className ="AboutParagraph">Listen to our podcast about NFT's on Ancor.fm <a className="URLLink" onClick={() => GoToSite('https://anchor.fm/thecr3w/episodes/7-What-is-an-NFT---NFTs-Explained-in-LESS-than-20-min-e1dpsme')}>https://anchor.fm/thecr3w/episodes/7-What-is-an-NFT---NFTs-Explained-in-LESS-than-20-min-e1dpsme</a> </p> */}
      <p className ="AboutParagraph">Learn more on youtube, we recomend this video <a className="URLLink" onClick={() => GoToSite('https://youtu.be/Oz9zw7-_vhM')}>https://youtu.be/Oz9zw7-_vhM</a></p>
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