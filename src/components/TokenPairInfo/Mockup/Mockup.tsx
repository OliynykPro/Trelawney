import React from "react";

import Circle from "../../Circle/Circle";
import Exchanges from "../Parts/Exchanges/Exchanges";

import "../TokenPairInfo.scss";

const TokenPairInfo: React.FC = () => {
  return (
    <div className="token-pair-info mockup">
      <div className="main-info">
        <div>
          <Circle color="#fdfr89" />
          <div>
            <span className="stablecoin">XXXX</span>
            <span className="altcoin">Xxxxxxxx</span>
          </div>
        </div>
        <div className="price-info">
          <span className="price">Mockup_price</span>
          <span className="sticker">Mockup_sticker</span>
        </div>
      </div>
      <Exchanges mockup={true} />
    </div>
  );
};

export default TokenPairInfo;
