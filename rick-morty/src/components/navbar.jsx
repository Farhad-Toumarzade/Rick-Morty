import { HeartIcon } from "@heroicons/react/24/outline";
import { Children } from "react";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      {children}
      <Favourites />
    </nav>
  );
}

function Logo() {
  return <div className="navbar__logo">LOGO😍</div>;
}

function Search() {
  <input type="text" className="text-field" placeholder="search..." />;
}
export function SearchResult({ numOfResult }) {
  <div className="navbar__result">found {numOfResult} charactors</div>;
}
function Favourites() {
  <button className="heart">
    <HeartIcon className="icon" />
    <span className="badge">4</span>
  </button>;
}
