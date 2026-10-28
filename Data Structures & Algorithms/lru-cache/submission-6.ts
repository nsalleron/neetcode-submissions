class SNode {
    key: number;
    val: number;
    next: SNode | null;
    prev: SNode | null;

    constructor(key, val: number) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    cache: Map<number, SNode>;
    capacity: number;
    left: SNode;
    right: SNode;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
        this.left = new SNode(0, 0);
        this.right = new SNode(0, 0);

        this.right.prev = this.left;
        this.left.next = this.right;
    }

    insert(node: SNode) {
        const previous = this.right.prev;

        previous.next = node;
        node.prev = previous;

        node.next = this.right;
        this.right.prev = node;
    }

    remove(node: SNode) {
        const nextNode = node.next;
        const prevNode = node.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const existing = this.cache.get(key);

        if (existing !== undefined) {
            this.remove(existing);
        }

        const newNode = new SNode(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            const lru = this.left.next
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
