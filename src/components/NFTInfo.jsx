import PropTypes from 'prop-types';
import { ethers } from 'ethers';

const BuyNFT = (price) => {
    
}

const NFTInfoBox = ({title,image,about,price}) => {
    return (
        <div>
            <h2 className = "NFTTitle">{title}</h2>
            <img src={image} className = "NFTImage"></img>
            <div className = "BoxBottom">
                <p className = "NFTInfo">{about}</p>
                <button onClick={() => BuyNFT(price)} className = "BuyNFT">Buy</button>
            </div>
        </div>
    )
}