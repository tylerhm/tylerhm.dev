class Stack {
  constructor() {
    this.elements = []
  }
  push(e) {
    this.elements.push(e)
  }
  pop() {
    return this.elements.pop()
  }
  isEmpty() {
    return this.elements.length === 0
  }
  peek() {
    return !this.isEmpty() ? this.elements[this.elements.length - 1] : undefined
  }
  get length() {
    return this.elements.length
  }
}

export default Stack