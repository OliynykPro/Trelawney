import React from "react";
import "./Sticker.scss";

interface IStickerProps {
  value: string;
}

const Sicker: React.FC<IStickerProps> = ({ value }) => {
  return <span className="sticker">{value}</span>;
};

export default Sicker;
