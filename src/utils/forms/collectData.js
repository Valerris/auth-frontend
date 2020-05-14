export default (fields, { ...obj }) => {
	const formData = {};

	for (let field of fields) {
		formData[field] = obj[field].config.value;
	}

	return formData;
};
