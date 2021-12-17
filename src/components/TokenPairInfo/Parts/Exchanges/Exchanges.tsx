import React from "react";

import { ReactComponent as CoinGeckoIcon } from "../../../../images/exchanges/gecko.svg";
import { ReactComponent as CoinMarketCupIcon } from "../../../../images/exchanges/marketcup.svg";
import { ReactComponent as BinanceIcon } from "../../../../images/exchanges/binance.svg";
import { ReactComponent as GreyCircleIcon } from "../../../../images/exchanges/mockup-circle.svg";

import "./Exchanges.scss";

interface IExchangesProps {
  mockup?: boolean;
}

const Exchanges: React.FC<IExchangesProps> = ({ mockup }) => {
  return (
    <div className="exchanges">
      {!mockup ? (
        <>
          <CoinGeckoIcon />
          <CoinMarketCupIcon />
          <BinanceIcon />
        </>
      ) : (
        <>
          <GreyCircleIcon />
          <GreyCircleIcon />
          <GreyCircleIcon />
        </>
      )}
    </div>
  );
};

export default Exchanges;
