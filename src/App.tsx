import { useEffect, useState } from "react";

import Big from "big.js";
import { Col, Grid, Row } from "react-flexbox-grid";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Mockup from "./components/TokenPairInfo/Mockup/Mockup";
import TokenPairInfo from "./components/TokenPairInfo/TokenPairInfo";

import "./App.scss";
import { useInterval } from "./hooks/useInterval";

interface IPrice {
  decimals: number;
  multiplier: string;
}

interface IPriceData {
  asset_id: string;
  price: IPrice;
}

interface IPercentData {
  [key: string]: number;
}

const percentObj: IPercentData = {
  BTC: -7.41,
  ETH: -2.43,
  NEAR: 1.88,
};

function App() {
  const [priceData, setPriceData] = useState<Array<IPriceData> | null>(null);
  const [percentData, setPercentData] = useState<IPercentData>(percentObj);

  const bigNumToNumber = (bigN: string, dec: number) => {
    return new Big(bigN).div(new Big(10).pow(dec)).toNumber();
  };

  // const getPercent = (prev: number, current: number) => {
  //   console.log("prev", prev);
  //   console.log("current", current);
  //   return 100 * Math.abs((current - prev) / ((current + prev) / 2));
  // };

  const getOraclePrice = () => {
    return window.contract.get_price_data({
      asset_ids: ["BTC", "ETH", "NEAR"],
    });
  };

  useInterval(async () => {
    getOraclePrice().then((data: any) => {
      // priceData &&
      //   data.prices.map((currentBlockchain: any) => {
      //     console.log("curBlck", currentBlockchain);
      //     const item = data.prices.find(
      //       (p: any) => p.asset_id === currentBlockchain.asset_id
      //     );
      //     const newPrice = bigNumToNumber(
      //       item.price.multiplier,
      //       item.price.decimals
      //     );

      //     const oldPrice = priceData.find(
      //       (i) => i.asset_id === currentBlockchain.asset_id
      //     )?.price;

      //     const op = bigNumToNumber(
      //       oldPrice?.multiplier || "",
      //       oldPrice?.decimals || 0
      //     );

      //   });
      setPriceData([...data.prices]);
    });
  }, 2000);

  useEffect(() => {
    getOraclePrice().then((data: any) => {
      setPriceData([...data.prices]);
    });
  }, []);

  return (
    <div className="App">
      <Grid fluid={false}>
        <Row className="container">
          <Col xs={12}>
            <Header />
            <Row>
              {priceData &&
                priceData !== null &&
                priceData.map((card: IPriceData, index: number) => {
                  return (
                    <Col xs={12} sm={12} md={6} key={index}>
                      <Card>
                        <TokenPairInfo
                          asset_id={card.asset_id}
                          price={bigNumToNumber(
                            card.price.multiplier,
                            card.price.decimals
                          )}
                          percent={percentData[card.asset_id] as any}
                        />
                      </Card>
                    </Col>
                  );
                })}
              {priceData &&
                priceData !== null &&
                priceData.length < 4 &&
                priceData.map((card: IPriceData, index: number) => {
                  return (
                    <Col xs={12} sm={12} md={6} key={index}>
                      <Card>
                        <Mockup />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
