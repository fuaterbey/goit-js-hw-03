function slugify(title) {

    const lowertitle = title.toLowerCase();
    
    const wordsList = lowertitle.split(" ");
    
    return wordsList.join("-"); 

}

console.log(slugify("The secrets OF JavaScript"));