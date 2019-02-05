const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet the right name', () => {
    const result  = generateGreeting('Ivaylo');
    const correct = 'Hello Iv aylo!';
    expect(result).toBe(correct);
});