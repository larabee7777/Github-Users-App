import DisplayUsers from "../scripts";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { ReactQueryDevtools, useQuery } from "react-query";

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
      <DisplayUsers />
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
