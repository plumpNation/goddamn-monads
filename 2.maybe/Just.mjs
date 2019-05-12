class Just {
  constructor(value) {
    this.value = value;
  }

  transform(fn) {
    return fn(this.value);
  }

  toString() {
    return `Just(${this.value})`;
  }
}

export default Just;
