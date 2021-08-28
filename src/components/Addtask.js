import React from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

const Addtask = ({
	inputText,
	setinputText,
	inputRadio,
	setinputRadio,
	totasks,
	setTotasks,
}) => {
	//here i can write javascript code and function
	const inputTextHandler = (e) => {
		//	console.log(e.target.value);
		setinputText(e.target.value);
	};
	const inputRadioHandler = (e) => {
		//	console.log(e.target.value);
		setinputRadio(e.target.value);
	};
	const submitTotaskHandler = (e) => {
		e.preventDefault();
		// console.log("hhh");
		setTotasks([
			...totasks,
			{ description: inputText, isDone: inputRadio, id: Math.random() * 1000 },
		]);
		setinputText("");
	};
	return (
		<Form>
			<Form.Group className="col-md-6">
				<FormLabel>Description :</FormLabel>
				<Form.Control
					value={inputText}
					type="text"
					className="todo-input"
					onChange={inputTextHandler}
				/>
				<Form.Label>IsDone :</Form.Label>
				<div
					className="todo-input"
					onChange={inputRadioHandler}
					value={inputRadio}
				>
					<Form.Check inline label="Done" type="radio" value="Done" />
					<Form.Check inline label="Not Done" type="radio" value="Not Done" />
				</div>

				<Button
					className="todo-button"
					type="submit"
					onClick={submitTotaskHandler}
				>
					Add Task {}
					<i className="fas fa-plus-square"></i>
				</Button>
			</Form.Group>
		</Form>
	);
};

export default Addtask;
