import Stack from "./Stack";

describe("Stack", () => {
  test("empty constructor creates new empty stack", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.pop()).toBe(undefined);
    expect(stack.peek()).toBe(undefined);
    expect(stack.search(5)).toBe(-1);
  });

  test("can be instantiated with first element", () => {
    const stack = new Stack(55);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(55);
    expect(stack.search(55)).toBe(0);
    expect(stack.pop()).toBe(55);
  });

  test("elements can be push onto stack", () => {
    const stack = new Stack(55);

    stack.push(44);
    stack.push(72);
    stack.push(12);

    expect(stack.size()).toBe(4);
    expect(stack.search(44)).toBe(1);
  });

  test("elements can be popped off of stack", () => {
    const stack = new Stack(55);

    stack.push(44);
    stack.push(72);
    stack.push(12);

    expect(stack.pop()).toBe(12);
    expect(stack.pop()).toBe(72);
    expect(stack.pop()).toBe(44);
    expect(stack.size()).toBe(1);
    expect(stack.pop()).toBe(55);
    expect(stack.isEmpty()).toBe(true);
  });

  test("search returns -1 if element not found", () => {
    const stack = new Stack(55);

    stack.push(44);
    stack.push(72);
    stack.push(12);

    expect(stack.search(69)).toBe(-1);
  });

  test("search returns element index nearest to top of stack if multiple of same value in stack", () => {
    const stack = new Stack(55);

    stack.push(44);
    stack.push(55);
    stack.push(55);
    stack.push(44);
    stack.push(66);

    expect(stack.search(44)).toBe(4);
    expect(stack.search(55)).toBe(3);
  });
});
