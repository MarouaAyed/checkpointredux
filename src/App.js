import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Addtask from "./components/Addtask";
import FilterTask from "./components/FilterTask";
import ListTask from "./components/ListTask";

function App() {
	const tasks = useSelector((state) => state.TaskReducer.tasks);
	const filter = useSelector((state) => state.TaskReducer.filter);
	const filtredList = () => {
		//clo
		//console.log(filter);
		switch (filter) {
			case "Done":
				return tasks.filter((el) => el.isDone === "Done");
			case "Not Done":
				return tasks.filter((el) => el.isDone === "Not Done");

			default:
				return tasks;
		}
	};
	return (
		<div>
			<header>
				<h1>ToDo Application</h1>
			</header>
			<Addtask />
			<FilterTask />
			<ListTask tasks={filtredList()} />
		</div>
	);
}

export default App;
