class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens: string[]): number {
        const stack: number[] = []
        const operators = ['+','-', '/', '*']
        for(let c of tokens){
            if(operators.includes(c)){
                const b = stack.pop()!
                const a = stack.pop()!
                let res: number
                if(c === '+'){
                    res = a + b 
                } else if (c === '-'){
                    res = a - b
                } else if (c === '/'){
                    res = Math.trunc(a / b)
                } else {
                    res = a * b
                }
                stack.push(res)
            }else {
                stack.push(parseInt(c))
            }
        }

        return stack.pop()!
    }
}