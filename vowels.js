//function that takes a string and returns number of vowels

const countVowels = (str) => 
    str.split('').filter(char => "aeiouAEIOU".includes(char)).length;


console.log(countVowels("hello") === 2, '"hello" should return 2');
    console.log(countVowels("christmastime") === 4, '"christmastime" should return 4');
    console.log(countVowels("jkl") === 0, '"jkl" should return 0');


//export function
module.exports = {
    countVowels,
};