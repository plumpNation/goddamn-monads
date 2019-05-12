/**
 * NOTE: Not a class.
 * By exposing an object like this, we prevent the ability to call `new` and
 * thereby ensure that it cannot have state.
 */
const Nothing = {
  transform: function () {
    return this;
  },

  toString: function () {
    return 'Nothing';
  }
}

// Adding a freeze here just to ensure no abuse of this object.
// > "Love without trust must be real, or you couldn't explain parents." - me, now
Object.freeze(Nothing);

export default Nothing;
