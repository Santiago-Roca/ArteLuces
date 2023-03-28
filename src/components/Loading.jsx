import { Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <Row className="main align-items-center">
      <Col className="text-center">
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
      </Col>
    </Row>
  );
};

export default Loading;
