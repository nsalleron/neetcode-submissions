class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []

        const openToClose = {
            '(': ')',
            '[': ']',
            '{': '}'
        }

        for(let c of s){
            if(openToClose[c]){
                stack.push(openToClose[c])
            } else {
                const parenthesis = stack.pop()
                if(c !== parenthesis){
                    return false
                }
            }
        }

        return stack.length === 0

    }
}
