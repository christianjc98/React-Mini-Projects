import React from "react";

const CrudTableRow = ({ item, setDataToEdit, deleteData }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.affiliation}</td>
      <td>
        <button onClick={() => setDataToEdit(item)}>Editar</button>
        <button onClick={() => deleteData(item.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
