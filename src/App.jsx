import { useEffect, useState } from "react";
import "./App.css";
import ResultRender from "./Components/Result/ResultRender";

function App() {
	const [data, setData] = useState([]);
  
	const getData = async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		const responseData = await response.json();
		console.log(responseData);
		setData(responseData);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<ResultRender />
			
			<div className="button">
				<button
					onClick={() => {
						setData([]);
					}}>
					delete All
				</button>
				<button
					onClick={() => {
						getData();
					}}>
					add All
				</button>
			</div>
			<div className="divAll">
				{data.map((item, index) => (
					<div className="allDiv" key={item.id}>
						<p>{item.id}</p>
						<h1>{item.title}</h1>
						<p>{item.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
