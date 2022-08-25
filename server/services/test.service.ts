export const getTest = async ({
	name,
}: {
	name: string;
}): Promise<{
	name: string;
} | null> => {
	return await new Promise((resolve, _reject) => {
		if (name === "error" || name === "unknown") {
			return resolve(null);
		}

		setTimeout(() => {
			return resolve({
				name,
			});
		}, 1000);
	});
};
