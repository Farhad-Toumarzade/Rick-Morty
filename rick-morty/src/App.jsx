import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { allCharacters } from "../data/data";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(allCharacters);

  return (
    <div className="app">
      <Navbar numOfResult={characters.length} />
      <div className="main">
        <Main characters={characters}>
          <CharacterList characters={characters} />
          <CharacterDetail />
        </Main>
      </div>
    </div>
  );
}
export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
