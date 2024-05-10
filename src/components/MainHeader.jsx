import { Col, Row } from "react-bootstrap";

const MainHeader = () => {
  return (
    <Row>
      <Col xs={12} className="mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
    </Row>
  );
};
export default MainHeader;
