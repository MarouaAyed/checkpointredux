import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

function ListTask() {
	const tasks = useSelector((state) => state.TaskReducer.tasks);
	//console.log(tasks);
	const filter = useSelector((state) => state.filter);

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{/* {tasks.map((task) => (
					<TaskCard task={task} />
				))} */}
				{tasks.map((el, i) => (
					<TaskCard task={el} key={i} />
				))}
			</ul>
		</div>
	);
}

export default ListTask;
