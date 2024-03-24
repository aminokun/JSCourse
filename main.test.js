import { expect, test } from "vitest";
import { sum } from "./CumulativeSum";
import { search } from "./BinarySearch";
import { LRU } from "./LeastRecentlyUsed";

test('cumulative sum of an array', () => {
    expect(sum([1, 3, 5, 7])).toBe(16);
    expect(sum([1, 3, 5, 40])).toBe(49);
    expect(sum([1, 3, 5, 7, 3, 4, 6, 4, 5, 1])).toBe(39);
    expect(sum([-1, -3, -5, -7, -3, -4, -6, -4, -5, -1])).toBe(-39);
});

test('binary searching an array', () => {
    expect(search(['a', 'b', 'c', 'd', 'x', 'y', 'z'], 'x')).toBe(4);
    expect(search(['a', 'b', 'c', 'd', 'x', 'y', 'z'], 'a')).toBe(0);
    expect(search(['a', 'b', 'c', 'd', 'x', 'y', 'z'], 'f')).toBe(-1);
})

const lru = new LRU(3);
lru.putItem(1, 'deez');
lru.putItem(2, 'nuts');
lru.putItem(3, 'bruh');
test('LRU in an array', () => {
    expect(lru.oldesItem).toBe(1);
    expect(lru.getItem(2)).toBe('nuts');
})


