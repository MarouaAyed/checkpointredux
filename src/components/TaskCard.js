import React from "react";
import { Table } from "react-bootstrap";
import EditTask from "./EditTask";

function TaskCard({ task }) {
	return (
		<div className="todo">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Description</th>
						<th>isDone</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="todo-item">{task.description}</td>
						<td>{task.isDone}</td>
						<td>
							<EditTask task={task} />
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default TaskCard;
