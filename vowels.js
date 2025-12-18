//function that takes a string and returns number of vowels

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


//export function
module.exports = {
    countVowels,
};