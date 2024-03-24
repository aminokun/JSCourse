// Create a data structure that implements the requirements of a least recently use (LRU) cache with O(1) average time complexity.


export class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    getItem(key) {
        const item = this.cache.get(key)

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    putItem(key, val) {
        // delete to refresh insertion order
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // evict oldest item in the cache
        else if (this.cache.size == this.capacity) {
            this.cache.delete(this.oldesItem);
        }

        this.cache.set(key, val);

    }

    //using get allows you to call it as a property instead of a method: this.oldestItem vs this.oldestItem()
    get oldesItem() {
        return this.cache.keys().next().value;
    }
}