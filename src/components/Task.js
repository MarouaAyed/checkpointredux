import { Button, Table } from "react-bootstrap";
import React from "react";

const Task = ({ description, isDone, totask, totasks, setTotasks }) => {
	const editTask = () => {
		setTotasks(
			totasks.map((item) => {
				if (item.id === totask.id) {
					return { ...item, isDone: !item.isDone };
				}
				return item;
			})
		);
	};
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
						<td className="todo-item">{description}</td>
						<td>{isDone}</td>
						<td>
							<Button className="complete-btn" onClick={editTask}>
								<i class="far fa-edit"></i>
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Task;
