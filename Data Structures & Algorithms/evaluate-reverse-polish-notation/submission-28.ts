class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []

        const res = 0
        for(let c of tokens){
            if(c === '+' || c === '-' || c ==='*' || c === '/'){
                let a = parseInt(stack.pop())
                let b = parseInt(stack.pop())

                if(c === '+'){
                    stack.push(a + b)
                } else if(c === '-'){
                    stack.push(b - a)
                } else if(c === '*'){
                    stack.push(a * b)
                } else {
                    stack.push(Math.trunc(b / a))
                }
            } else {
                stack.push(c)
            }
        }

        return stack[0]
    }
}
