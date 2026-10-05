import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <div className="bg-black text-light">
      <Navbar />

      <main className="pt-5">
        <Content />
      </main>
    </div>
  );
}

export default App;