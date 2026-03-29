class ListNode {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
    }
}

class MyHashMap {
    constructor() {
        this.size = 1000 //Pourquoi 1000?
        this.arr = Array.from({ length: 1000}, () => new ListNode(-1, -1))
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const head = this.arr[key % this.size]
        let current = head
        while (current.next !== null) {
            if (current.key === key) {
                current.val = value
                return
            }
            current = current.next
        }
        if (current.key === key) {
            current.val = value
            return
        }
        current.next = new ListNode(key, value)
    }

  

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const head = this.arr[key % this.size]
        let current = head
        while(current !== null){
            if(current.key === key) {
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
        const head = this.arr[key % this.size]
        let current = head
        while(current.next !== null){
            if(current.key === key){
                current.next.next = null
                return
            }
            current.next.next = current
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
