import { useEffect, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

import "./App.scss";
import Exchanges from "./components/TokenPairInfo/Parts/Exchanges/Exchanges";
import TokenPairInfo from "./components/TokenPairInfo/TokenPairInfo";

function App() {
  const [data, setData] = useState(null);

  const getPrice = () => {
    window.contract
      .get_price_data({ asset_ids: ["BTC"] })
      .then((res: any) => {
        setData(res.prices);
        console.log("res", res);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getPrice();

    setInterval(() => {
      getPrice();
    }, 10000);
  }, []);

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <Grid fluid={false}>
        <Row className="container">
          <Col xs={12}>
            <Header />
            <Row>
              {arr.map((card) => {
                return (
                  <Col xs={12} sm={12} md={6}>
                    <Card>
                      <TokenPairInfo />
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
