class MinStack {
    internalStack: number[];

    constructor() {
        this.internalStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.internalStack[this.internalStack.length] = val
    }

    /**
     * @return {void}
     */
    pop(): void {
        delete this.internalStack[this.internalStack.length - 1]
        this.internalStack.length = this.internalStack.length - 1
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.internalStack[this.internalStack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let val = this.internalStack[0]
        for(let i = 1 ; i < this.internalStack.length; i++){
            val = Math.min(val, this.internalStack[i])
        }
        return val
    }
}
