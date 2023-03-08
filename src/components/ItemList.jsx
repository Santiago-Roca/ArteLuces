import Item from "./Item";

const ItemList = ({ listaProductos }) => {
  return (
    <>
      <div className="row gy-3 container-fluid mx-auto text-center mt-1 fila-itemList mb-3">
        {listaProductos.map((item) => (
          <div key={item.id} className="col-12 col-sm-5 col-md-4 col-xl-3 px-4">
            <Item
              nombre={item.nombre}
              categoria={item.categoria}
              img={item.imagen}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
