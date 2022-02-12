import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    role: "Capitán",
  },
  {
    id: 2,
    name: "Roronoa Zoro",
    role: "Espadachin",
  },
  {
    id: 3,
    name: "Nami",
    role: "Navegante",
  },
  {
    id: 4,
    name: "Sanji",
    role: "Cocinero",
  },
  {
    id: 5,
    name: "Tony Tony Chopper",
    role: "Médico",
  },
  {
    id: 6,
    name: "Usopp",
    role: "Tirador",
  },
  {
    id: 7,
    name: "Nico Robin",
    role: "Arqueologa",
  },
  {
    id: 8,
    name: "Franky",
    role: "Mecanico",
  },
  {
    id: 9,
    name: "Brook",
    role: "Musico",
  },
  {
    id: 10,
    name: "Jinbe",
    role: "Timonel",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((item) => (item.id === data.id ? data : item));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id '${id}' ?`
    );

    if (isDelete) {
      let newData = db.filter((item) => item.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <div className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </div>
  );
};

export default CrudApp;
