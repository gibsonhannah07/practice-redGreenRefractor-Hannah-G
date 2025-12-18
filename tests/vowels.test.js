// testing using red green refractor method

//red: trying a failing test
function testCountVowels() {
    console.log(countVowels("hello") === 2, '"hello" should return 2');
    console.log(countVowels("christmastime") === 4, '"christmastime" should return 4');
    console.log(countVowels("jkl") === 0, '"jkl" should return 0');
}
testCountVowels(); //should fail since countVowels is not initially implemented

//green: passing test
function countVowels(str) {
    const vowels = "aeiouAEIOU"; 
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

testCountVowels(); // everything should pass
