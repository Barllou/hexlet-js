/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const menu = {
  width: 400,
  height: 300,
  title: 'Menu',
};

const menu2 = {
  width: 400,
  height: 300,
  title: 'Menu',
};

// eslint-disable-next-line guard-for-in
const fn = (a, b) => {
  const arrKey = ['width', 'height', 'title'];
  for (let key of arrKey) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
};

console.log(fn(menu, menu2));
