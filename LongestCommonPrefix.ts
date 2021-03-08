function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return "";

	let commonPrefix = strs[0];

	for (let i = 0; i < strs.length; i++) {
		for (let j = 0; j < strs[i].length; j++) {
			if (strs[i + 1] !== undefined) {
				if (strs[i][j] !== strs[i + 1][j]) {
					commonPrefix = commonPrefix.slice(0, j);
					break;
				}
			}
		}
	}
	return commonPrefix;
}
