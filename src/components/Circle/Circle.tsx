import React from "react";

import { ReactComponent as BinanceIcon } from "../../images/social/git.svg";
import { ReactComponent as CoinmarketIcon } from "../../images/social/git.svg";
import { ReactComponent as CoingeckoIcon } from "../../images/social/git.svg";

import "./Circle.scss";

interface ICircleProps {
  color: string;
  image?: string;
  padding?: number;
}

const Circle: React.FC<ICircleProps> = ({ image, padding }) => {
  const getImage = (imageName: string) => {
    switch (imageName) {
      case "binance":
        return <BinanceIcon />;
      case "coinmarket":
        return <CoinmarketIcon />;
      case "coingecko":
        return <CoingeckoIcon />;
      default:
        return <BinanceIcon />;
    }
  };

  return (
    <span className="circle" style={{ padding: padding }}>
      {image && getImage(image)}
    </span>
  );
};

export default Circle;
