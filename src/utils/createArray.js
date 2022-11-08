const randomIntFromInterval = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export const createArray = (arrayLength) => {
	const array = [];

	for (let i = 0; i < arrayLength; i++) {
		array.push(randomIntFromInterval(100, 1000));
	}

	return array;
};
