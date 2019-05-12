import Just from './Just';
import Nothing from './Nothing';
import { print } from '../utils';

// Same as the Identity example, addition is simple

const result1 = new Just(5).transform(value1 =>
    new Just(7).transform(value2 =>
      new Just(value1 + value2)));

print(result1);

// //////////////////////////////////////////////////////

var result2 = new Just(5).transform(value1 =>
  Nothing.transform(irrelevantAndUndefined => {
    // @see Nothing.mjs, specifically `Nothing.transform`
    // This function will never be executed by Nothing.
    // So it doesn't matter how many transforms or Justs we create now
    // none of them will run.
    // return new Just(wont + run);
  }));

print(result2);

// /////////////////////////////////////////////////////////////////////////////

// This is where it gets really really interesting. We can avoid null checking
// and error handling by using this pattern, as we are guaranteed not to be
// executing any transforms on a null value, nor are we going to access any
// of it's properties.
// The first time I saw this was in the Elm language.

const User = {
  getAvatar: function () {
      return Nothing; // no avatar
  }
};

const getUser = () => new Just(User);

var url = getUser()
  .transform(user => user.getAvatar()) // returns a Nothing...
  .transform(avatar => avatar.url); // ... so unsafe property access won't happen

if (url instanceof Just) {
  print(`avatar.url=${url.value}`);

} else {
  print(`avatar.url=nothing`);
}
