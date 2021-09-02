import React from "react";
const initState = {
	tasks: [
		{
			id: 1,
			description: "task 1",
			isDone: "Done",
		},
		{
			id: 2,
			description: "task 2",
			isDone: "Not Done",
		},
	],
	filter: null,
};

function TaskReducer(state = initState, { type, payload }) {
	switch (type) {
		case "ADDTASK":
			return { ...state, tasks: [...state.tasks, payload] };
		case "EDITTASK":
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === payload.id ? payload : task
				),
			};
		case "FILTER_DONE":
			/* return {
				...state,
				tasks: state.tasks.filter((task) => task.isDone === payload),
			}; */
			return {
				...state,
				filter: payload,
			};
		default:
			return state;
	}
}

export default TaskReducer;
