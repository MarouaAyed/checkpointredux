import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Addtask from "./components/Addtask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

function App() {
	const tasks = useSelector((state) => state.TaskReducer.tasks);
	const filter = useSelector((state) => state.filter);

	return (
		<div>
			<header>
				<h1>ToDo Application</h1>
			</header>
			<Addtask />
			<FilterTask />
			<ListTask tasks={tasks.filter((task) => task.isDone === filter)} />
		</div>
	);
}

export default App;
