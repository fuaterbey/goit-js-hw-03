function slugify(title) {

    const lowertitle = title.toLowerCase();
    const wordsList = lowertitle.split(" ");
    
    return wordsList.join("-");

}

console.log(slugify("The secrets OF JavaScript"));
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

