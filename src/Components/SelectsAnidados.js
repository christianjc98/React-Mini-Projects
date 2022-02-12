import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const [id, setId] = useState("");

  const token = "ab210d44-d721-4a2a-80e5-3364ebf9af63";
  return (
    <div>
      <h2>Selects anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${token}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${token}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${token}`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
