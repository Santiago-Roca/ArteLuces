import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h3 className="msg-greeting p-4">{greeting}</h3>
    </>
  );
};

export default ItemListContainer;
