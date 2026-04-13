class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = []

        for (let c of s){
            if( c != ']'){
                stack.push(c)
            } else {
                let substr = ''
                while(stack[stack.length -1] !== '['){
                    substr = stack.pop() + substr
                }

                stack.pop()

                let k = '';

                while(stack.length > 0 && !isNaN(stack[stack.length -1])){
                    k = stack.pop() + k
                }
                stack.push(substr.repeat(parseInt(k, 10)))
            }
        }

        return stack.join('')
    }
}
