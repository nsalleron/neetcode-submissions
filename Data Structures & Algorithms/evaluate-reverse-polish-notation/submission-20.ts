class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []
        const arithmeticalSymbols = ['+','-','*','/']
        for(let c of tokens){
            if(arithmeticalSymbols.includes(c)){
                let a = stack.pop()
                let b = stack.pop()

                if(c === '+'){
                    stack.push(b + a)
                }
                else if(c === '-'){
                    stack.push(b - a)
                    }
                else if(c === '*'){
                    stack.push(b * a)}
                else if(c === '/'){
                    stack.push(Math.trunc(b / a))}
            }else {
                stack.push(parseInt(c))
            }
        }
        return stack.pop()
    }
}
