import PropTypes from 'prop-types';
import { ethers } from 'ethers';

const BuyNFT = (price) => {
    
}

export default function NFTInfoBox ({title,image,about,price}) {
    return (
        <div className="NFTInfoBox">
            <h2 className = "NFTTitle">{title}</h2>
            <img src={image} className = "NFTImage" width="300" height="300" ></img>
            <div className = "BoxBottom">
                <p className = "NFTInfo">{about}</p>
                <button onClick={() => BuyNFT(price)} className = "BuyNFT">Buy for {price}</button>
            </div>
        </div>
    )
}