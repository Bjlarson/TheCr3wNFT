import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { ethers } from 'ethers';

export default function NFTInfoBox ({Address, Name, contractAddress, URI, Image ,Description,price ,max, PerPerson}) {
	const [TokenCost, setTokenCost] = useState(price);
  const [CurrentTokenID, setTokenID] = useState(() => GetTokenId());
  const [addressBalance, setAddressBalance] = useState(() => getBalance());
  const [ethBalance, setAddressEthBalance] = useState(() => GetEthBalance());

/* 	function GetTokenAmount() {
    if(!window.ethereum){
      return;
    }

    const abi = ['function GetMintFee() external view returns(uint)'];
		const provider = new ethers.providers.InfuraProvider('ropsten', 'bb4510b38a1942eb9a67ef34c217d6a0');
		const contract = new ethers.Contract(contractAddress,abi,provider);
    
		contract.GetMintFee()
    .then(result => {
      setTokenCost(ethers.utils.formatEther(result.toString()));
    })
	} */

  function GetTokenId() {
    if(!window.ethereum){
      return;
    }
    const abi = ['function GetCurrentTokenId() external view returns(uint)']
    const provider = new ethers.providers.InfuraProvider('ropsten', 'bb4510b38a1942eb9a67ef34c217d6a0');
    const contract = new ethers.Contract(contractAddress,abi,provider);
    contract.GetCurrentTokenId()
    .then(result => {
      console.log(result.toString());
      setTokenID(result.toString());
    })
  }
  
  function getBalance() {
    if(Address == null){
      return;
    }

    const abi = ['function balanceOf(address owner) public view returns (uint256)'];
    const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress,abi,metamaskProvider);
    contract.balanceOf(Address)
    .then(result => {
      setAddressBalance(result)
    })
    .catch(error => console.log(error))
  }

  function GetEthBalance() {
    if(Address == null){
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.getBalance(Address)
    .then(balance => {
      setAddressEthBalance(ethers.utils.formatEther(balance.toString()))
    })
  }
  
  async function CreateNFT(contractAddress, ABI, uri) {
    if(Address == null){
      alert("Please Connect a Wallet");
      return;
    }

    if(addressBalance >= PerPerson){
      alert("You already have the allowed amount");
      return;
    }

    if(ethBalance <= TokenCost){
      alert("You do not have the required funds");
      return;
    }

    try{
      const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = metamaskProvider.getSigner();
      const contract = new ethers.Contract(contractAddress,ABI,signer);
      let val = ethers.utils.parseEther(TokenCost.toString());
      let transaction = await contract.createNFT(uri, { value: val.toString() });
      alert("Transaction Sent");
      await transaction.wait();
    } catch (err) {
      console.log(err.message);
    }
  }

    return (
        <div className="NFTInfoBox">
          <img src={Image} className = "NFTImage" width="400" height="400" />
            <h2 className = "NFTTitle">{Name}</h2>
            {
              CurrentTokenID <= max?<h2 className = "NFTTokenId">Token: {CurrentTokenID} of {max}</h2>:<h2 className = "NFTTokenId">Sold Out</h2>
            }
            {
              PerPerson != null?<h2 className='perperson'>{PerPerson} per wallet</h2>:null
            }
            <p className = "NFTInfo">{Description}</p>
            <p className = "BuyNFT" onClick={() => CreateNFT(contractAddress, ['function createNFT(string memory tokenURI) public payable returns (uint256)'], URI)} className = "BuyNFT">Buy for {price}</p>
        </div>
    )
}