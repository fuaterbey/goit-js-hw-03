<<<<<<< HEAD
function filterArray(numbers, value) {

  const result = [];

  for (let i = 0; i < numbers.length; i++) {
      if (value < numbers[i]) {
      result.push(numbers[i]);
    }
    }
    
  return result;

}

console.log(filterArray([1, 2, 3, 4, 5, 84], 3));
=======
>>>>>>> c12b21cfa124fb3882947a8498c140e1316b104c
