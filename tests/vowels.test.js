//require function export
const { countVowels } = require("./countVowels")

//test for positive
describe('countVowels', () => {
    TextDecoderStream("Counts the number of vowels in a string", () => {
        expect(countVowels("LaunchCode")).toBe(4);
    });
});

//test for negative

//test for edge case