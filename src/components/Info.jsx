import React from "react";
import Donation from "./Donation";
import TheCrew from "./TheCrew";
import "./CSS/Info.css"

function Info() {
  return (
	<div className="aboutSection">
    <div className="NFTAbout">
      <div className="AHeader">
        <h2 className="AboutHeader">WHAT IS AN NFT</h2>
        <h4 className="AboutSubHeader">Wikipidia descripes and NFT Like this.</h4>
      </div>
      <p className ="AboutParagraph"> 
      An NFT is a unit of data stored on a digital ledger, called a blockchain, which can be sold and traded. The NFT can be associated with a particular digital or physical asset (such as a file or a physical object) and a license to use the asset for a specified purpose. NFTs (and the associated license to use, copy or display the underlying asset) can be traded and sold on digital markets.
      </p>
      <p className ="AboutParagraph"> 
      NFTs function like cryptographic tokens, but, unlike cryptocurrencies like Bitcoin, NFTs are not mutually interchangeable, hence not fungible. While all bitcoins are equal, each NFT may represent a different underlying asset and thus have a different value. NFTs are created when blockchains string records of cryptographic hash, a set of characters identifying a set of data, onto previous records therefore creating a chain of identifiable data blocks. This cryptographic transaction process ensures the authentication of each digital file by providing a digital signature that is used to track NFT ownership. However, data links that point to details like where the art is stored can die.
      </p>
    </div>
    <div className="MuseumInfo">
      <div className="AHeader">
        <h2 className="AboutHeader">THE MUSEUM</h2>
        <h4 className="AboutSubHeader">Display and Share Your NFT Artwork</h4>
      </div>
      <p className ="AboutParagraph"> 
        The Goal of this project is to have a place where you can put your NFT Artwork on Display. We would like to have this place that allows you to See your artwork in a virtual space, walk around and see if yourself or share your address and allow others to visit your collection. This is our vision for what we have in the phisical world artwork and bring it to the digital world of Artwork. 
      </p>
    </div>
    <TheCrew />
		<Donation/>
	</div>
  );
}

export default Info;