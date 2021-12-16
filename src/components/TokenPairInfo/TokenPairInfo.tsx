import React from "react";

import Circle from "../Circle/Circle";
import Sticker from "../Sticker/Sticker";
import Exchanges from "./Parts/Exchanges/Exchanges";

import "./TokenPairInfo.scss";

const TokenPairInfo: React.FC = () => {
  return (
    <div className="token-pair-info">
      <div className="main-info">
        <div>
          <Circle color="#fdfr89" image="git" />
          <div>
            <span className="stablecoin">Dai</span>
            <span className="altcoin">Litecoin</span>
          </div>
        </div>
        <div className="price-info">
          <span className="price">$0.44848803</span>
          <Sticker value="-0.9%" />
        </div>
      </div>
      <Exchanges />
    </div>
  );
};

export default TokenPairInfo;
