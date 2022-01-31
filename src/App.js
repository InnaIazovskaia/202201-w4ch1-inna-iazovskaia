import "./App.css";
import Gentleman from "./components/Gentleman/Gentleman";
import "./data/gentlemenData";
import gentlemenData from "./data/gentlemenData";

function App() {
  const infoGentlemen = gentlemenData;
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          {infoGentlemen.map((gentleman) => {
            return <Gentleman gentlemanData={gentleman} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
