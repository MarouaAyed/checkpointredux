export const addtask = (addedtask) => {
	return {
		type: "ADDTASK",
		payload: addedtask,
	};
};
export const edittask = (updatedtask) => {
	return {
		type: "EDITTASK",
		payload: updatedtask,
	};
};
export const filterDone = (filter) => {
	return {
		type: "FILTER_DONE",
		payload: filter,
	};
};
