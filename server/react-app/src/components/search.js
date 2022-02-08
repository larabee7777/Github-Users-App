import {
  DisplaySearchResult,
  DisplaySearchResults,
  DisplayUsers,
} from "../scripts";
import { testInputDisplay } from "./searchresults";
import "../App.css";
import React from "react";

function AppSearch() {
  return (
    <div class="SearchQueryContainer">
      <div class="input-icons">
        <i class="fa fa-search icon"></i>
        <input
          class="input-field"
          id="searchTermInput"
          type="text"
          placeholder="username"
        ></input>
      </div>
      <button class="submit-btn" type="submit" onClick={testInputDisplay}>
        search
      </button>
    </div>
  );
}

function AppSearchResults() {
  return (
    <div class="search-results">
      <DisplaySearchResults />
    </div>
  );
}

function Search() {
  return (
    <div>
      <AppSearch />
      <AppSearchResults />
    </div>
  );
}

export { Search };
