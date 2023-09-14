import "./App.css";
import Navbar, { Search, SearchResult } from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { allCharacters } from "../data/data";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`
        );
        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setCharacters([]);
      return;
    }
    fetchData();
  }, [query]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch("https://rickandmortyapi.com/api/character");
  //       if (!res.ok) throw new Error("something went wrong");
  //       const data = await res.json();
  //       setCharacters(data.results.slice(0, 5));
  //       setIsLoading(false);
  //     } catch (err) {
  //       toast.error(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data.results.slice(0, 8)));
  // }, []);
  const handleSelectCharacter = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <div className="main">
        <Main characters={characters}>
          <CharacterList
            characters={characters}
            isLoading={isLoading}
            onSelectCharacter={handleSelectCharacter}
          />
          <CharacterDetail selectedId={selectedId} />
        </Main>
      </div>
    </div>
  );
}
export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
