import logo from "./logo.svg";
import "./App.css";

function AppMenu() {
  return (
    <div>
      <div class="topnav">
        <div class="logo">
          <h3>Github Users</h3>
        </div>
        <div>
          <a class="active" href="#home">
            Search Users
          </a>
          <a href="#news">Saved Users</a>
        </div>
      </div>
    </div>
  );
}

function AppSearch() {
  return (
    <div class="SearchQueryContainer">
      <div class="input-icons">
        <i class="fa fa-search icon"></i>
        <input class="input-field" type="text" placeholder="username"></input>
      </div>
      <button class="submit-btn" type="submit">
        search
      </button>
    </div>
  );
}

function AppSearchResults() {
  return (
    <div class="search-results">
      <h1>Search Results</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <AppMenu />
      <AppSearch />
      <AppSearchResults />
    </div>
  );
}

export default App;
