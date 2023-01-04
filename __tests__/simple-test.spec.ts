// This can be deleted, and is only here to verify Jest is setup correctly
describe('tests to verify setup', () => {
	test('should fail', () => {
		const expected = 1;

		expect(expected).toBe(2);
	});

	test('should pass', () => {
		const expected = 1;

		expect(expected).toBe(1);
	});
});