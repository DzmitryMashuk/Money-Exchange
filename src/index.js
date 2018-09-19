// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let result = {};

	if (0 >= currency) {
		return {};
	}

	if (10000 < currency) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}

	if (0 < Math.floor(currency / 50)) {
		result.H = Math.floor(currency / 50);
		currency -= result.H * 50;
	}

	if (0 < Math.floor(currency / 25)) {
		result.Q = Math.floor(currency / 25);
		currency -= result.Q * 25;
	}

	if (0 < Math.floor(currency / 10)) {
		result.D = Math.floor(currency / 10);
		currency -= result.D * 10;
	}

	if (0 < Math.floor(currency / 5)) {
		result.N = Math.floor(currency / 5);
		currency -= result.N * 5;
	}

	if (0 < currency) {
		result.P = currency;
	}

	return result;
}