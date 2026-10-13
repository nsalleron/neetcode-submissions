class MinStack {
    internalStack: number[];
    min: number;

    constructor() {
        this.min = Infinity
        this.internalStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
       if(this.internalStack.length === 0){
        this.internalStack.push(0)
        this.min = val
       } else {
        this.internalStack.push(val - this.min)
        if(val < this.min) this.min = val
       }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.internalStack.length === 0 ) return
        const pop = this.internalStack.pop()
        if(pop < 0) this.min -= pop
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.internalStack[this.internalStack.length - 1]
        return top > 0 ? top + this.min : this.min
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min
    }
}
