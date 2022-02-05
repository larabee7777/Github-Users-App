import "./App.css";
import React from "react";

var listUsers = [];

export class FetchUsers extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
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
    items.map((item) => listUsers.push(items));
    return (
      <div className="App">
        <h1> All Users </h1>
        {/* {items.map((item) => listUsers.push(items))} */}
        {console.log(listUsers[0][0].login)}
        <h3>{listUsers[0][0].login}</h3>
      </div>
    );
  }
}

class DisplayUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FetchUsers />
      </div>
    );
  }
}

export default DisplayUsers;

// function SearchBtn() {
//   return (
//     <div>
//       <h1>scripts search results</h1>
//     </div>
//   );
// }

// export default SearchBtn;
