import { Col, Row } from "react-flexbox-grid";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  window.contract
    .get_price_data({ asset_ids: ["RUS"] })
    .then((res: any) => {
      console.log("res", res);
    })
    .catch((err: any) => {
      console.log("err", err);
    });

  return (
    <div className="App">
      <Row className="container" center="xs">
        <Col xs={12}>
          <Header />
        </Col>
      </Row>
    </div>
  );
}

export default App;
