import { Col, Row } from "react-flexbox-grid";
import "./App.scss";

function App() {
  window.contract
    .get_price_data({ asset_ids: [] })
    .then((res: any) => {
      console.log("res", res);
    })
    .catch((err: any) => {
      console.log("err", err);
    });

  return (
    <div className="App">
      <Row center="xs" className="container">
        <Col xs={12}>Trelawney</Col>
      </Row>
    </div>
  );
}

export default App;
