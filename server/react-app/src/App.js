import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import "./scripts";

import { Search } from "./components/search";
import { SavedUsers } from "./components/savedusers";
import { DisplaySearchResults } from "./scripts";
import { FetchUsers } from "./components/fetchusers";

// function AppMenu() {
//   return (
//     <div>
//       <div class="topnav">
//         <div class="logo">
//           <h3>Github Users</h3>
//         </div>
//         <div>
//           <a class="active" href="#home">
//             Search Users
//           </a>
//           <a href="#news">Saved Users</a>
//         </div>
//       </div>
//     </div>
//   );
// }

function AppMenu() {
  return (
    <div>
      <div class="topnav">
        <div class="logo">
          <h3>Github Users</h3>
        </div>
        <div>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
          <NavLink to="/savedusers" activeStyle>
            Saved Users
          </NavLink>
          <NavLink to="/fetchusers" activeStyle>
            Fetch Users
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppMenu />
      <Routes>
        <Route exact path="/" exact element={<Search />} />
        <Route exact path="/search" exact element={<Search />} />
        <Route path="/savedusers" element={<SavedUsers />} />
        <Route path="/fetchusers" element={<FetchUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
