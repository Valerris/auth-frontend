export const required = (value) => value.trim() !== "";

export const length = (config) => (value) => {
	let result = null;

	config.min && (result = value.length >= config.min);

	config.max && (result = value.length <= config.max);

	return result;
};

export const match = (val1) => (val2) => val1 === val2;

export const email = (value) =>
	/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
		value
	);
