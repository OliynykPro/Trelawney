import React from "react";

import Circle from "../Circle/Circle";
import Sticker from "../Sticker/Sticker";
import Exchanges from "./Parts/Exchanges/Exchanges";

import { ReactComponent as NearIcon } from "../../images/blockchain/near.svg";
import { ReactComponent as EthereumIcon } from "../../images/blockchain/ethereum.svg";
import { ReactComponent as BitcoinIcon } from "../../images/blockchain/bitcoin.svg";

import "./TokenPairInfo.scss";

interface ITokenPairInfo {
  asset_id: string;
  price: number;
  percent: number;
}

const TokenPairInfo: React.FC<ITokenPairInfo> = ({
  asset_id,
  price,
  percent,
}) => {
  const getImage = (imageName: string) => {
    switch (imageName) {
      case "ETH":
        return <EthereumIcon />;
      case "BTC":
        return <BitcoinIcon />;
      case "NEAR":
        return <NearIcon />;
      default:
        return <BitcoinIcon />;
    }
  };

  return (
    <div className="token-pair-info">
      <div className="main-info">
        <div>
          {getImage(asset_id)}
          <div>
            <span className="stablecoin">{asset_id}</span>
            <span className="altcoin">Dai</span>
          </div>
        </div>
        <div className="price-info">
          <span className="price">${price.toFixed(2)}</span>
          <Sticker value={percent} />
        </div>
      </div>
      <Exchanges />
    </div>
  );
};

export default TokenPairInfo;
