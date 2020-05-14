export default ([...validators], value) => {
	let isValid = true;

	for (let validator of validators) {
		isValid = isValid && validator(value);
	}

	return isValid;
};
