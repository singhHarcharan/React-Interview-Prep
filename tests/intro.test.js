import { describe, test, it, expect } from "vitest";
import { calculateAverage, max } from "../src/intro";

describe('max', () => {
    it('should return the greater of two numbers', () => {
        expect(max(5, 3)).toBe(5);
    })
})

describe('calculateAverage', () => {
    it('should return NaN for an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    });
    it('should return first element if size of array is one', () => {
        expect(calculateAverage([1])).toBe(1);
    });
    it('should return average of all numbers present', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    });
})