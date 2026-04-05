class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0){
            return false
        } else if(s.length === 0){
            return true
        }
        const stack = []

        const parenthesis = {
            "[": "]",
            "(": ")",
            "{": "}"
        }

        for(let i = 0; i < s.length; i++){
            const c = s[i]
            if(Object.keys(parenthesis).includes(c)){
                stack.push(c)
            } else {
                const previousParenthesis = stack.pop()
                if(parenthesis[previousParenthesis] !== c){
                    return false
                }
            }
        }

        return stack.length === 0


    }
}
