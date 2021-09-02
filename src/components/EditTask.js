import { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edittask } from "../actions/TaskActions";

function EditTask({ task }) {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setnewDescription(task.description);
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();

	const handleSave = () => {
		dispatch(
			edittask({ ...task, description: newDescription, isDone: newIsdone })
		);
		setShow(false);
	};

	const [newDescription, setnewDescription] = useState(task.description);
	const [newIsdone, setnewIsdone] = useState(task.isDone);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Edit Task
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="my-modal">Edit Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormControl
						type="text"
						value={newDescription}
						onChange={(e) => setnewDescription(e.target.value)}
					></FormControl>
					<div
						key={`inline-${"radio"}`}
						className="mb-3 todo-input"
						onChange={(e) => setnewIsdone(e.target.value)}
					>
						<Form.Check
							style={{ color: "red" }}
							inline
							label="Done"
							name="group1"
							type={"radio"}
							id={`inline-${"radio"}-1`}
							value="Done"
						/>
						<Form.Check
							style={{ color: "red" }}
							inline
							label="Not Done"
							name="group1"
							type={"radio"}
							id={`inline-${"radio"}-2`}
							value="Not Done"
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleSave}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default EditTask;
