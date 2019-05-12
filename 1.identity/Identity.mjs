class Identity {
  constructor(value) {
    this.value = value;
  }

  /**
   * @param {Function(typeof this.value)} fn
   */
  transform(fn) {
    return fn(this.value);
  }

  toString() {
    return `Identity(${this.value})`;
  }
}

export default Identity;
