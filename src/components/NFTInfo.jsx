import PropTypes from 'prop-types';
import { ethers } from 'ethers';
import GAabi from "./components/ABI/MuseumGATicket.json";
import VIPabi from "./components/ABI/MuseumVIPTicket.json";
import VIPURI from "./components/URI/VIPTicket.json";
const contractAddress = VIPabi.networks['3'].address
async function GetTokenId(contractAddress, ABI) {
  const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
  const contract = new ethers.Contract(contractAddress,ABI,provider);
  const tokenID = await contract.GetCurrentTokenId();
  return tokenID.toString();
}

async function GetRoyaltyFee(contractAddress,ABI) {
  const provider = new ethers.providers.InfuraProvider('ropsten', 'd9d3bb458fde4c72b12ada12da786d99');
  const contract = new ethers.Contract(contractAddress,ABI,provider);
  const feeAmount = await contract.GetMintFee();
  return feeAmount.toString();
}

async function GetBalance(contractAddress) {
  const abi = ['function balanceOf(address owner) public view returns (uint256)'];
  const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(contractAddress,abi,metamaskProvider);
  const balance = await contract.balanceOf('0xdc24316b9ae028f1497c275eb9192a3ea0f67022');
  return balance.toString();
}

const abi = ['function createNFT(address recipient, string memory tokenURI) public payable returns (uint256)']
async function CreateNFT(contractAddress, ABI ,price) {
  const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = metamaskProvider.getSigner();
  const contract = new ethers.Contract(contractAddress,abi,signer);
  //const tokenID = await contract.createNFT('0x5B2bFA4735B3209df2c12118Bb971C88292c3d75',VIPURI);
const tokenID = await signer.sendTransaction({to: contractAddress,
    value: ethers.utils.formatEther(price),
    data: contract.createNFT('https://cr3wmuseum.com/VIPTicket.json')}); 

  alert(tokenID.toString())
}

export default function NFTInfoBox ({title,image,about,price}) {
    return (
        <div className="NFTInfoBox">
            <h2 className = "NFTTitle">{title}</h2>
            <img src={image} className = "NFTImage" width="300" height="300" ></img>
            <div className = "BoxBottom">
                <p className = "NFTInfo">{about}</p>
                <button onClick={() => CreateNFT(price)} className = "BuyNFT">Buy for {price}</button>
            </div>
        </div>
    )
}