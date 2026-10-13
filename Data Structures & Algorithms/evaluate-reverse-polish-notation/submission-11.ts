class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens: string[]): number {
        const stack: number[] = []
        for(let c of tokens){
            if (!Number.isNaN(parseInt(c))){
                stack.push(parseInt(c))
            } else {
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
            }
            
        }

        return stack.pop()!
    }
}