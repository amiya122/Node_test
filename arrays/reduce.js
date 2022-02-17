let array=[1,2,3,4,5,6];

function reducer(previous, current, index, array) {
  let returns=previous+current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}`);
  return returns;
}

array.reduce(reducer);
console.log(array);
