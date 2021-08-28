import React, { useState } from "react";
import "./App.css";
import Addtask from "./components/Addtask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

function App() {
	//State stuff
	const [inputText, setinputText] = useState("");
	const [inputRadio, setinputRadio] = useState("");
	const [totasks, setTotasks] = useState([]);

	//Filter the tasks by (done/not)
	const [status, setnewStatus] = useState("All");
	const setStatus = (isDone) => {
		setnewStatus(isDone);
	};

	return (
		<div>
			<header>
				<h1>ToDo Application</h1>
			</header>
			<Addtask
				inputText={inputText}
				setinputText={setinputText}
				inputRadio={inputRadio}
				setinputRadio={setinputRadio}
				totasks={totasks}
				setTotasks={setTotasks}
			/>
			<FilterTask setStatus={setStatus} status={status} />
			<ListTask
				totasks={totasks.filter((totask) => totask.isDone === status)}
				//totasks={totasks}
				setTotasks={setTotasks}
				filterIsDone={setnewStatus}
			/>
		</div>
	);
}

export default App;
