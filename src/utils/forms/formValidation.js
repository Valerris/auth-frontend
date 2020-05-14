export default ({ ...controls }, { ...fields }) => {
	let isValid = true;

	for (let field of Object.values(fields)) {
		isValid = isValid && controls[field].valid;
	}

	return isValid;
};
