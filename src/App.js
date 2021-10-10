import { useState } from "react";
import { ethers } from "ethers";
import './App.css';
import { Component } from "react";

function MetamaskAccountButton  ()  {
  window.ethereum.request({ method: 'eth_requestAccounts' })
}

const startPayment = async ({ setError, setTxs, ether }) => {
  try {
    if (typeof window.ethereum == 'undefined')
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const addr = "0xD1D976C184B004acBcdA1165276FF0BC16D0f1Dd"
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ether});
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

const InteractWithContract = async ({setError, setTxs, Contract_Address}) => {
  try {
    if (typeof window.ethereum == 'undefined')
      throw new Error("No crypto wallet found. Please install it.");
  
  const ABI = [
    'function data() view returns(unit)',
    'function setData(unit _data) external'
  ];

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const readOnlyContract = new ethers.Contract(Contract_Address,ABI,provider);
  const value = await readOnlyContract.data();
  console.log(value);

  const contract = new ethers.Contract(Contract_Address, ABI, signer);
  const txResponse = await contract.data(2);
  const txReceipt = await txResponse.wait();
  console.log(txResponse);
  console.log(txReceipt)
  setTxs([txReceipt]);
  } catch (err) {
    setError(err.message);
  }
};

function App(){
  const accountAddress = window.ethereum.request({ method: 'eth_requestAccounts' });;

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
    gas: '0x2710', // customizable by user during MetaMask confirmation.
    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970', // Required except during contract publications.
    from: accountAddress, // must match user's active address.
    value: '0x29a2241af62c0000', // Only required to send ether to the recipient from the initiating external account.
    data:
      '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
    chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
  };

  const GetMetamaskAccount = () => {
    console.log(accountAddress[0]);
  }

  const SendTransaction = () => {
    console.log(accountAddress)
     window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
  }


  return (
    <body>

<div className="container"> 

  <header> <a href="">
    <h4 className="logo">NFT MUSEUM</h4>
    </a>
    <nav>
      <ul>
        <li><a href="#hero">HOME</a></li>
		<li><a href="#Museum">MUSEUM</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li> <a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  </header>

  <section className="Featured" id="Featured">
    <h2 className="hero_header">FEATURED <span class="light">NFT'S</span></h2>
    <p className="tagline">
      Check out these NFT's to add to your collection
    </p>
    <div class = "FeaturedImages">
		 <img src="http://cdn.onlinewebfonts.com/svg/img_438684.png" alt="" width="400" height="200" class="Images"/>
		 <img src="https://www.tynker.com/projects/images/739335ed06c2b01de4fa5360275ad181727d074d/bendy---bendy-copy-copy-copy-1.png" alt="" width="400" height="200" class="Images"/>
		 <img src="https://i.pinimg.com/originals/fd/94/e1/fd94e14c173efe3f18db004060474edd.png" alt="" width="400" height="200" class="Images"/>
		 <img src="https://cdn-img-0.wanelo.com/p/422/857/5f1/5d1a094499f43283956ccc1/x354-q80.jpg" alt="" width="400" height="200" class="Images"/>
		 <img src="https://i.pinimg.com/originals/49/cd/36/49cd361a200b0a6aa65d564cbe99fced.jpg" alt="" width="400" height="200" class="Images"/>
		 <img src="https://wpclipart.com/famous/Entertainers/musicians/Elvis/Elvis_Presley_Stencil.png" alt="" width="400" height="200" class="Images"/>
	  </div>
  </section>
  <section className="banner">
    <h2 className="parallax">Make a Donation</h2>
    <p className="parallax_description">Help fund our project</p>
	<div className="Donation">
		<input className="DonationAmount"  type="text" name="ether"  placeholder="Amount in ETH"/>
		<button className="DonationButon" type="submit" onClick = {SendTransaction}>Send Donation</button>
	</div>
  </section>
	
  <section className="footer_banner" id="contact">
	<div className="Subs">
    	<p className="button">Insta</p>
		<p className="button">Git</p>
	    <p className="button">Email</p>
	</div>
    <h2 className="hidden">Footer Banner Section </h2>
    <p className="hero_header">FOR THE LATEST NEWS &amp; UPDATES</p>
	</section>
	</div>
  </body>
  );
  }

  export default App;