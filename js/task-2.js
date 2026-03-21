function makeArray(firstArray, secondArray, maxLength) {
    
    const combineArray = firstArray.concat(secondArray);

    return combineArray.slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));