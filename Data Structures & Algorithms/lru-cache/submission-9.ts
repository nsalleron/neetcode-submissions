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
    capacity: number
    cache: Map<number, SNode>
    left: SNode
    right: SNode
    
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
        this.left = new SNode(0,0)
        this.right = new SNode(0,0)

        this.left.next = this.right
        this.right.prev = this.left
    }

    insert(node: SNode){
        const previousNode = this.right.prev
        this.right.prev = node
        node.prev = previousNode
        previousNode.next = node
        node.next = this.right
    }

    remove(node: SNode){
        const previous = node.prev
        const next = node.next

        previous.next = next
        next.prev = previous
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        const node = this.cache.get(key)
        if (!node) {
            return -1;
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
        if(node !== undefined){
            this.remove(node)
        }
        const newNode = new SNode(key, value)
        this.cache.set(key, newNode)
        this.insert(newNode)

        if(this.cache.size > this.capacity){
            const nodeToDelete = this.left.next
            this.remove(nodeToDelete)
            this.cache.delete(nodeToDelete.key)
        }
    }
    
}
