import assert from "node:assert";

function mostFreqElements(strs) {
    let strMap = {}

    for (let i = 0; i < strs.length; i++) {
        strMap[strs[i].length] = (strMap[strs[i].length] || 0) + 1;
    }

    let maxFreq = Math.max(...Object.values(strMap));
    let mostFreqLen = Object.keys(strMap).filter(len => strMap[len] === maxFreq);

    let ans = [];
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length == mostFreqLen) {
            ans.push(strs[i]);
        }
    }

    return ans;
}

const input = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
const expected = ['ab', 'cd', 'gh'];

let out = mostFreqElements(input);

assert.deepStrictEqual(out, expected);

export default mostFreqElements;