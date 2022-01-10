import React from "react";
import "./CSS/Contact.css"
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
  if(dref.current) observer.observe(dref.current)

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
      <div className="Social">
        <img className = "Twitterlogo" ref={tref} alt="Twitter Logo" src={twitter} width="200" height="200" onClick = {() => GoToSite("https://twitter.com/TheCr3wNFT")} />
        <div className = "About">
          <h2 className="AboutTitle"> Twitter </h2>
          <p className="AboutDescription">Follow us on Twitter @TheCr3wNFT to get the latest news and updates. DM us if you have questions or ideas for future projects.</p>
        </div>
      </div>
      <div className="Social1">
        <img className = "DiscordLogo" ref={dref} alt="Discord Logo" src={discord} width="200" height="200" onClick = {() => GoToSite("https://discord.com/invite/arUyK56ghE")}/>
        <div className = "About">
    	    <h2 className ="AboutTitle"> Discord </h2>
		      <p className="AboutDescription">Join are discord to get updates from us and the community of people that have joined the CR3W. We relase news and information on our discord to allow our community to be the first to know! Connect with others in the CR3W on our Discord as well!</p>
        </div>
	    </div>
      <div className="Social">
      <img className = "Spotifylogo" ref={sref} alt="Spotify Logo" src={spotify} width="200" height="200" onClick = {() => GoToSite("https://anchor.fm/crypto.cr3w")} />
        <div className = "About">
          <h2 className="AboutTitle"> Podcast </h2>
          <p className="AboutDescription">Follow our Podcast to get the latest news and updates. Get out take on new investments and information of NFT, Crypto, and other new projects.</p>
        </div>
      </div>
      <div className="Social1">
        <img className = "Emaillogo" ref={ref} alt="Email Logo" src={email} width="350" height="200"/>
        <div className = "About">
          <h2 className="AboutTitle"> Email </h2>
          <p className="AboutDescription">Contact us with question on our project or give us feedback on what you think would be cool to see. We might even take your sugestions and add them to the newest relases of our site.</p>
          <p className = "AboutDescription">cryptocr3wcollections@gmail.com</p>
        </div>
      </div>
      <div className="Social">
      <img className = "Instalogo" ref={iref} alt="Instagram Logo" src={insta} width="200" height="200" onClick = {() => GoToSite("https://www.instagram.com/cr3w_collections/")}/>
        <div className = "About">
    	    <h2 className ="AboutTitle"> Instagram </h2>
		      <p className="AboutDescription">Follow us on our Instagram @cr3w_collections for the latest drop news and pictures. Send a message or leave us a comment on one of our pictures.</p>
        </div>
	    </div>
	</section>
  );
}

export default Contact;