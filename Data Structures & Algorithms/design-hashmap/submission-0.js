class ListNode {
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
    }
}

class MyHashMap {
    constructor() {
        this.size = 1000
        this.internal = Array.from({ length: this.size }, () => new ListNode(-1, -1))
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const head = this.internal[key % this.size]
        let current = head.next
        while(current !== null){
            if(current.key == key){
                current.value = value
                return
            }
            current = current.next
        }
        const newNode = new ListNode(key, value)
        newNode.next = head.next
        head.next = newNode
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const head = this.internal[key % this.size]
        let current = head.next
        while(current !== null){
            if(current.key == key){
                return current.value
            }
            current = current.next
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const head = this.internal[key % this.size]
        let current = head
        while(current.next !== null){
            if(current.next.key == key){
                current.next = current.next.next
                return
            
            }
            current = current.next
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
