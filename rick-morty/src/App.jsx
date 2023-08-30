import "./App.css";
import Navbar, { SearchResult } from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { allCharacters } from "../data/data";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results.slice(0, 5));
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <Navbar>
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <div className="main">
        <Main characters={characters}>
          <CharacterList characters={characters} isLoading={isLoading} />
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
