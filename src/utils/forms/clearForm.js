export default (fields, { ...obj }) => {
	const updatedObj = { ...obj };

	for (let field of fields) {
		updatedObj[field].touched = false;
		updatedObj[field].focused = false;
		updatedObj[field].valid = false;
		updatedObj[field].config.value = "";
	}

	return updatedObj;
};
