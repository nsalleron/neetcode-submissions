class Solution {
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
            if(this.isOpening(c)){
                stack.push(this.closingBracket(c))
            } else {
                if(c !== stack.pop()){
                    return false
                }
            }
        }
        return stack.length === 0

    }

    isOpening(c: string){
        return c === '(' || c === '{' || c === '['
    }

    closingBracket(s: string):string {
        if(s === '(')
            return ')'
        else if(s === '{')
            return '}'
        else 
            return ']'
    }
}
