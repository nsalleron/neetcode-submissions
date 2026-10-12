class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for(let c of s){
            if(closeToOpen[c]){ // si fermante
                if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]){
                    stack.pop()
                } else {
                    return false
                }
            } else { //ouvrante
                stack.push(c)
            }
        }

        return stack.length === 0
    }
}
