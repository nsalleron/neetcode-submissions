class ListNode {
    constructor(key, val){
        this.key = key
        this.val = val
        this.next = null
    }
}


class MyHashMap {
    constructor() {
        this.size = 1000
        this.arr = Array.from({length: this.size}, () => new ListNode(-1, -1))
    }

    hash(key){
        return key % this.size
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const head = this.arr[this.hash(key)]
        let current = head
        while(current !== null){
            if(current.key === key){
                current.val = value
                return
            }
            if(current.next === null){
                break
            } else {
                current = current.next

            }

        }
        current.next = new ListNode(key, value)

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const head = this.arr[this.hash(key)]
        let current = head.next
        while(current !== null){
            if(current.key === key){
                return current.val
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
        const head = this.arr[this.hash(key)]
        let current = head
        while(current !== null && current.next !== null){
            if(current.next.key === key){
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
