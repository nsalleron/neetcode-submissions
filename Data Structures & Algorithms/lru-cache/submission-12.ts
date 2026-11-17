class SNode {
    key: number;
    val: number;
    next: SNode | null;
    prev: SNode | null;

    constructor(val: number, key: number) {
        this.val = val;
        this.key = key;
    }
}
class LRUCache {
    capacity: number;
    left: SNode;
    right: SNode;
    cache = new Map<number, SNode>();
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.left = new SNode(0, -1);
        this.right = new SNode(0, -1);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node: SNode) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node: SNode) {
        const prev = this.right.prev;
        this.right.prev = node;
        node.prev = prev;
        node.next = this.right;
        prev.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.cache.get(key);
        if (!node) {
            return -1;
        }

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
        let node = this.cache.get(key);
        if (!node) {
            node = new SNode(value, key);
        } else {
            this.remove(node);
            node.val = value;
        }

        this.insert(node)
        this.cache.set(key, node)

        if(this.cache.size > this.capacity){
            const nodeToRemove = this.left.next
            this.remove(nodeToRemove)
            this.cache.delete(nodeToRemove.key)
        }
    }
}
