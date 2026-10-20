class Solution {
    closingParenthesis(s: string): string {
        if(s === '('){
            return ')'
        }
        if(s === '{'){
            return '}'
        }
        if(s === '['){
            return ']'
        }
    }



    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0){
            return false
        }

        const stack = []

        for(let c of s){
            if(c === '(' || c === '{' || c === '['){
                stack.push(this.closingParenthesis(c))
            } else {
                const lastParenthesis = stack.pop()
                if(lastParenthesis !== c){
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
