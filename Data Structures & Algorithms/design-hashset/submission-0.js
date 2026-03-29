class MyHashSet {


    constructor() {
        this.internalArray = new Array()
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
      if(!this.internalArray.includes(key)){
        this.internalArray.push(key)
      }  
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.internalArray.indexOf(key)
        if(index !== -1){
            this.internalArray.splice(index, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.internalArray.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
