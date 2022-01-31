import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import gentlemenData from "./data/gentlemenData";

function App() {
  const infoGentlemen = gentlemenData;

  const selectAllGentlemen = () => {
    const gentlemenContainers = document.querySelectorAll(".gentleman");
    gentlemenContainers.forEach((gentlemanContainer) => {
      gentlemanContainer.className = "gentleman selected";
    });
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <Button
          className="button button--select"
          text="Select all"
          actionOnClick={selectAllGentlemen}
        ></Button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {infoGentlemen.map((gentleman, index) => {
            return <Gentleman gentlemanData={gentleman} key={index} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
