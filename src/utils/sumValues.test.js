import { sumValues } from "./sumValues.js";
import {describe,it} from 'node:test'
import assert from 'node:assert';
describe('sumValues', () => {
    it('should sum values', () => {
        const result = sumValues(1, 2);
        assert.strictEqual(result, 3);
    });
});