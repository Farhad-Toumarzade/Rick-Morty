import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { allCharacters } from "../data/data";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList allcharacters={allCharacters} />
        <CharacterDetail />
      </div>
    </div>
  );
}
export default App;
