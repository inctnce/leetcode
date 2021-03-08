function maxArea(height: number[]): number {
	let max = 0;
	let i = 0;
	let j = height.length - 1;

	while (i <= j) {
		if (height[i] < height[j]) {
			const value = height[i] * (j - i);
			if (max < value) max = value;
			++i;
		} else {
			const value = height[j] * (j - i);
			if (max < value) max = value;
			--j;
		}
	}
	return max;
}
