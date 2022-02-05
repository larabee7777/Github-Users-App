import { ReactQueryDevtools, useQuery } from "react-query";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function SavedUsers() {
  return (
    <div class="search-results">
      <h1>Saved Users Component</h1>
    </div>
  );
}

export { SavedUsers };

// class SavedUsers extends React.Component {
//   // Constructor
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       DataisLoaded: false,
//     };
//   }

//   // ComponentDidMount is used to
//   // execute the code
//   componentDidMount() {
//     fetch("https://api.github.com/users")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           items: json,
//           DataisLoaded: true,
//         });
//       });
//   }
//   render() {
//     const { DataisLoaded, items } = this.state;
//     if (!DataisLoaded)
//       return (
//         <div>
//           <h1> Loading ... </h1>{" "}
//         </div>
//       );

//     return (
//       <div className="App">
//         <h1> All Users </h1>{" "}
//         {items.map((item) => (
//           <ol key={item.id}>
//             Login: {item.login}, Profile: {item.url}
//           </ol>
//         ))}
//       </div>
//     );
//   }
// }

// function SavedUsers() {
//   const { isLoading, error, data } = useQuery("random-user", () =>
//     fetch("https://api.github.com/users").then((res) => res.json())
//   );
//   if (isLoading) return "Loading...";
//   if (error) return "Error!";
//   return (
//     <>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>
//   );
// }

// <>
//       <div>
//         <h3>Name</h3>

//         <img src={data.results[0].picture.medium} alt="random user" />
//         <div>{isFetching ? "Updating..." : ""}</div>
//       </div>
//     </>
