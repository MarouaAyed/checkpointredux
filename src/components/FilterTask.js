import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterDone } from "../actions/TaskActions";

const FilterTask = () => {
	const dispatch = useDispatch();
	return (
		<Form>
			<div className="select">
				<select
					name="todos"
					className="filter-todo"
					onChange={(e) => dispatch(filterDone(e.target.value))}
				>
					<option value="All">All</option>
					<option value="Done">Done</option>
					<option value="Not Done">
						Not Done
					</option>
				</select>
			</div>
		</Form>
	);
};

export default FilterTask;
