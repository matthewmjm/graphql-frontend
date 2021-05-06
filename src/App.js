import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [flowers, setFlowers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/graphql", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `{
          flowers { 
            _id
            kind
            petals
          }
        }`,
			}),
		})
			.then((response) => response.json())
			.then((data) => setFlowers(data.flowers));
	}, []);

	return (
		<div className="App">
			<p>REACT APP</p>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
