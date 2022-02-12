import React, { useState, useEffect } from "react";

const CrudForm = ({ createData, updateData, setDataToEdit, dataToEdit }) => {
  const initialForm = {
    name: "",
    affiliation: "",
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.affiliation) {
      alert("Datos incompletos");
      return;
    }

    if (form.id == null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agrergar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        ></input>
        <input
          type="text"
          name="affiliation"
          placeholder="Afiliación"
          onChange={handleChange}
          value={form.affiliation}
        ></input>
        <input type="submit" value="Enviar" onClick={handleSubmit} />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
