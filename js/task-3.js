
function filterArray(numbers, value) {

  const resultArray = [];

  for (let i = 0; i < numbers.length; i++) {
      if (value < numbers[i]) {
      resultArray.push(numbers[i]);
    }
    }
    
  return resultArray;

}

console.log(filterArray([1, 2, 3, 4, 5, 84], 3));
