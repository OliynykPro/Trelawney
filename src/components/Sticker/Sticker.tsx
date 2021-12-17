import React from "react";
import "./Sticker.scss";

interface IStickerProps {
  value: number;
}

const Sicker: React.FC<IStickerProps> = ({ value }) => {
  return <span className={`sticker ${value < 0 && "red"}`}>{value} %</span>;
};

export default Sicker;
