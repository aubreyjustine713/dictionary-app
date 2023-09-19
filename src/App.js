import logo from "./aubrey-justine.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="woodland" />
        </main>
        <footer className="app-footer">
          This site was coded with 🤍 by{" "}
          <a
            href="https://www.linkedin.com/in/aubreyjamison713/"
            target="_blank"
            rel="noreferrer"
          >
            Aubrey Jamison
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aubreyjustine713/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
