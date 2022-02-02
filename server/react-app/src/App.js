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
      <button type="submit" class="submit-btn">
        <i class="fa fa-search fa-2x"></i>
      </button>
      <input
        type="text"
        class="submit-text"
        placeholder="  username"
        name="search"
      ></input>
    </div>
  );
}

function App() {
  return (
    <div>
      <AppMenu />
      <AppSearch />
    </div>
  );
}

export default App;
