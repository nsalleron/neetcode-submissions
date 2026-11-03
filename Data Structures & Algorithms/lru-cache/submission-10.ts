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
    cache: Map<number, SNode>
    capacity: number
    left: SNode
    right: SNode

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.cache = new Map()
        this.capacity = capacity
        this.left = new SNode(0,0)
        this.right = new SNode(0,0)

        this.left.next = this.right
        this.right.prev = this.left

    }

    remove(node: SNode){
        const previous = node.prev
        const next = node.next
        previous.next = next
        next.prev = previous
    }

    insert(node: SNode){
        const prev = this.right.prev
        node.next = this.right
        node.prev = prev
        prev.next = node
        this.right.prev = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.cache.get(key)
        if(!node){
            return -1
        }

        this.remove(node)
        this.insert(node)

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        const node = this.cache.get(key)
        if(node){
            this.remove(node)
            this.cache.delete(node.key)
        }

        const newNode = new SNode(key, value)
        this.cache.set(key, newNode)
        this.insert(newNode)

        if(this.cache.size > this.capacity){
            const nodeToDelete = this.left.next
            this.cache.delete(this.left.next.key)
            this.remove(this.left.next)
        }

    }
}
