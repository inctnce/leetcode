function myAtoi(str) {
	const INT_MAX = 2 ** 31 - 1;
	const INT_MIN = -(2 ** 31);
	let i = 0;
	let sign = 1;
	let result = 0;
	if (str.length === 0) return 0;

	str = str.trim();

	if (i < str.length && (str[i] === "+" || str[i] === "-")) sign = str[i++] === "-" ? -1 : 1;

	while (i < str.length && str[i] >= "0" && str[i] <= "9") {
		result = result * 10 + (str[i++] - "0");
	}

	if (result > INT_MAX) {
		return sign === 1 ? INT_MAX : INT_MIN;
	}

	return result * sign;
}
