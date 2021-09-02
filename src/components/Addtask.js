import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtask } from "../actions/TaskActions";

function Addtask() {
	const [tasktoadd, settasktoadd] = useState("");
	const [isdonetask, setisdonetask] = useState("");

	//here i can write javascript code and function
	const inputTextHandler = (tasktoadd) => {
		settasktoadd(tasktoadd);
	};
	const inputRadioHandler = (isdonetask) => {
		setisdonetask(isdonetask);
	};

	const dispatch = useDispatch();

	return (
		<Form>
			<Form.Group className="col-md-6">
				<FormLabel>Description :</FormLabel>
				<Form.Control
					type="text"
					className="todo-input"
					placeholder="New Task"
					value={tasktoadd}
					onChange={(e) => inputTextHandler(e.target.value)}
				/>
				<Form.Label>IsDone :</Form.Label>
				<div
					key={`inline-${"radio"}`}
					className="mb-3 todo-input"
					onChange={(e) => inputRadioHandler(e.target.value)}
				>
					<Form.Check
						inline
						label="Done"
						name="group1"
						type={"radio"}
						id={`inline-${"radio"}-1`}
						value="Done"
					/>
					<Form.Check
						inline
						label="Not Done"
						name="group1"
						type={"radio"}
						id={`inline-${"radio"}-2`}
						value="Not Done"
					/>
				</div>

				<Button
					className="todo-button"
					onClick={() =>
						tasktoadd &&
						dispatch(
							addtask({
								description: tasktoadd,
								isDone: isdonetask,
								id: Date.now(),
							})
						)
					}
				>
					{" "}
					{/* tasktoadd && => pour que l'input' est vide n'ajouter pas */}
					Add Task
					<i className="fas fa-plus-square"></i>
				</Button>
			</Form.Group>
		</Form>
	);
}
export default Addtask;
