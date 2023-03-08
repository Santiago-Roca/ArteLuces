import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, categoria, img }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={`../${img}`} />
        <Card.Body className="tarjeta">
          <Card.Title className="text-center">{nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`Luz de ${categoria}`}</Card.Subtitle>
          <Link to={`/item/${id}`}>
            <Button variant="dark">Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
