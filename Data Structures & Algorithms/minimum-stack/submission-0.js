class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            const currentMin = this.minStack[this.minStack.length - 1]

            if(val < currentMin){
                this.minStack.push(val)
            } else {
                this.minStack.push(currentMin)
            }
        }   
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        return this.stack.pop()
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
