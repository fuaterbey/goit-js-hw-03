function filterArray(numbers, value) {

  const result = [];

  for (let i = 0; i < numbers.length; i ++) {
      if (value<numbers[i]) {
      result.push(numbers[i]);
    }
    }
    
  return result;

}

console.log(filterArray([1, 2, 3, 4, 5, 84], 3));