class Solution {
    isArithmetical(c: string){
        return c === '+' || c === '-' || c === '*' || c === '/'
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []


        for(let token of tokens){
            if(this.isArithmetical(token)){
                const a = parseInt(stack.pop())
                const b = parseInt(stack.pop())
                if(token === '+'){
                    stack.push(a + b)
                } else if(token === '-'){
                    stack.push(b - a)
                } else if(token === '*'){
                    stack.push(a * b)
                }else if(token === '/'){
                    stack.push(Math.trunc(b / a ))
                }
            } else {
                stack.push(token)
            }
            // console.log({stack})
        }

        return stack[0]
    }
}
