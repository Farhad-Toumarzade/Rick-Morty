import { HeartIcon } from "@heroicons/react/24/outline";

export default function Navbar({ numOfResult }) {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <SearchResult numOfResult={numOfResult} />
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
function SearchResult({ numOfResult }) {
  <div className="navbar__result">found {numOfResult} charactors</div>;
}
function Favourites() {
  <button className="heart">
    <HeartIcon className="icon" />
    <span className="badge">4</span>
  </button>;
}
