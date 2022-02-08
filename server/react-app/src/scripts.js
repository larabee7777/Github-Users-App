import "./App.css";
import React, { useState } from "react";
import { DisplaySearchResult } from "./components/searchresults";

function DisplayUsers() {
  return (
    <div>
      <FetchUsers />
    </div>
  );
}

function DisplaySearchResults() {
  return (
    <div>
      <DisplaySearchResult />
    </div>
  );
}

export { DisplayUsers, DisplaySearchResults };

// function SearchBtn() {
//   return (
//     <div>
//       <h1>scripts search results</h1>
//     </div>
//   );
// }

// export default SearchBtn;
