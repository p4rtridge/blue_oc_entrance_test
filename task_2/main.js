import assert from "node:assert";

function sumOfTwoTopInteger(nums) {
    if (nums.length < 2) {
        return
    }

    let first = -1, second = -1;
    for (const num of nums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second) {
            second = num;
        }
    }

    return first + second;
}

const input = [1, 4, 2, 3, 5];
const expected = 9;

let out = sumOfTwoTopInteger(input);

assert.strictEqual(out, expected);

export default sumOfTwoTopInteger;