import "./App.css";
import React from "react";
import CrudApp from "./Components/CrudApp";
import CrudApi from "./Components/CrudApi";
import SongSearch from "./Components/SongSearch";
import SelectsAnidados from "./Components/SelectsAnidados";
import ContactForm from "./Components/ContactForm";
import Modals from "./Components/Modals";

function App() {
  return (
    <>
      <h1>Ejercicios React</h1>
      <Modals />
      <hr></hr>
      <ContactForm />
      <hr></hr>
      <SelectsAnidados />
      <hr></hr>
      <SongSearch />
      <hr></hr>
      <CrudApi />
      <hr></hr>
      <CrudApp />
      <hr></hr>
    </>
  );
}

export default App;
