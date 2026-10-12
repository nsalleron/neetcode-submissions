class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0){
            return false
        }

        const array = []

        for(let c of s){
            if(this.isOpening(c)){
                array.push(this.closingBracket(c))
            } else {
                if(c !== array.pop()){
                    return false
                }
            }
        }
        return array.length === 0

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
