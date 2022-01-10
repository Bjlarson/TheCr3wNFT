import React from "react";
import carter from "./Pictures/Carter.jpg";
import twitter from "./Pictures/twitter.png";
import "./CSS/TheCrew.css";

function GoToSite(location) {
	window.location = location;
}

function TheCrew() {

  return (
	<div className="TheCrew">
			<h3 className="meetTitle1">MEET</h3>
			<h3 className="meetTitle2">THE CR3W</h3>
		<div className="Member">
			<img className = "ProfilePic" src = {carter} width="400" height="400"/>
			<h4 className="memberName">CARTER FILION</h4>
			<h5 className="ailias">(aka HoodieCrypto)</h5>
			<h4 className="memberPosition">Co-Founder, Artist, Social Media</h4>
			<p className="membertwitterbutton" onClick={() => GoToSite("https://twitter.com/HoodieCrypto_")}>
				<img className = "memberTwitter" src = {twitter} width="40" height="40" onClick={() => GoToSite("https://twitter.com/HoodieCrypto_")}/>
			</p>
		</div>
		<div className="Member">
			<img className = "ProfilePic" src = {carter} width="400" height="400"/>
			<h4 className="memberName">Blake Larson</h4>
			<h5 className="ailias">(aka ABigBlindGuy2)</h5>
			<h4 className="memberPosition">Co-Founder, Developer</h4>
			<p className="membertwitterbutton" onClick={() => GoToSite("https://twitter.com/ABigBlindGuy2")}>
				<img className = "memberTwitter" src = {twitter} width="40" height="40"/>
			</p>
		</div>
	</div>
  );
}

export default TheCrew;