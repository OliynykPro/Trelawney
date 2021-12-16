import React from "react";

import { socialMedia } from "../../recourses/social";
import SocialMedia from "../SocialMedia/SocialMedia";

import { Col, Row } from "react-flexbox-grid";

import "./Header.scss";

import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Row middle="xs">
        <Col xs={6}>
          <Logo title="trelawney" />
        </Col>
        <Col xs={6}>
          <SocialMedia medias={socialMedia} />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
