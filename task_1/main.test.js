import { test } from "node:test";
import assert from "node:assert";
import mostFreqElements from "./main.js";

test('task_1_test', () => {
    let testCases = [
        [[], 0, []],
        [['1', '1', '22', '22', '22', '33', '33', '33', '1'], 6, ['22', '22', '22', '33', '33', '33']],
        [['1'], 1, ['1']]
    ];

    for (const [input, expectedLen, expectedOut] of testCases) {
        let out = mostFreqElements(input);

        assert.strictEqual(out.length, expectedLen);
        assert.deepStrictEqual(out, expectedOut);
    }
});