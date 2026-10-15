class Solution {
    /**
     * @param {string[]}
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []
        const arithmeticalSymbols = ['+','-','*','/']
        for(let c of tokens){

            if(arithmeticalSymbols.includes(c)){
                const a = stack.pop()
                const b = stack.pop()

                if(c === '+'){
                    stack.push(a+b)
                } else if (c === '-') {
                    stack.push(b-a)
                } else if (c === '*') {
                    stack.push(b*a)
                } else if (c === '/') {
                    stack.push(Math.trunc(b/a))
                }
            }else {
                stack.push(parseInt(c))
            }

        }
        return stack.pop()
    }

}