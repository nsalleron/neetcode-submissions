class ListNode {

    constructor(key,val){
        this.key = key
        this.val = val
        this.next = null
    }
}

class MyHashMap {
    constructor() {
        this.size = 1000
        this.array = Array.from({length: this.size}, () => new ListNode(-1, -1))
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
    const head = this.array[key % this.size]
    let current = head.next

    while(current !== null){
        if(current.key === key){
            current.val = value
            return
        }
        current = current.next
    }
    
    let newNode = new ListNode(key, value)
    newNode.next = head.next
    head.next = newNode
}

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const head = this.array[key % this.size]
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
        const head = this.array[key % this.size]
        let previous = head
        let current = head.next
        while(current !== null){
            if(current.key === key){
                previous.next = current.next
                return
            }
            previous= current
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
