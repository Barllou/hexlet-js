/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

const text = 'one two three two ONE one wow';

const countWords = (str) => {
  let q = _.words(one, two);
  return q;
};

console.log(countWords(text));

/*const course = { name: 'JS: React', slug: 'js-react' };

const entries = Object.entries(course);
// [[ 'name', 'JS: React' ], [ 'slug', 'js-react' ]]

for (const [key, value] of entries) {
  console.log(key);
  console.log(value);
}*/

/*const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

const fn = (obj, arr) => {
  const result = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    for (const el of arr) {
      if (key == el) {
        result[key] = obj[key];
      }
    }
  }
  return result;
};

console.log(fn(data, ['user', 'os']));*/
