class MinStack {
    stack: number[]
    minStack: number[]
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        this.minStack.push(Math.min(val, this.minStack.length > 0 ? this.minStack[this.minStack.length-1] : val))
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
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.stack.length-1]
    }
}
