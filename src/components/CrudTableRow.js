import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { foto, nombre, peliculas, id } = el;
  return (
    <tr>
      <td>{<img src={foto} alt={nombre} style={{ maxHeight: "100px" }} />}</td>
      <td>{nombre}</td>
      <td>{peliculas}</td>

      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
