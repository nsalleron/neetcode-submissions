class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = []
        let curr = ''
        for(let c of path + '/'){
            if(c === '/'){
                if(curr === '..'){
                    if (stack.length) stack.pop()
                } else {
                    if(curr !== '' && curr !== '.'){
                        stack.push(curr)
                    } 
                   
                }
                 curr = ''
            } else {
                curr += c
            }
        }

        return '/' + stack.join('/')
    }
}
