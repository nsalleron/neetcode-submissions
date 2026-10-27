class SNode {
    key: number;
    val: number
    next: SNode | null
    prev: SNode | null

    constructor(key, val: number){
        this.key = key;
        this.val = val
        this.next = null
        this.prev = null
    }
}


class LRUCache {
    map: Map<number, SNode>
    capacity: number
    left: SNode
    right: SNode
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity
        this.left = new SNode(0,0 )
        this.right = new SNode(0,0)

        this.left.next = this.right
        this.right.prev = this.left

    }

    insert(node: SNode){
        const prev = this.right.prev;
        prev.next = node
        node.prev = prev
        node.next = this.right
        this.right.prev = node
    }

    remove(node: SNode){
        const next = node.next
        const prev = node.prev

        prev.next = next
        next.prev = prev
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.map.has(key)){
            const node = this.map.get(key)
            this.remove(node)
            this.insert(node)
            return node.val
        }

        return  -1
    }
    

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.map.has(key)){
            this.remove(this.map.get(key))
        }
        const newNode = new SNode(key, value)
        this.map.set(key, newNode)
        this.insert(newNode)




        if(this.map.size  > this.capacity){
            const nodeToDelete = this.left.next
            this.remove(nodeToDelete)
            this.map.delete(nodeToDelete.key)
        }

    }
}
