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
        const openToClose = {
            '(':')',
            '[':']',
            '{':'}'
        }

        for(let i = 0; i < s.length ; i++){
            if(openToClose[s[i]]){
                stack.push(openToClose[s[i]])
            } else {
                const pop = stack.pop()
                if(s[i] != pop){
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
