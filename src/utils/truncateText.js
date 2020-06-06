const truncateDescription = (text, length) => {
	if (typeof text === "string" && text.length > length) {
		return text.substr(0, length - 3).concat("...");
	}

	return text;
};

export default truncateDescription;
