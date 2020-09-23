const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

test("should add 2 number", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Generate greeting", () => {
  const result = generateGreeting("Mike");
  expect(result).toBe(`Hello Mike`);
});

test("Generate greeting", () => {
  const result = generateGreeting();
  expect(result).toBe(`Hello Anonymous`);
});
