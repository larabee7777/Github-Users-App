import React from "react";

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
        {items.map((item) => (
          <ol key={item.id}>
            Login: {item.login}, Profile: {item.url},<button>ADD USER</button>
          </ol>
        ))}
      </div>
    );
  }
}
