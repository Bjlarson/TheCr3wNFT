import { useState } from "react";
import { ethers } from "ethers";
import './App.css';
import { Component } from "react";
//import { Header, Footer, Donation} from "./components";
//import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Museum from "./components/Museum";

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

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
    gas: '0x2710', // customizable by user during MetaMask confirmation.
    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970', // Required except during contract publications.
    from: "", // must match user's active address.
    value: '0x29a2241af62c0000', // Only required to send ether to the recipient from the initiating external account.
    data:
      '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
    chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
  };

  const GetMetamaskAccount = () => {
    console.log("accountAddress");
  }
  return (
    <div className="container"> 
      <Museum/>
      <Footer/>
	  </div>
  );
}

  export default App;