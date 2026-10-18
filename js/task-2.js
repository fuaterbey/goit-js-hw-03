
function makeArray(firstArray, secondArray, maxLength) {
    
    const newArray = firstArray.concat(secondArray);

    return newArray.slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 3));
