import "./App.css";
import Navbar, { SearchResult } from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { allCharacters } from "../data/data";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("https://rickandmortyapi.com/api/characters");
        if (!res.ok) throw new Error("something went wrong");
        const data = await res.json();
        setCharacters(data.results.slice(0, 5));
        setIsLoading(false);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data.results.slice(0, 8)));
  // }, []);

  return (
    <div className="app">
      <Toaster />
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
