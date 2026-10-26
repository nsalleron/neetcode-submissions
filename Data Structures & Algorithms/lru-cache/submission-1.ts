class SNode {
    key: number;
    val: number;
    prev: SNode;
    next: SNode;

    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    capacity: number;
    cache: Map<number, SNode>;
    lru: SNode;
    mru: SNode;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.lru = new SNode(0, 0);
        this.mru = new SNode(0, 0);
        this.lru.next = this.mru;
        this.mru.prev = this.lru;
    }

    remove(node: SNode) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node: SNode) {
        const prev = this.mru.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.mru;
        this.mru.prev = node;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new SNode(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.lru.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
