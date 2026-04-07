class StockSpanner {
    constructor() {
        this.stack = [] //Pair index + Price
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.stack.push(price)
        let number = 0
        for(let i = this.stack.length - 1; i >= 0; i--)
            if(this.stack[i] <= price) number += 1 
            else break

        return number



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