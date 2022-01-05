import React from "react";
import insta from "./Pictures/Instagram.png"
import twitter from "./Pictures/twitter-logo.png"
import spotify from "./Pictures/Spotify-Logo.png"
import email from "./Pictures/email.png"
import discord from "./Pictures/discord.PNG"

function GoToSite(location) {
	window.location = location;
}

function Contact() {
const ref = React.useRef(null)
const iref = React.useRef(null)
const tref = React.useRef(null)
const sref = React.useRef(null)
const dref = React.useRef(null)

const callbackFunction = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('logo-animation');
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}

React.useEffect(() => {
  const observer = new IntersectionObserver(callbackFunction, options);
  if(iref.current) observer.observe(iref.current)
  if(tref.current) observer.observe(tref.current)
  if(sref.current) observer.observe(sref.current)
  if(ref.current) observer.observe(ref.current)
  if(dref.current) observer.observe(ref.current)

  return () => {
    if(iref.current) observer.unobserve(iref.current)
    if(tref.current) observer.unobserve(tref.current)
    if(sref.current) observer.unobserve(sref.current)
    if(ref.current) observer.unobserve(ref.current)
    if(dref.current) observer.observe(dref.current)
  }
}, [ref,options])

  return (
    <section className="Contact" id="contact">
      <div className="Discord">
        <div className = "Dis">
    	    <h2 className ="dtitle"> Instagram </h2>
		      <p className="dAbout">Follow us on our Instagram @cr3w_collections for the latest drop news and pictures. Send a message or leave us a comment on one of our pictures.</p>
        </div>
        <img className = "DiscordLogo" ref={dref} alt="Discord Logo" src={discord} width="200" height="200" onClick = {() => GoToSite("https://discord.com/invite/arUyK56ghE")}/>
	    </div>
	    <div className="Instagram">
        <div className = "insta">
    	    <h2 className ="ititle"> Instagram </h2>
		      <p className="iAbout">Follow us on our Instagram @cr3w_collections for the latest drop news and pictures. Send a message or leave us a comment on one of our pictures.</p>
        </div>
        <img className = "Instalogo" ref={iref} alt="Instagram Logo" src={insta} width="200" height="200" onClick = {() => GoToSite("https://www.instagram.com/cr3w_collections/")}/>
	    </div>
      <div className="Twitter">
        <img className = "Twitterlogo" ref={tref} alt="Twitter Logo" src={twitter} width="200" height="200" onClick = {() => GoToSite("https://twitter.com/TheCr3wNFT")} />
        <div className = "tweet">
          <h2 className="tHeader"> Twitter </h2>
          <p className="tAbout">Follow us on Twitter @CryptoCr3w to get the latest news and updates. DM us if you have questions or ideas for future projects.</p>
        </div>
      </div>
      <div className="Spotify">
        <div className = "spot">
          <h2 className="sHeader"> Podcast </h2>
          <p className="sAbout">Follow our Podcast to get the latest news and updates. Get out take on new investments and information of NFT, Crypto, and other new projects.</p>
        </div>
        <img className = "Spotifylogo" ref={sref} alt="Spotify Logo" src={spotify} width="200" height="200" onClick = {() => GoToSite("https://anchor.fm/crypto.cr3w")} />
      </div>
      <div className="Email">
        <img className = "Emaillogo" ref={ref} alt="Email Logo" src={email} width="350" height="200"/>
        <div className = "e-mail">
          <h2 className="eHeader"> Email </h2>
          <p className="eAbout">Contact us with question on our project or give us feedback on what you think would be cool to see. We might even take your sugestions and add them to the newest relases of our site.</p>
          <p className = "emailAddress">cryptocr3wcollections@gmail.com</p>
        </div>
      </div>
	</section>
  );
}

export default Contact;