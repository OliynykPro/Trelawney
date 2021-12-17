import { useEffect, useState } from "react";

import Big from "big.js";
import { Col, Grid, Row } from "react-flexbox-grid";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Mockup from "./components/TokenPairInfo/Mockup/Mockup";
import TokenPairInfo from "./components/TokenPairInfo/TokenPairInfo";

import "./App.scss";

interface IPrice {
  decimals: number;
  multiplier: string;
}

interface IPriceData {
  asset_id: string;
  price: IPrice;
}

// {
//   "BTC": 39.3,
//   "ETH": 908,
//   "NEAR:": 909
// }

function App() {
  const [priceData, setPriceData] = useState<Array<IPriceData> | null>(null);
  const [percentData, setPercentData] = useState();

  const bigNumToNumber = (bigN: string, dec: number) => {
    return new Big(bigN).div(new Big(10).pow(dec)).toNumber();
  };

  const getPrice = () => {
    window.contract
      .get_price_data({ asset_ids: ["BTC", "ETH", "NEAR"] })
      .then((res: any) => {
        setPriceData(res.prices);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  // const getPercent = (prev: number, current: number) => {
  //   return 100 * Math.abs((current - prev) / ((current + prev) / 2));
  // };

  useEffect(() => {
    getPrice();

    setInterval(() => {
      getPrice();
    }, 20000);
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
                  console.log("card", card);
                  return (
                    <Col xs={12} sm={12} md={6} key={index}>
                      <Card>
                        <TokenPairInfo
                          asset_id={card.asset_id}
                          // price={Number(card.price.multiplier)}
                          price={bigNumToNumber(
                            card.price.multiplier,
                            card.price.decimals
                          )}
                          // price={"34332432"}
                        />
                      </Card>
                    </Col>
                  );
                })}

              {priceData &&
                priceData !== null &&
                priceData.length < 4 &&
                priceData.map((card: IPriceData, index: number) => {
                  console.log("card", card);
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
