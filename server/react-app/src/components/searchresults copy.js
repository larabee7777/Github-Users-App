import React, { useState } from "react";

var searchTerm = [];
var searchTermURL = "";

export function testInputDisplay() {
  searchTerm = document.getElementById("searchTermInput").value;
  searchTermURL = `https://api.github.com/users/${searchTerm}`;
  console.log("fetchURL:" + searchTermURL);
}

export class DisplaySearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(searchTermURL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading ... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Search Result</h1> Login: {items.login}, Profile: {items.url},
        <button>ADD USER</button>
      </div>
    );
  }
}
