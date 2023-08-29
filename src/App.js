import logo from "./aubrey-justine.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="app-footer">
          This site was coded with 🖤 by Aubrey Jamison.
          {/*  Add Github link and linkedin profile */}
        </footer>
      </div>
    </div>
  );
}
