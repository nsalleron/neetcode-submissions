class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class MyHashSet {
    constructor() {
        this.SIZE = 1000
        this.set = Array.from({length: this.SIZE}, () => new ListNode(-1))
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const modKey = key % this.SIZE
        let current = this.set[modKey]
        while(current !== null){
            if(current.val === key){
                return
            }
            if(current.next === null){
                current.next = new ListNode(key)
                return
            }
            current = current.next
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const modKey = key % this.SIZE
        let current = this.set[modKey]
        while(current.next !== null){
            if(current.next.val === key){
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const modKey = key % this.SIZE
        let current = this.set[modKey]
        while(current !== null){
            if(current.val === key){
                return true
            }
            current = current.next
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
