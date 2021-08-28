import React from "react";
import Task from "./Task";

const ListTask = ({ totasks}) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{totasks.map((totask) => (
					<Task
						key={totask.id}
						description={totask.description}
						isDone={totask.isDone}
						totask={totask}
					/>
				))}
			</ul>
		</div>
	);
};

export default ListTask;
