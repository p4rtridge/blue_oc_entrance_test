import { test } from "node:test";
import assert from "node:assert";
import sumOfTwoTopInteger from "./main.js";

test('task_2_test', () => {
    let testCases = [
        [[1, 4, 2, 3, 5], 9],
        [[], undefined],
        [[1, 2], 3],
    ];

    for (const [input, expectedOut] of testCases) {
        let out = sumOfTwoTopInteger(input);

        assert.deepStrictEqual(out, expectedOut);
    }
});