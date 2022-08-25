const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// const flatten = arrays.reduce((acc, curr) => {
// console.log(`acc ${acc}, curr ${curr}`);
// }, [])

const arr = [];

arrays.forEach((elemento) => {
  // console.log(elemento);
  elemento.reduce((a, b) => {
    a.push(b);
    // console.log(a);
    return a;
  }, arr);
});

console.log(arr);