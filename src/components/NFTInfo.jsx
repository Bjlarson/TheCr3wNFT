import PropTypes from 'prop-types';
import { ethers } from 'ethers';

export default function NFTInfoBox ({Name, contractAddress, URI, Image ,Description, price}) {

  async function GetTokenId(ABI) {
    const contractAddress = ABI.networks['3'].address;
    const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
    const contract = new ethers.Contract(contractAddress,ABI,provider);
    const tokenID = await contract.GetCurrentTokenId();
    return await tokenID.toString();
  }
  
  async function GetBalance(contractAddress) {
    const abi = ['function balanceOf(address owner) public view returns (uint256)'];
    const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress,abi,metamaskProvider);
    const balance = await contract.balanceOf('0xdc24316b9ae028f1497c275eb9192a3ea0f67022');
    return balance;
  }
  
  async function CreateNFT(contractAddress, ABI, uri, price) {
    const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
    // if(GetBalance(metamaskProvider.address) >= 1){
    //   alert("You already own a ticket")
    //   return;
    // }
    const signer = metamaskProvider.getSigner();
    const contract = new ethers.Contract(contractAddress,ABI,signer);
    let val = ethers.utils.parseEther(price);
    console.log(val.toString());
    let transaction = await contract.createNFT(uri, { value: val.toString() });
    console.log("Transaction Sent");
    await transaction.wait();
  }

    return (
        <div className="NFTInfoBox">
            <h2 className = "NFTTitle">{Name}</h2>
            <img src={Image} className = "NFTImage" width="300" height="300" ></img>
            <div className = "BoxBottom">
                <p className = "NFTInfo">{Description}</p>
                <button onClick={() => CreateNFT(contractAddress, ['function createNFT(string memory tokenURI) public payable returns (uint256)'], URI, price)} className = "BuyNFT">Buy for {price}</button>
            </div>
        </div>
    )
}