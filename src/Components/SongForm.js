import React, { useState } from "react";

const SongForm = ({ handleSearch }) => {
  const initialForm = {
    artist: "",
    song: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del interprete"
          onChange={handleChange}
          value={form.artist}
        ></input>
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        ></input>
        <input type="submit" value="Enviar" onClick={handleSubmit}></input>
      </form>
    </div>
  );
};

export default SongForm;
