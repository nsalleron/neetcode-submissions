class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operators = ['+', '-', '*', '/']

        for(let c of tokens){
            if(operators.includes(c)){
                let n2 = stack.pop()
                let n1 = stack.pop()
                let newTotal = 0
                if(c === '+') newTotal = n1 + n2
                if(c === '-') newTotal = n1 - n2
                if(c === '*') newTotal = n1 * n2
                if(c === '/') newTotal = Math.trunc(n1 / n2)
                stack.push(newTotal)
            } else {
                stack.push(parseInt(c))
            }
        }

        return stack[0]

    }
}
