import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemDetail = ({
  img,
  nombre,
  categoria,
  descripcion,
  garantia,
  precio,
}) => {
  return (
    <>
      <Card>
        <div className="boxImg-detail mx-auto">
          <Card.Img variant="top" src={`../${img}`} />
        </div>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Subtitle className="my-3 text-muted">{`Luz de ${categoria}`}</Card.Subtitle>
          <Card.Text className="px-3">{descripcion}</Card.Text>
          <Card.Text>{garantia}</Card.Text>
          <Card.Text>{`$ ${precio}`}</Card.Text>
          <Button variant="dark">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
