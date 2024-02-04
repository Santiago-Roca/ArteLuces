import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { cartContext } from "../context/StateComponent";
import swal from "sweetalert";

const FormCompra = () => {
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [confirmacionCorreo, setConfirmacionCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");

  const { productosCarrito, valorTotal } = useContext(cartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (orderId != "") {
      swal({
        title: "Orden Recibida!",
        text: `El ID de su orden es el siguiente: \n\n ${orderId}`,
        button: "Volver al Inicio",
        icon: "success",
      }).then(() => {
        redireccionarInicio();
      });
    }
  }, [orderId]);

  //CREANDO ORDEN PARA SUBIR AL SERVIDOR
  const order = {
    comprador: { nombre: nombre, email: correo, telefono: telefono },
    compra: productosCarrito.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      categoria: item.categoria,
      descripcion: item.descripcion,
      cantidad: item.cantidad,
      precio: item.precio,
    })),
    total: valorTotal,
  };

  //CONECCIÓN SERVIDOR
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const sendOrder = () => {
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  //REDIRECCIONAR LUEGO DE COMPRA
  function redireccionarInicio() {
    window.location = "./ArteLuces/inicio";
  }

  //VALIDA CONFIRMACIÓN DE CORREO
  const correosIguales = () => {
    if (correo === confirmacionCorreo) {
      return true;
    } else {
      return false;
    }
  };

  //VALIDAR FORMULARIO
  const validarForm = (nombre, correo, telefono) => {
    if (nombre.length < 3) {
      return "* El nombre debe tener un largo mayor a 3";
    }
    if (!correo.includes("@")) {
      return "* El formato de correo no es correcto";
    }
    if (!correosIguales()) {
      return "* Los correos ingresados no coinciden";
    }
    if (telefono.length < 5) {
      return "* El teléfono no debe tener menos de 5 números";
    } else if (isNaN(telefono)) {
      return "* El teléfono no puede contener letras";
    }
  };

  const mensaje = validarForm(nombre, correo, telefono);

  return (
    <>
      <Button className="btn-agregar" onClick={handleShow}>
        Finalizar Compra
      </Button>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Finalizar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              sendOrder();
            }}
          >
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-0">Nombre</Form.Label>

              <Form.Control
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
              <Form.Label className="mt-2 mb-0">Email</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={correo}
                onChange={(e) => {
                  setCorreo(e.target.value);
                }}
              />
              <Form.Label className="mt-2 mb-0">Confirmar Email</Form.Label>

              {!correosIguales() ? (
                <Form.Control
                  className="rojo"
                  type="email"
                  value={confirmacionCorreo}
                  onChange={(e) => {
                    setConfirmacionCorreo(e.target.value);
                  }}
                />
              ) : (
                <Form.Control
                  type="email"
                  value={confirmacionCorreo}
                  onChange={(e) => {
                    setConfirmacionCorreo(e.target.value);
                  }}
                />
              )}

              <Form.Label className="mt-2 mb-0">Teléfono</Form.Label>
              <Form.Control
                type="text"
                value={telefono}
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              disabled={mensaje}
              className="btn-secondary my-3 btn-submit mx-auto"
            >
              Finalizar compra
            </Button>
            <p className="parrafo-validacion mb-0">{mensaje}</p>
          </Form>
        </Modal.Body>
        <Modal.Footer className="mx-auto p-0"></Modal.Footer>
      </Modal>
    </>
  );
};

export default FormCompra;
