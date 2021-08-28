import React from "react";
import { Form } from "react-bootstrap";

const FilterTask = ({ setStatus, status }) => {
	const statusHandler = (e) => {
		console.log(e.target.value);
		setStatus(e.target.value);
	};
	return (
		<Form>
			<div className="select">
				<select name="todos" className="filter-todo" onChange={statusHandler}>
					<option value="All">All</option>
					<option value="Done">Done</option>
					<option value="Not Done">Not Done</option>
				</select>
			</div>
		</Form>
	);
};

export default FilterTask;
