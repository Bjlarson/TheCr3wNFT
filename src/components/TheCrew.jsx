import React from "react";
import carter from "./Pictures/Carter.jpg";
import twitter from "./Pictures/twitter.png"

function GoToSite(location) {
	window.location = location;
}

function TheCrew() {

  return (
	<div className="TheCrew">
		<h3 className="meetTitle">MEET</h3>
		<h3 className="meetTitle">THE CR3W</h3>
		<div className="Member">
			<img classname = "footerinsta" src = {carter} width="40" height="40"/>
			<h4 className="memberName">CARTER FILION</h4>
			<h5 classname="ailias">(aka HoodieCrypto)</h5>
			<h4 className="memberPosition">Co-Founder, Artist, Social Media</h4>
			<img classname = "memberTwitter" src = {twitter} width="40" height="40" onClick={() => GoToSite("https://twitter.com/HoodieCrypto")}/>
		</div>
		<div className="Member">
			<img classname = "footerinsta" src = {carter} width="40" height="40"/>
			<h4 className="memberName">Blake Larson</h4>
			<h5 classname="ailias">(aka ABigBlindGuy2)</h5>
			<h4 className="memberPosition">Co-Founder, Developer</h4>
			<img classname = "memberTwitter" src = {twitter} width="40" height="40" onClick={() => GoToSite("https://twitter.com/ABigBlindGuy2")}/>
		</div>
	</div>
  );
}

export default TheCrew;