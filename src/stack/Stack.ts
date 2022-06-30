class Stack<T> {
  private data: T[];

  constructor(element?: T) {
    this.data = [];
    if (element) {
      this.data.push(element);
    }
  }

  push(element: T): void {
    this.data.push(element);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): Number {
    return this.data.length;
  }

  search(element: T): Number {
    return this.data.lastIndexOf(element);
  }
}

export default Stack;
