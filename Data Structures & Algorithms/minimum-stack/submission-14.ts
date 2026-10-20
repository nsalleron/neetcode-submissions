class MinStack {
    stack: Array<number>
    minStack: Array<number>
    constructor() {
        this.minStack = []
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        if(this.minStack.length > 0){
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val))
        } else {
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}
