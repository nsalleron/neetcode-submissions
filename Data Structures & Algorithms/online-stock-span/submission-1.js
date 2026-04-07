class StockSpanner {
    constructor() {
        this.stack = [] // price + span
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1
        while(this.stack.length !== 0 && this.stack[this.stack.length - 1][0] <= price){
            span += this.stack.pop()[1]
        }
        this.stack.push([price, span])
        return span
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */



/*

const res = Array.from({length: temperatures.length}, () => 0)
        const stack = [] // Pair, index + temp

        for(let i = 0; i < temperatures.length; i++){
            const t = temperatures[i]
            while(stack.length > 0 && t > stack[stack.length -1][1]){
                const [index, _] = stack.pop()
                res[index] = i - index
            }
            stack.push([i, t])
        }

        return res
*/