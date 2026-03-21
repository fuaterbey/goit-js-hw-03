function filterArray(numbers, value) {

    result = [];

 for (let i = 0; i < numbers.length; i += 1) {
    
    if (value<numbers[i]) {
      result.push(numbers[i]);
    }

    }
    
    return result;

}

console.log(filterArray([1, 2, 3, 4, 5, 84], 3));