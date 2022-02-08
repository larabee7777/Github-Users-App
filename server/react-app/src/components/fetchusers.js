import React, { useState } from "react";
import "../App.css";

export class FetchUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
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
        <h1> All Users</h1>{" "}
        <div class="results-container">
          {items.map((item) => (
            <div class="user-cards">
              <input
                type="image"
                alt="user icon"
                id="userIcon"
                src={process.env.PUBLIC_URL + "images/user_icon_default.png"}
                width="50%"
              ></input>

              <div>Username: {item.login}</div>
              <div>Profile: {item.url}</div>
              <button class="view-profile-btn">VIEW PROFILE</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
