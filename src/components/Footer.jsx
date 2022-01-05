import React from "react";
import insta from "./Pictures/instagramDark.png"
import twitter from "./Pictures/twitter.png"
import spotify from "./Pictures/Spotify-LogoDark.png"
import discord from "./Pictures/discord.PNG"

function GoToSite(location) {
	window.location = location;
}

function Footer() {
  return (
    <section className="footer_banner" id="contact">
	<div className="Subs">
    	<p className="button" href="https://www.instagram.com/cr3w_collections/" alt="Insta" onClick = {() => GoToSite("https://www.instagram.com/cr3w_collections/")}>
			<img classname = "footerinsta" src = {insta} width="40" height="40"/>
		</p>
		<p className="button" href="https://twitter.com/TheCr3wNFT" alt="Twitter" onClick = {() => GoToSite("https://twitter.com/TheCr3wNFT")}>
			<img classname = "footerTwitter" src = {twitter} width="40" height="40"/>
		</p>
	    <p className="button" href="https://anchor.fm/crypto.cr3w" alt="Spotify" onClick = {() => GoToSite("https://anchor.fm/crypto.cr3w")}>
			<img classname = "footerSpotify" src = {spotify} width="40" height="40"/>
		</p>
		<p className="button" href="https://discord.com/invite/arUyK56ghE" alt="Spotify" onClick = {() => GoToSite("https://discord.com/invite/arUyK56ghE")}>
			<img classname = "footerdiscord" src = {discord} width="40" height="40"/>
		</p>
	</div>
    <p className="hero_header">FOR THE LATEST NEWS &amp; UPDATES</p>
	</section>
  );
}

export default Footer;

