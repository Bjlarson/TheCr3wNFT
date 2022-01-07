import React from "react";
import { ethers } from "ethers";
import NFTSign from "./Pictures/NFTLandSign.jpg"

function Donation() {

  const SendTransaction = async () => {
    try {
      if (typeof window.ethereum == 'undefined') 
        throw new Error("No crypto wallet found. Please install it.");

      const accountAddress = await window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {return res;})
      console.log(accountAddress)

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(accountAddress[0]);
      const tx = await signer.sendTransaction({
        to: "0xbf8ee486Bd911aaEb675025Bc493794A47a04FB4",
        value: ethers.utils.parseEther(document.getElementById("ether").value)
      });

      console.log("tx", tx);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
  <section className="banner">
    <h2 className="parallax">Make a Donation</h2>
    <p className="parallax_description">Help fund our project</p>
	<div className="Donation">
		<input className="DonationAmount"  type="text" id="ether"  placeholder="Amount in ETH"/>
		<button className="DonationButon" type="submit" onClick = {SendTransaction}>Send Donation</button>
	</div>
  </section>
  );
}

export default Donation;