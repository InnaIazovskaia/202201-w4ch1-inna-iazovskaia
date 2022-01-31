import "./App.css";
import Gentlemen from "./Gentlemen/Gentlemen";

function App() {
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
          <Gentlemen></Gentlemen>
        </ul>
      </main>
    </div>
  );
}

export default App;
